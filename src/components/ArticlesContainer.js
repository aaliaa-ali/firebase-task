import db from "../firebase";
import React, { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import Article from "./Article";
import AddNewArticle from "./AddNewArticle";

function ArticlesContainer() {
  let [articles, setArticles] = useState([]);
  const usersCollectionRef = collection(db, "articles");

  const getArticles = async () => {
    onSnapshot(usersCollectionRef, (data) => {
      const articles = [];
      data.forEach((article) => {
        articles.push({ id: article.id, ...article.data() });
      });
      setArticles(articles);
    });
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <div className="container">
      {articles.map((article) => {
        return <Article article={article} key={article.id} />;
      })}
      <AddNewArticle />
    </div>
  );
}

export default ArticlesContainer;
