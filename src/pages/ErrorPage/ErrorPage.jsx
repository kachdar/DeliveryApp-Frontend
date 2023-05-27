import errorImg from '../../images/404.jpg';

const ErrorPage = () => {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <img src={errorImg} alt="" style={{ width: '75%' }} />
    </div>
  );
};

export default ErrorPage;
