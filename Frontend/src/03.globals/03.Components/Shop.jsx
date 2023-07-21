import React, { useState, useEffect } from "react";
import axios from "axios";
import Article from "./Article";
import Navbar from "./Navbar";

const Shop = () => {
  const [articles, setArticles] = useState([]);
  const [selectedChoice, setSelectedChoice] = useState("");


  useEffect(() => {
    axios
      .get("http://localhost:3000/articles")
      .then((res) => {
        setArticles(res.data);

        console.warn("articles", res.data);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            console.error("erreur en recupérant le matos", err);
          }
          if (err.response.status === 500) {
            console.error("erreur", err);
          }
        }
      });
  }, []);

  const handleChoice = (e) => {
    setSelectedChoice(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="w-full h-full bg-orange-200 px-5 py-8 mx-auto mb-8">
        <h1 className="flex justify-center px-3 py-3 mx-auto text-slate-800 text-2xl tracking-wide font-Lugrasimo font-extrabold italic">
          Le shop de Gnome Dépot, articles de zinzins et matos enchanté à prix modique !
        </h1>
        <div className="flex justify-center my-3">
          <select
            name="filter"
            id=""
            className="border text-sm text-slate-500 font-Lugrasimo rounded-lg border-black w-48 px-1 py-1"
            onChange={handleChoice}
            value={selectedChoice}
          >
            <option value="">tu cherches un truc ?</option>
            {articles.map((e) => {
              return <option key={e.id}>{e.article_name}</option>;
            })}
          </select>
        </div>
        <ul className="grid grid-cols-3 gap-5">
          {articles
            .filter((e) => selectedChoice === "" || selectedChoice === e.article_name)
            .map((e) => (
              <Article
                key={e.article_id}
                article_picture={e.article_picture}
                article_name={e.article_name}
                article_description={e.article_description}
                article_price={e.article_price}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default Shop;
