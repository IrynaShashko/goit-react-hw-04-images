import { Component } from 'react';
import {
  SearchbarWrapper,
  SearchForm,
  FormBtn,
  Span,
  Input,
} from '../Searchbar/Searchbar.styled';
import { BiSearch } from 'react-icons/bi';

class Searchbar extends Component {
  state = {
    search: '',
  };

  handleInput = event => {
    this.setState({ search: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({ search: '' });
  };
  render() {
    return (
      <SearchbarWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <FormBtn type="submit">
            <Span>
              <BiSearch size="20px" color="black" />
            </Span>
          </FormBtn>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            value={this.state.search}
            placeholder="Search images and photos"
            onChange={this.handleInput}
          />
        </SearchForm>
      </SearchbarWrapper>
    );
  }
}

export default Searchbar;
