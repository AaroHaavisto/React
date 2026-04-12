import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const item = state?.item;

  if (!item) {
    return <div>No item selected</div>;
  }

  const isVideo = item?.media_type?.startsWith('video');

  return (
    <dialog className="single-view-dialog" open={Boolean(item)}>
      {item && (
        <article className="single-view-content">
          <button
            type="button"
            className="single-view-close"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
          <h3>{item.title}</h3>
          <p>{item.description || 'No description available.'}</p>
          {isVideo ? (
            <video className="single-view-media" controls src={item.filename}>
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              className="single-view-media"
              src={item.filename}
              alt={item.title}
            />
          )}
        </article>
      )}
    </dialog>
  );
};

export default Single;
