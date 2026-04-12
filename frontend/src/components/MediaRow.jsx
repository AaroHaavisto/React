import PropTypes from 'prop-types';

const MediaRow = ({item, selectedItem, setSelectedItem}) => {
  const isSelected = selectedItem?.media_id === item.media_id;

  return (
    <tr className={isSelected ? 'media-row media-row-selected' : 'media-row'}>
      <td>
        <button
          type="button"
          className="open-single-view-btn"
          onClick={() => {
            setSelectedItem(item);
          }}
        >
          Open
        </button>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.shape({
    media_id: PropTypes.number.isRequired,
    filename: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    created_at: PropTypes.string.isRequired,
    filesize: PropTypes.number.isRequired,
    media_type: PropTypes.string.isRequired,
  }).isRequired,
  selectedItem: PropTypes.shape({
    media_id: PropTypes.number,
  }),
  setSelectedItem: PropTypes.func.isRequired,
};

MediaRow.defaultProps = {
  selectedItem: null,
};

export default MediaRow;
