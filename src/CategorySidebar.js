import React from 'react';

const CategorySidebar = ({ onCategorySelect }) => {
  const categories = ['All', 'Science and Technology', 'Arts and Culture', 'Civil Rights and Social Justice', 'Business and Entrepreneurship', 'Education'];

  return (
    <div className="category-sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category} onClick={() => onCategorySelect(category)}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategorySidebar;
