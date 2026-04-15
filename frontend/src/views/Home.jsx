import {useEffect, useState} from 'react';
import MediaItem from '../components/MediaItem';
import MyComponent from '../components/MyComponent';
import fetchData from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const mediaUrl = import.meta.env.VITE_MEDIA_API + '/media';
        const authUrl = import.meta.env.VITE_AUTH_API + '/users/';
        const mediaItems = await fetchData(mediaUrl);

        const mediaWithUsers = await Promise.all(
          mediaItems.map(async item => {
            try {
              const result = await fetchData(authUrl + item.user_id);
              return {...item, username: result.username};
            } catch (error) {
              console.error(error);
              return {...item, username: 'Unknown'};
            }
          })
        );

        setMediaArray(mediaWithUsers);
        console.log(mediaWithUsers);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

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
