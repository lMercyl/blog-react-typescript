import axios from 'axios';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Post from '../../components/Post';
import Tag from '../../components/Tags/Tag';
import md from './article.md';
import './Article.scss';

const Article = () => {
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
        <div className="description">
          <p>Details</p>
          <li>
            <span>Published July 03, 2022</span>
          </li>
          <p>Category</p>
          <li>
            <span>
              <a href="/">Meta</a>
            </span>
          </li>
          <p>Tags</p>
          <div className="tagGroup">
            <Tag />
            <Tag />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Article;
