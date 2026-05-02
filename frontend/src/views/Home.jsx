import MediaItem from '../components/MediaItem';
import MyComponent from '../components/MyComponent';
import {useMedia} from '../hooks/apiHooks';
import {useNavigate} from 'react-router';

const Home = () => {
  const {mediaArray, deleteMedia, modifyMedia} = useMedia();
  const navigate = useNavigate();

  const handleDelete = async item => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    try {
      await deleteMedia(item.media_id, token);
      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModify = async item => {
    const token = localStorage.getItem('token');

    if (!token) {
      return;
    }

    try {
      await modifyMedia(
        item.media_id,
        {
          title: item.title,
          description: item.description,
        },
        token
      );
      navigate(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="text-left">
      <h2 className="mb-4 mt-0 font-(--heading) text-[clamp(1.4rem,2.5vw,2rem)] text-(--text-h)">
        My media
      </h2>
      <MyComponent />

      <div className="overflow-x-auto rounded-2xl border border-(--border) bg-[color-mix(in_oklab,var(--card-bg)_92%,white_8%)]">
        <table className="w-full min-w-225 border-collapse">
          <thead>
            <tr>
              <th className="bg-[color-mix(in_oklab,var(--card-bg)_78%,#ffe8c4_22%)] px-3 py-3 text-left text-[0.74rem] uppercase tracking-[0.06em] text-[color-mix(in_oklab,var(--text)_72%,white_28%)]">
                Thumbnail
              </th>
              <th className="bg-[color-mix(in_oklab,var(--card-bg)_78%,#ffe8c4_22%)] px-3 py-3 text-left text-[0.74rem] uppercase tracking-[0.06em] text-[color-mix(in_oklab,var(--text)_72%,white_28%)]">
                Title
              </th>
              <th className="bg-[color-mix(in_oklab,var(--card-bg)_78%,#ffe8c4_22%)] px-3 py-3 text-left text-[0.74rem] uppercase tracking-[0.06em] text-[color-mix(in_oklab,var(--text)_72%,white_28%)]">
                Owner
              </th>
              <th className="bg-[color-mix(in_oklab,var(--card-bg)_78%,#ffe8c4_22%)] px-3 py-3 text-left text-[0.74rem] uppercase tracking-[0.06em] text-[color-mix(in_oklab,var(--text)_72%,white_28%)]">
                Description
              </th>
              <th className="bg-[color-mix(in_oklab,var(--card-bg)_78%,#ffe8c4_22%)] px-3 py-3 text-left text-[0.74rem] uppercase tracking-[0.06em] text-[color-mix(in_oklab,var(--text)_72%,white_28%)]">
                Created
              </th>
              <th className="bg-[color-mix(in_oklab,var(--card-bg)_78%,#ffe8c4_22%)] px-3 py-3 text-left text-[0.74rem] uppercase tracking-[0.06em] text-[color-mix(in_oklab,var(--text)_72%,white_28%)]">
                Size
              </th>
              <th className="bg-[color-mix(in_oklab,var(--card-bg)_78%,#ffe8c4_22%)] px-3 py-3 text-left text-[0.74rem] uppercase tracking-[0.06em] text-[color-mix(in_oklab,var(--text)_72%,white_28%)]">
                Type
              </th>
            </tr>
          </thead>
          <tbody>
            {mediaArray.map(item => (
              <MediaItem
                key={item.media_id}
                item={item}
                onDelete={handleDelete}
                onModify={handleModify}
              />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Home;
