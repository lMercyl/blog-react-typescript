import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Container className="pt-5">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
