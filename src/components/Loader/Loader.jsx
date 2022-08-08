import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ThreeCircles
      wrapperStyle={{ justifyContent: 'center' }}
      height="150"
      color="#B46AEC"
    />
  );
};

export default Loader;
