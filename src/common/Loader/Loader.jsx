import Loader from 'react-loader-spinner';

const LoaderB = () => {
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
      class="lod" //3 secs
    />
  );
};
export default LoaderB;
