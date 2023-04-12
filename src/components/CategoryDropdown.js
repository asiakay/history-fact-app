import React from 'react';
import { Dropdown, /* DropdownButton */ } from 'react-bootstrap';
import styled from 'styled-components';

const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};


const StyledDropdown = styled(Dropdown)`
  // Add your styles for the Dropdown here
  .dropdown-toggle {
    background-color: #4caf50;
    color: white;
    border-radius: 0px;
    padding: 10px 20px;
    width: 95%;
  }

  @media (min-width: ${breakpoints.sm}) {
    padding: 12px 24px;
  }

  @media (min-width: ${breakpoints.lg}) {
    padding: 14px 28px;
  }
}
`;

const StyledDropdownItem = styled(Dropdown.Item)`
  // Add your styles for the Dropdown.Item here
  &:hover {
    background-color: #4caf50;
    color: white;
  }

  @media (min-width: ${breakpoints.md}) {
    font-size: 16px;
  }

  @media (min-width: ${breakpoints.lg}) {
    font-size: 18px;
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
