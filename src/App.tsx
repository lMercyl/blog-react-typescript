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
      <Route path="/blog-react-typescript" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/blog-react-typescript/about" element={<About />} />
        <Route path="/blog-react-typescript/projects" element={<Projects />} />
        <Route path="/blog-react-typescript/posts" element={<Articles />} />
        <Route path="/blog-react-typescript/post/:id" element={<Article />} />
      </Route>
    </Routes>
  );
};

export default App;
