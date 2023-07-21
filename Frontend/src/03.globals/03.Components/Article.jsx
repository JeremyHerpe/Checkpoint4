import React from "react";

const Article = ({ article_picture, article_name, article_description, article_price }) => {
  return (
    <>
      <div className="flex flex-row rounded-lg bg-gray-100 border border-gray-800 px-2 py-2 cursor-pointer drop-shadow-xl">
        <img
          className="object-fit h-auto w-48 rounded-l-lg border drop-shadow-lg"
          src={article_picture}
          alt="matos"
        />
        <div className="flex flex-col justify-start mx-auto p-2 font-Lugrasimo">
          <h5 className="mx-auto text-xl font-bold uppercase text-neutral-800">
            {article_name}
          </h5>
          <p className="mx-auto text-base text-neutral-600">
            {article_description}
          </p>

          <p className="mx-auto self-center text-xl text-neutral-500">{article_price} gold
          </p>

        </div>
      </div>
    </>
  );
};

export default Article;
