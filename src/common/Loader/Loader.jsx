import PulseLoader from 'react-spinners/PulseLoader';
import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loader}>
      <PulseLoader margin={4} size={23} color={'#ff751d'} />
    </div>
  );
};

export default Loader;

// import Loader from 'react-loader-spinner';

// const LoaderB = () => {
//   return (
//     <Loader
//       type="Puff"
//       color="#00BFFF"
//       height={100}
//       width={100}
//       timeout={3000}
//       class="lod" //3 secs
//     />
//   );
// };
// export default LoaderB;
