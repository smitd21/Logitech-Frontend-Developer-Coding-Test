import React from 'react';

const Tabs = ({ allItems, activeTab, onTabClick, onBack, onForward }) => {
  return (
    <div className="flex items-center justify-between space-x-4">
      <button
        onClick={onBack}
        className={`border ${
          activeTab === 0 || allItems.length === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'border-gray-300'
        } rounded py-1 px-2`}
      >
        &lt;
      </button>
      {allItems.map((item, index) => (
        <button
          key={index}
          onClick={() => onTabClick(index)}
          className={`font-bold ${
            activeTab === index ? 'text-blue-500' : 'text-gray-500'
          } border border-gray-300 rounded py-1 px-2`}
        >
          {item.title}
        </button>
      ))}
      <button
        onClick={onForward}
        className={`border ${
          activeTab === allItems.length - 1 || allItems.length === 0
            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
            : 'border-gray-300'
        } rounded py-1 px-2`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Tabs;
