import React from 'react';
import { FilterLable, FilterInput, FilterWrap } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { onFilter } from '../../redux/myValue/slice';

export const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <FilterWrap>
      <FilterLable htmlFor="filter">Find contacts by name</FilterLable>
      <FilterInput
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(onFilter(e.currentTarget.value))}
      />
    </FilterWrap>
  );
};

