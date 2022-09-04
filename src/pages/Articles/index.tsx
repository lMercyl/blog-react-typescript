import React from 'react';
import { Row, Col } from 'react-bootstrap';
import AritcleList from '../../components/ArticleList';
import Category from '../../components/Category';
import Tags from '../../components/Tags';
import './Articles.scss';

const Articles = () => {
  return (
    <Row className="pt-5 justify-content-between">
      <Col lg={8}>
        <h1>Статьи</h1>
        <AritcleList />
        <AritcleList />
        <AritcleList />
        <AritcleList />
      </Col>
      <Col lg={3}>
        <Category />
        <Tags />
      </Col>
    </Row>
  );
};

export default Articles;
