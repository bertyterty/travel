import './App.css';
import Header from './components/Header';
import Post from './components/Post';
import data from './data';

function App() {
  const posts = data.map(data => <Post key={data.id} {...data} />)
  return (
    <>
      <Header />
      <section className="posts">
        {posts}
      </section>
    </>
  );
}

export default App;
