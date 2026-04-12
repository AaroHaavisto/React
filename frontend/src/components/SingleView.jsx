import PropTypes from 'prop-types';

const SingleView = props => {
  const {item, setSelectedItem} = props;

  const isVideo = item?.media_type?.startsWith('video');

  return (
    <dialog className="single-view-dialog" open={Boolean(item)}>
      {item && (
        <article className="single-view-content">
          <button
            type="button"
            className="single-view-close"
            onClick={() => {
              setSelectedItem(null);
            }}
          >
            Close
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

SingleView.propTypes = {
  item: PropTypes.shape({
    filename: PropTypes.string.isRequired,
    media_type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
  setSelectedItem: PropTypes.func.isRequired,
};

SingleView.defaultProps = {
  item: null,
};

export default SingleView;
