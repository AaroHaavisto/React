const MediaItem = ({item}) => {
  console.log('item', item);
  return (
    <tr key={item.filename}>
      <td>
        <img src={item.thumbnail} />
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
