import React from 'react';
import './Home.scss';
import { Col, Row } from 'react-bootstrap';
import CardPost from '../../components/CardPost';
import Button from '../../components/Button';
import CardTutorial from '../../components/CardTutorial';
import CardProject from '../../components/CardProject';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/hooks';
import { selectArticle } from '../../redux/article/selector';
import { fetchArticles } from '../../redux/article/asyncActions';

interface Tutorial {
  title: string;
  createdAt: string;
  imgUrl: string;
  id: number;
}

const Home = () => {
  const dispath = useAppDispatch();
  const { items, status } = useSelector(selectArticle);
  const [tutorials, setTutorials] = React.useState<Array<Tutorial>>([]);

  React.useEffect(() => {
    try {
      dispath(fetchArticles());
    } catch (err) {
      console.log(err);
    }
    (async () => {
      try {
        const { data } = await axios.get('https://61a54a844c822c0017042179.mockapi.io/tutorials');
        setTutorials(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <Row className="home-head d-flex justify-content-between">
        <Col lg={6}>
          <div>
            <h1>Привет, я Артем</h1>
            <p>
              Являюсь фронтенд-разработчиком, который занимается созданием различных проектов. Мне
              нравится изучать что-то новое.
              <br />
              <br />
              Это моя цифровая библиотка. &#128214;
            </p>
            <p></p>
          </div>
        </Col>
        <Col lg={4}>
          <img width={260} height={260} src="images/logo.svg" alt="Logo" />
        </Col>
      </Row>
      <div className="head-card-block d-flex align-items-center justify-content-between mb-4">
        <h3>Последние статьи</h3>
        <Button>Посмотреть все</Button>
      </div>
      <Row className="card-articles gy-4">
        {items.map((post) => (
          <Col key={post.createdAt} lg={3}>
            <CardPost
              title={post.title}
              date={post.createdAt}
              category={post.category}
              url="/blog-react-typescript"
              urlCategory="/blog-react-typescript"
            />
          </Col>
        ))}
      </Row>
      <h3 className="mb-4">Популярные туториалы</h3>
      <Row className="gy-4">
        {tutorials.map((tutorial) => (
          <Col key={tutorial.id} lg={4}>
            <CardTutorial
              title={tutorial.title}
              date={tutorial.createdAt}
              imgUrl={tutorial.imgUrl}
              url="/blog-react-typescript"
            />
          </Col>
        ))}
      </Row>
      <h3 className="mt-5 mb-4">Другие проекты</h3>
      <Row className="card-articles gy-4">
        <Col lg={3}>
          <CardProject
            title="Keyboard Accordion"
            date="2020"
            description="Play the accordion with your keyboard!"
            article="/blog-react-typescript"
            demo="/blog-react-typescript"
            url="/blog-react-typescript"
          />
        </Col>
        <Col lg={3}>
          <CardProject
            title="Keyboard Accordion"
            date="2020"
            description="Play the accordion with your keyboard!"
            article="/blog-react-typescript"
            demo="/blog-react-typescript"
            url="/blog-react-typescript"
          />
        </Col>
        <Col lg={3}>
          <CardProject
            title="Keyboard Accordion"
            date="2020"
            description="Play the accordion with your keyboard!"
            article="/blog-react-typescript"
            demo="/blog-react-typescript"
            url="/blog-react-typescript"
          />
        </Col>
        <Col lg={3}>
          <CardProject
            title="Keyboard Accordion"
            date="2020"
            description="Play the accordion with your keyboard!"
            article="/blog-react-typescript"
            demo="/blog-react-typescript"
            url="/blog-react-typescript"
          />
        </Col>
      </Row>
      <h3 className="mt-4">Узнавать про новые записи</h3>
      <p className="sub-text mb-3 mt-3">
        Если я напишу что-то новое, я дам вам знать через информационный бюллетень. Я редко
        обновляюсь и никогда не спамлю.
      </p>
      <Button>Подписаться</Button>
    </>
  );
};

export default Home;
