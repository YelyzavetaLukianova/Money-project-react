import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'react-use';
import PropTypes from 'prop-types';

import styles from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');
//заменить closeForm на onClose
const Modal = ({ closeForm, children }) => {
  useLockBodyScroll(true);

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        closeForm();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeForm]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) return closeForm();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <button
            className={styles.closeBtn}
            onClick={closeForm}
            aria-label="Close"
          >
            &times;
          </button>
        </header>
        {/* <h2 className={styles.title}>{title}</h2> */}
        <div className={styles.content}>
          <div className={styles.lead}>
            {/* <h3 className="heading">{title}</h3> */}
          </div>

          {children}
        </div>
      </div>
    </div>,
    modalRootRef,
  );
};

Modal.propTypes = {
  closeForm: PropTypes.func.isRequired,
  // title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
