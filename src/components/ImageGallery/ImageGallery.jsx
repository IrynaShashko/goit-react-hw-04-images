import { ImageGalleryWrapper } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

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

export default ImageGallery;
