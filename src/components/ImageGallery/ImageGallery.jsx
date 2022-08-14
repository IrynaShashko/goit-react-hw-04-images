import { ImageGalleryWrapper } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <>
      <ImageGalleryWrapper>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ImageGalleryWrapper>
    </>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ImageGallery;
