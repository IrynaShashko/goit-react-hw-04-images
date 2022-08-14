import { useState } from 'react';
import {
  StyledListItem,
  StyledImage,
} from '../ImageGalleryItem/ImageGalleryItem.styled';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image: { tags, webformatURL, largeImageURL } }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <StyledListItem>
      <StyledImage
        onClick={() => setIsModalOpen(prev => !prev)}
        src={webformatURL}
        alt={tags}
      />
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(prev => !prev)}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </StyledListItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
