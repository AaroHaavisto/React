import {useUserContext} from '../hooks/contextHooks';
import {Link} from 'react-router';

const MediaItem = ({item, onDelete, onModify}) => {
  const {user} = useUserContext();
  const isAdmin = Boolean(
    user?.is_admin ?? user?.admin ?? user?.role === 'admin'
  );
  const canEdit = Boolean(user && (isAdmin || user.username === item.username));

  const buttonClass =
    'inline-flex items-center rounded-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--card-bg)_70%,white_30%)] px-4 py-2 text-sm font-bold tracking-[0.03em] text-[var(--text-h)] no-underline transition duration-200 hover:-translate-y-px hover:bg-[color-mix(in_oklab,var(--accent)_18%,white_82%)] hover:shadow-[0_7px_16px_-12px_rgba(0,0,0,0.6)]';

  return (
    <tr className="transition-colors duration-150 hover:bg-[color-mix(in_oklab,var(--accent)_8%,white_92%)]">
      <td className="border-b border-[color-mix(in_oklab,var(--border)_72%,white_28%)] px-3 py-3 align-top">
        <img
          className="mb-1.5 block h-[72px] w-24 rounded-[10px] object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
        <Link className={buttonClass} to="/single" state={{item}}>
          Klikkaa auki
        </Link>
        {canEdit && (
          <div className="mt-2 flex flex-wrap gap-2">
            <button
              className={buttonClass}
              onClick={() => {
                console.log('modify', item);
                onModify(item);
              }}
              type="button"
            >
              Modify
            </button>
            <button
              className={buttonClass}
              onClick={() => {
                console.log('delete', item);
                onDelete(item);
              }}
              type="button"
            >
              Delete
            </button>
          </div>
        )}
      </td>
      <td className="border-b border-[color-mix(in_oklab,var(--border)_72%,white_28%)] px-3 py-3 align-top">
        {item.title}
      </td>
      <td className="border-b border-[color-mix(in_oklab,var(--border)_72%,white_28%)] px-3 py-3 align-top">
        {item.username}
      </td>
      <td className="border-b border-[color-mix(in_oklab,var(--border)_72%,white_28%)] px-3 py-3 align-top">
        {item.description}
      </td>
      <td className="border-b border-[color-mix(in_oklab,var(--border)_72%,white_28%)] px-3 py-3 align-top">
        {item.created_at}
      </td>
      <td className="border-b border-[color-mix(in_oklab,var(--border)_72%,white_28%)] px-3 py-3 align-top">
        {item.filesize}
      </td>
      <td className="border-b border-[color-mix(in_oklab,var(--border)_72%,white_28%)] px-3 py-3 align-top">
        {item.media_type}
      </td>
    </tr>
  );
};

export default MediaItem;
