import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Post from '../../components/Post';
import md from './article.md';
import './About.scss';

const About = () => {
  const [content, setContent] = React.useState<string>('');

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(md);
        setContent(data);
      } catch (err) {
        console.log(err);
      }
    })();
  });

  return (
    <Row className="pt-5 d-flex justify-content-between">
      <Col lg={8}>
        <Post content={content} />
      </Col>
      <Col lg={3}>
        <div className="me">
          <p>Я</p>
          <img src="images/avatar.jpg" alt="Artem Ivanov" />
        </div>
      </Col>
    </Row>
  );
};

export default About;
