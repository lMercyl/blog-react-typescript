import { Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Articles from './pages/Articles';
import Article from './pages/Article';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="posts" element={<Articles />} />
        <Route path="post/:id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;
