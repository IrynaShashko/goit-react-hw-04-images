import { useState } from 'react';
import {
  SearchbarWrapper,
  SearchForm,
  FormBtn,
  Span,
  Input,
} from '../Searchbar/Searchbar.styled';
import { BiSearch } from 'react-icons/bi';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleInput = event => {
    setSearch(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(search);
    setSearch('');
  };
  return (
    <SearchbarWrapper>
      <SearchForm onSubmit={handleSubmit}>
        <FormBtn type="submit">
          <Span>
            <BiSearch size="20px" color="black" />
          </Span>
        </FormBtn>

        <Input
          type="text"
          autocomplete="off"
          autoFocus
          value={search}
          placeholder="Search images and photos"
          onChange={handleInput}
        />
      </SearchForm>
    </SearchbarWrapper>
  );
};

export default Searchbar;
