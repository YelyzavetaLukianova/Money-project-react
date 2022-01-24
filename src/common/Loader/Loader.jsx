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
