import React from 'react';
import { Dropdown, /* DropdownButton */ } from 'react-bootstrap';
import styled from 'styled-components';


const StyledDropdown = styled(Dropdown)`
  // Add your styles for the Dropdown here
  .dropdown-toggle {
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    padding: 10px 20px;
    width: 100%;
  }
`;

const StyledDropdownItem = styled(Dropdown.Item)`
  // Add your styles for the Dropdown.Item here
  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

const CategoryDropdown = ({ categories, selectedCategory, handleCategoryChange }) => {
  return (
    <StyledDropdown onSelect={handleCategoryChange}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {selectedCategory || 'All Categories'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <StyledDropdownItem eventKey="">All Categories</StyledDropdownItem>
        {categories.map((category, index) => (
          <StyledDropdownItem key={index} eventKey={category}>
            {category}
          </StyledDropdownItem>
        ))}
      </Dropdown.Menu>
    </StyledDropdown>
  );
};



export default CategoryDropdown;
