import { Component } from 'react';
import {
  StyledListItem,
  StyledImage,
} from '../ImageGalleryItem/ImageGalleryItem.styled';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  state = {
    isModalOpened: false,
  };

  toggleModal = () => {
    this.setState(({ isModalOpened }) => ({ isModalOpened: !isModalOpened }));
  };

  render() {
    const { tags, webformatURL, largeImageURL } = this.props.image;
    return (
      <StyledListItem>
        <StyledImage onClick={this.toggleModal} src={webformatURL} alt={tags} />
        {this.state.isModalOpened && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </StyledListItem>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
