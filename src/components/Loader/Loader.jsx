import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <Spinner
      animation="border"
      role="status"
      variant="secondary"
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    />
  );
};

export default Loader;
