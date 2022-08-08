import { ButtonStyle } from '../Button/Button.styled';
import PropTypes from 'prop-types';

const Button = ({ loadMore, children }) => {
  return (
    <ButtonStyle onClick={loadMore} type="button">
      {children}
    </ButtonStyle>
  );
};

export default Button;

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
