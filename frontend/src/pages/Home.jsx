import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/articles/1")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">📰 Latest News</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}

export default Home;
