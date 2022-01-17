import { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { useLockBodyScroll } from 'react-use';
import PropTypes from 'prop-types';

import styles from './ModalWarningWindow.module.css';

const modalRootRef = document.querySelector('#modal-root');

const ModalWarningWindow = ({ onClose, children }) => {
  // useLockBodyScroll(true);

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) return onClose();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRootRef,
  );
};

ModalWarningWindow.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalWarningWindow;
