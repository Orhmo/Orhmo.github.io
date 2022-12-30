import React from 'react';
import './Modal.css'

const Modal = ({open, onClose}) => {
  if (!open) return null
  return (
    <div className="overlay">
      <div className="modalContainer rounded-lg px-4 pt-5 pb-4 sm:p-4 sm:pb-4">
        <div className="content">
        <p
          onClick={onClose}
          className="closeBtn ">X</p>
        <div className="modal_container m-2 mb-4">
          <span className="text-xl font-bold mt-2"> Message sent </span>
          <div className="message-border"></div>
          <div>
            <p>Thank you for reaching out, your message has been sent and you would get a reply from us soon.</p>
          </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Modal;
