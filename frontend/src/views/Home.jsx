import MediaItem from '../components/MediaItem';
import MyComponent from '../components/MyComponent';
import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <section className="home-view">
      <h2 className="home-title">My media</h2>
      <MyComponent />

      <div className="media-table-wrap">
        <table className="media-table">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Owner</th>
              <th>Description</th>
              <th>Created</th>
              <th>Size</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {mediaArray.map(item => (
              <MediaItem key={item.media_id} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Home;
