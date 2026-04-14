import {useEffect, useState} from 'react';
import MediaItem from '../components/MediaItem';
import MyComponent from '../components/MyComponent';
import fetchData from '../utils/fetchData';

const Home = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        const json = await fetchData('test.json');
        setMediaArray(json);
        console.log(json);
      } catch (error) {
        console.error(error);
      }
    };

    getMedia();
  }, []);

  return (
    <>
      <h2>My media</h2>
      <MyComponent />

      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map(item => (
            <MediaItem key={item.filename} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
