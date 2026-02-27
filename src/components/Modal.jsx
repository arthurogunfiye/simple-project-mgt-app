import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = ({ children, ref, buttonCaption }) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  return createPortal(
    <dialog ref={dialog} className={dialogStyles}>
      {children}
      <form method='dialog' className={formStyles}>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.querySelector('#modal-root')
  );
};

export default Modal;

const dialogStyles = 'backdrop:bg-stone-900/90 p-4 rounded-md shadow-md';
const formStyles = 'mt-4 text-right';
