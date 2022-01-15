import styles from './Modal.module.css';

const Modal = ({ title, closeForm, children }) => {
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) return closeForm();
  };

  return (
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
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.content}>
          <div className={styles.lead}>
            {/* <h3 className="heading">{title}</h3> */}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
