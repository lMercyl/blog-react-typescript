import './Footer.scss';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="d-flex align-items-center flex-column">
          <Col lg={6}>
            <nav>
              <span>Made by Artem Ivanov</span>
              <Link to="https://vk.com/mercy2436">Vk.com</Link>
              <Link to="https://vk.com/mercy2436">Telegram</Link>
              <Link to="https://vk.com/mercy2436">Gmail</Link>
              <Link to="https://vk.com/mercy2436">RSS</Link>
            </nav>
          </Col>
          <Col lg={3}>
            <nav>
              <Link to="https://vk.com/mercy2436">Gatsby</Link>
              <Link to="https://vk.com/mercy2436">GitHub</Link>
              <Link to="https://vk.com/mercy2436">Netlify</Link>
            </nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
