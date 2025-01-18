import React from 'react';
import tick from '../assets/tick.png';
import no_tick from '../assets/no_tick.png';
import Delete_icon from '../assets/delete.png';

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      {/* Contenedor del texto y el ícono de estado */}
      <div
        onClick={() => {
          toggle(id); // Cambiado 'ToggleEvent' por 'toggle'
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        {/* Ícono de estado (tick o no_tick) */}
        <img
          src={isComplete ? tick : no_tick}
          alt={isComplete ? "Mark as incomplete" : "Mark as complete"}
          className="w-7"
        />
        {/* Texto */}
        <p
          className={`text-slate-700 text-[17px] ${
            isComplete ? 'line-through decoration-slate-500' : ''
          }`}
        >
          {text}
        </p>
      </div>

      {/* Ícono de eliminación */}
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={Delete_icon}
        alt="Delete task"
        className="w-3.5 cursor-pointer"
      />
    </div>
  );
};

export default TodoItems;
