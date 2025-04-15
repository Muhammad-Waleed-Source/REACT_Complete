import { getAlbums, getPosts, getRandomUser } from "./api";
import { useState, useEffect } from "react";
import PostCard from "./components/PostCard";
import UserCard from "./components/UserCard";
import "./App.css";
import Albums from "./components/Albums";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  }, []);

  useEffect(() => {
    getAlbums().then((albums) => setAlbums(albums));
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => setUserData(user.results[0]));
  };

  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User</button>
      {albums ? (
        albums.map((e) => <Albums key={e.id} id={e.id} title={e.title} />)
      ) : (
        <p>No data</p>
      )}
      {data ? (
        data.map((e) => <PostCard key={e.id} id={e.id} title={e.title} body={e.body} />)
      ) : (
        <p>No data</p>
      )}
    </div>
  );
}

export default App;
