import {useLocation, useNavigate} from 'react-router';

const Single = () => {
  const {state} = useLocation();
  const navigate = useNavigate();
  const {item} = state;

  if (!item) {
    return null;
  }

  console.log('item', item);

  return (
    <section className="single-view">
      <button className="back-button" onClick={() => navigate(-1)}>
        Takaisin
      </button>
      <h2>{item.title}</h2>
      <p className="single-owner">Owner: {item.username}</p>
      <img className="single-image" src={item.filename} alt={item.title} />
      <p className="single-description">{item.description}</p>
    </section>
  );
};
export default Single;
