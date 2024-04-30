import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Tabs from './components/Tabs';
import Articles from './components/Articles';
import { ALL_ITEMS } from './utils/constants';

const AppLayout = () => {
  const [articles, setArticles] = useState(ALL_ITEMS);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => setActiveTab(index);

  const handleBack = () => setActiveTab((prevTab) => Math.max(prevTab - 1, 0));

  const handleForward = () => setActiveTab((prevTab) => Math.min(prevTab + 1, articles.length - 1));

  const handleDelete = (deletedArticle) => {
    setArticles((prevArticles) => {
      const updatedArticles = prevArticles.filter((article) => article !== deletedArticle);
      return updatedArticles;
    });
    setActiveTab((prevTab) => {
      const deletedIndex = articles.findIndex((article) => article === deletedArticle);
      return prevTab === deletedIndex ? Math.min(prevTab, articles.length - 2) : prevTab;
    });
  };

  const handleReset = () => {
    setArticles(ALL_ITEMS);
    setActiveTab(0);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="hidden sm:block">
        <Tabs
          allItems={articles}
          activeTab={activeTab}
          onTabClick={handleTabClick}
          onBack={handleBack}
          onForward={handleForward}
          onDelete={handleDelete}
        />
      </div>
      <div className="sm:flex sm:flex-col sm:items-center">
        {articles.length > 0 ? (
          <div className="sm:hidden">
            {articles.map((article, index) => (
              <div key={index} className="mb-4">
                <Articles article={article} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-4 sm:hidden">All articles are deleted! Press the Reset button to restore them.</p>
        )}
        <div className="hidden sm:block">
          {articles.length > 0 ? (
            <Articles article={articles[activeTab]} onDelete={handleDelete} />
          ) : (
            <p>All articles are deleted! Press the Reset button to restore them.</p>
          )}
        </div>        
      </div>
      <hr className="mt-6 mb-2 border-t border-gray-300" />
      <button onClick={handleReset} className="border border-gray-300 rounded py-1 px-2 mt-4">Reset</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
