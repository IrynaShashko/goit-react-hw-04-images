import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImages } from 'service/api';
import { ImageGalleryWrapper } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import { BtnTop } from '../Button/Button.styled';
import { BiUpvote } from 'react-icons/bi';
import Loader from '../Loader/Loader';

class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    page: 1,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { search } = this.props;
    const { page } = this.state;
    const pageInSearch = prevProps.search !== search ? 1 : page;

    if (prevProps.search !== search || prevState.page !== page) {
      if (search === '') {
        Notify.failure('Please enter a search term');
        return;
      }
      try {
        this.setState({ isLoading: true });

        const response = await getImages(search, pageInSearch);
        if (response.length === 0) {
          Notify.failure('No images found');
          this.setState({ isLoading: false });
          return;
        }
        if (prevProps.search !== search) {
          this.setState({ images: response, page: 1 });
        }

        if (prevState.page !== page && page !== 1) {
          this.setState(state => ({
            images: [...state.images, ...response],
          }));
        }

        this.setState({ isLoading: false });
      } catch (error) {
        Notify.failure('Something went wrong');
      }
    }
  };
  onLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };
  onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <ImageGalleryWrapper>
          {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />
          ))}
        </ImageGalleryWrapper>
        {images.length !== 0 && !isLoading && (
          <>
            <Button loadMore={this.onLoadMore}>Load more</Button>
            {images.length > 12 && (
              <BtnTop type="button" onClick={this.onTop}>
                <BiUpvote color="#fff" size="30px" />
              </BtnTop>
            )}
          </>
        )}
        {isLoading && <Loader />}
      </>
    );
  }
}

export default ImageGallery;
