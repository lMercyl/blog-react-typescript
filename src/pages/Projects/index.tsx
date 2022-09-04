import { Col, Row } from 'react-bootstrap';
import Project from '../../components/Project';
import './Projects.scss';

const Projects = () => {
  return (
    <>
      <Row>
        <h1 className="mt-5 mb-4">Проекты</h1>
      </Row>
      <Row className="gy-4">
        <Col lg={4}>
          <Project />
        </Col>
        <Col lg={4}>
          <Project />
        </Col>
        <Col lg={4}>
          <Project />
        </Col>
        <Col lg={4}>
          <Project />
        </Col>
        <Col lg={4}>
          <Project />
        </Col>
        <Col lg={4}>
          <Project />
        </Col>
        <Col lg={4}>
          <Project />
        </Col>
      </Row>
    </>
  );
};

export default Projects;
