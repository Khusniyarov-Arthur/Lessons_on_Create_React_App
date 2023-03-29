import HashLoader from 'react-spinners/HashLoader';

export const ModalLoader = () => {
  return (
    <HashLoader
      color="#cc6633"
      size={150}
      cssOverride={{
        margin: '100px auto'
      }}
    />
  );
};
