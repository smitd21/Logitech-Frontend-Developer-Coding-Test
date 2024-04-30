import React from 'react';

const Articles = ({ article, onDelete }) => {
  const handleDelete = () => {
    onDelete(article);
  };

  return (
    <div className="mx-auto border rounded p-4 my-5">
      <h2 className="text-lg font-bold mb-2">{article.title}</h2>
      <p>{article.content}</p>
      <div className="text-right">
        <button onClick={() => onDelete(article)} className="border border-red-500 rounded py-1 px-2 mt-2">Delete</button>
      </div>
    </div>
  );
}

export default Articles;
