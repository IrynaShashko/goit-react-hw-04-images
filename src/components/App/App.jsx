import { Component } from 'react';
import { AppContainer } from '../App/App.styled';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: '',
  };

  onSearchChange = e => {
    this.setState({ search: e });
  };

  render() {
    const { search } = this.state;
    return (
      <AppContainer>
        <Searchbar onSubmit={this.onSearchChange} />
        <ImageGallery search={search} />
      </AppContainer>
    );
  }
}

export default App;
