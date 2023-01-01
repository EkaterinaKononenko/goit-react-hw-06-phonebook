import React from 'react';
import PropTypes from 'prop-types';
import { FilterLable, FilterInput, FilterWrap } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <FilterWrap>
      <FilterLable htmlFor="filter">Find contacts by name</FilterLable>
      <FilterInput
        name="filter"
        type="text"
        id="filter"
        value={value}
        onChange={onFilter}
      />
    </FilterWrap>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
