import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = (props) => {
  const [ modalIsOpen, setModalIsOpen]= useState(false);
  const deleteHandler = () => {
      setModalIsOpen(true);
  };
  const closeHandler = () => {
      setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen &&
      <Modal onCancel={ closeHandler} onConfirm= { closeHandler }/> }
       {modalIsOpen &&
      <Backdrop onClick={closeHandler}/> }
    </div>
  );
};

export default Todo;
