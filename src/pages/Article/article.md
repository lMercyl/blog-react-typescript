### Introduction

In An [Introduction to GraphQL](https://gist.github.com/Jekins/2bf2d0638163f1294637#Links), you learned that GraphQL is an open-source query language and runtime for APIs created to solve issues that are often experienced with traditional REST API systems.

A good way to begin understanding how all the pieces of GraphQL fit together is to make a GraphQL API server. Although Apollo GraphQL is a popular commercial GraphQL implementation favored by many large companies, it is not a prerequisite for making your own GraphQL API server.

In this tutorial, you will make an Express API server in Node.js that serves up a GraphQL endpoint. You will also build a GraphQL schema based on the GraphQL type system, including operations, such as queries and mutations, and resolver functions to generate responses for any requests. You will also use the GraphiQL integrated development environment (IDE) to explore and debug your schema and query the GraphQL API from a client

### Prerequisites

To follow this tutorial, you will need:

- A local Node.js environment, which you can set up by following the How To Install Node.js and Create a Local
- Development Environment tutorial for your operating system and distribution.
- An understanding of the fundamental concepts of GraphQL, which you can find in the tutorial, An Introduction to GraphQL.
- Familiarity with HTTP.
- A basic knowledge of HTML and JavaScript, which you can gain from the series, How To Build a Website With HTML and How To Code in JavaScript.

# Setting Up an Express HTTP Server

```tsx
import { Link } from 'react-router-dom';
import styles from './CardProject.module.scss';

interface CardProjectProps {
  title: string;
  date: string;
  description: string;
  article: string;
  demo: string;
  url: string;
}

const CardProject = ({ title, date, description, article, demo, url }: CardProjectProps) => {
  return (
    <div className={styles.card}>
      <div className="d-flex align-flex-start flex-column">
        <time>{date}</time>
        <Link to={url}>{title}</Link>
        <p>{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link to={article}>Статья</Link>
        <Link to={demo}>Демо</Link>
      </div>
    </div>
  );
};

export default CardProject;
```

The first step is to `Express` set up an server, which you can do before writing any GraphQL code.

    $ npm install express cors

Nodemon is a tool that helps develop Node-based applications by automatically restarting the application when file changes in the directory are detected.

    $ npm install express cors

> Note: Using a real data store is outside of the scope of this tutorial. Accessing and manipulating data in a GraphQL server is performed through the reducers. This can be done by manually connecting to the database, through an ORM like Prisma. Asynchronous resolvers make this possible through the context of a resolver. For the rest of this tutorial, we will use the data variable to represent datastore values.

![](https://avatars3.githubusercontent.com/u/27908738?v=3&s=88)
