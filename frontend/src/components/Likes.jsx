import {useEffect, useState} from 'react';
import {useLike} from '../hooks/apiHooks';
import {useUserContext} from '../hooks/contextHooks';

const likeButtonClass =
  'inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)] disabled:cursor-not-allowed disabled:opacity-60';

const Likes = ({item}) => {
  const [likeCount, setLikeCount] = useState(0);
  const [userLike, setUserLike] = useState(null);
  const {user} = useUserContext();
  const {postLike, deleteLike, getLikeCountByMediaId, getLikeByUser} =
    useLike();

  useEffect(() => {
    const loadLikes = async () => {
      if (!item?.media_id) {
        return;
      }

      try {
        const countResult = await getLikeCountByMediaId(item.media_id);
        setLikeCount(Number(countResult) || 0);
      } catch {
        setLikeCount(0);
      }

      if (!user) {
        setUserLike(null);
        return;
      }

      try {
        const likeResult = await getLikeByUser(
          item.media_id,
          localStorage.getItem('token')
        );
        setUserLike(likeResult ?? null);
      } catch {
        setUserLike(null);
      }
    };

    loadLikes();
  }, [getLikeByUser, getLikeCountByMediaId, item?.media_id, user]);

  const handleLikeClick = async () => {
    const token = localStorage.getItem('token');

    try {
      if (userLike?.like_id) {
        await deleteLike(userLike.like_id, token);
        setUserLike(null);
      } else {
        await postLike(item.media_id, token);
        const likeResult = await getLikeByUser(item.media_id, token);
        setUserLike(likeResult ?? null);
      }

      const countResult = await getLikeCountByMediaId(item.media_id);
      setLikeCount(Number(countResult) || 0);
    } catch (error) {
      console.error(error);
    }
  };

  const isLoggedIn = Boolean(user);
  const isLiked = Boolean(userLike);

  return (
    <div className="mt-4 flex flex-wrap items-center gap-3">
      <button
        className={likeButtonClass}
        disabled={!isLoggedIn}
        onClick={handleLikeClick}
        type="button"
      >
        <span aria-hidden="true">{isLiked ? '♥' : '♡'}</span>
        <span className="ml-2">{isLiked ? 'Liked' : 'Like'}</span>
      </button>
      <span className="text-sm font-semibold text-(--text)">
        {likeCount} like{likeCount === 1 ? '' : 's'}
      </span>
    </div>
  );
};

export default Likes;
