import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import "./App.css";
import MainBody from "./components/MainBody";


const App = () => {
  const [articles, setArticles] = useState([1]);
  const fetchArticles = async () => {
    try {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      const res = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2022-08-29&sortBy=publishedAt&apiKey=65b2a276626546ceb2125b3f1d35ac1e", requestOptions);
      const raw = await res.text();
      const data = JSON.parse(raw);
      if (data.articles)
        setArticles(data.articles)
    } catch (error) {
      console.log('error', error)
    }
  }
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="col-8 mx-auto">
      <Navigation articles={articles} />
      <Header articles={articles} />
      <MainBody articles={articles} />

      {/* <AllCategories data={landingPageData.AllCategories} /> */}
    </div>
  );
};

export default App;
