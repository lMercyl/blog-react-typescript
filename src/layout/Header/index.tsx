import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Container>
        <Row className="justify-content-between">
          <Col lg={12} className="d-flex align-items-center justify-content-between">
            <nav>
              <div className="header-nav-item">
                <Link to="/blog-react-typescript/">Артем Иванов</Link>
              </div>
              <div className="header-nav-item">
                <Link to="/blog-react-typescript/about">Обо мне</Link>
              </div>
              <div className="header-nav-item">
                <Link to="/blog-react-typescript/posts">Статьи</Link>
              </div>
              <div className="header-nav-item">
                <Link to="/blog-react-typescript/projects">Проекты</Link>
              </div>
              <div className="header-nav-item">
                <a href="https://github.com/lMercyl" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <div className="header-nav-item">
                <a href="https://t.me/m11ono" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </div>
            </nav>
            <Button>
              <span>Dark</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
