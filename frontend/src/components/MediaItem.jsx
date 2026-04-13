import {Link} from 'react-router';

const MediaItem = ({item, setSelectedItem}) => {
  return (
    <tr key={item.filename}>
      <td>
        <img src={item.thumbnail} />
        <Link to="/single" state={{item}}>
          Klikkaa auki
        </Link>
      </td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{item.created_at}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
    </tr>
  );
};

export default MediaItem;
