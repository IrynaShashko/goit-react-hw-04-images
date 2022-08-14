import { useState, useEffect, useRef } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getImages } from 'service/api';
import { AppContainer } from '../App/App.styled';
import Searchbar from '../Searchbar/Searchbar';
import Button from 'components/Button/Button';
import { BtnTop } from 'components/Button/Button.styled';
import { BiUpvote } from 'react-icons/bi';
import Loader from 'components/Loader/Loader';
import ImageGallery from '../ImageGallery/ImageGallery';

const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [top, setTop] = useState(true);

  const firstSearch = useRef(true);

  useEffect(() => {
    if (firstSearch.current) {
      firstSearch.current = false;
      return;
    }
    if (search === '') {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);
        const response = await getImages(search, page);
        if (response.length === 0) {
          Notify.failure('No images found');
          setIsLoading(false);
          return;
        }

        setImages(state => [...state, ...response]);

        setIsLoading(false);
      } catch (error) {
        Notify.failure('Something went wrong');
      }
    }
    fetchImages();
  }, [search, page]);

  const onSearchChange = e => {
    if (e === search || e.trim() === '') {
      Notify.failure('Please enter a search term');
    }
    setSearch(e);
    setImages([]);
    setPage(1);
    setTop(true);
  };

  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setTop(false);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={onSearchChange} />
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length !== 0 && !isLoading && (
        <Button loadMore={() => setPage(prev => prev + 1)}>Load more</Button>
      )}
      {top === true && images.length > 12 && (
        <BtnTop onClick={onTop}>
          <BiUpvote color="#fff" size="30px" />
        </BtnTop>
      )}
      ){isLoading && <Loader />}
    </AppContainer>
  );
};

export default App;
