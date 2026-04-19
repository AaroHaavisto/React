import {Link} from 'react-router';

const MediaItem = ({item}) => {
  return (
    <tr className="media-row" key={item.media_id}>
      <td>
        <img className="media-thumb" src={item.thumbnail} alt={item.title} />
        <Link className="media-link" to="/single" state={{item}}>
          Klikkaa auki
        </Link>
      </td>
      <td>{item.title}</td>
      <td>{item.username}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};

export default MediaItem;
