import React from 'react';
import Modal from 'react-modal';

const AskModal = (props) => (
    <Modal
        isOpen={!!props.expenseModal}
        onRequestClose={props.handleClearExpenseModal}
        contentLabel="remove expense"
        closeTimeoutMS={200}
        className="ask-modal"
    >
        <p>Are you sure you want to remove <span>{props.description}</span></p>
        <div className="ask-modal__buttons">
            <button className="button button--secondary" onClick={props.handleClearExpenseModal}>No</button>
            <button className="button" onClick={props.onRemove}>Yes</button>
        </div>
    </Modal>
);

export default AskModal;