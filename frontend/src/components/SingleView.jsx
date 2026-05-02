import Likes from './Likes';

const SingleView = props => {
  const {item, setSelectedItem} = props;

  if (!item) {
    return null;
  }

  return (
    <dialog open>
      <button
        onClick={() => {
          setSelectedItem(null);
        }}
      >
        Sulje
      </button>
      <img src={item.thumbnail} />
      <p>Owner: {item.username}</p>
      <Likes item={item} />
    </dialog>
  );
};

export default SingleView;
