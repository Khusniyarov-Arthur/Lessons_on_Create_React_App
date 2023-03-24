import RingLoader from 'react-spinners/RingLoader';

export const AuthLoader = () => {
  return (
    <RingLoader
      color="#cc6633"
      size={30}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

