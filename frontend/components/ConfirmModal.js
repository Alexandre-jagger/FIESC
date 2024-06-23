import React from 'react';

const ConfirmModal = ({ show, onClose, onConfirm, employee }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h4>Excluir colaborador</h4>
        <p>Tem certeza que quer excluir o colaborador {employee.name}, matrícula {employee.id}?</p>
        <button onClick={onConfirm}>Sim</button>
        <button onClick={onClose}>Não</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
