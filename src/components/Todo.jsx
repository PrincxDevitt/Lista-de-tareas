import React, { useRef } from 'react'
import Todo_icon from '../assets/Todo_icon.png'
import TodoItems from './TodoItems'

const Todo = () => {

const inputRef = useRef();

const add=()=>{
    const inputText = inputRef.current.value;
    console.log(inputText);

}

 return (
    <div className="bg-white place-self-center w-11/12 max-wmd
    flex flex-col p-7 min-h-[500px] rounded-x1">

      {/*Title*/ }
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={Todo_icon} alt="" />
        <h1 className='text-3x1 font-semibold'>To-Do List</h1>
      </div>
      
      {/*input box*/ }
      <div className=' flex items-center my-7 bg-gray-200
      rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
         placeholder:text-slate-600' type="text" placeholder='Add Your List'/>
        <button onClick={add} className='border-none rounded-full
        bg-green-600 w-32 h-14 text-white text-lg font-medium
        cursor-pointer'> ADD +</button>
      </div>

       {/*todo list*/ }
       <div>
        <TodoItems text="Learn Coding"/>
        <TodoItems text="Learn Coding From Great"/>
       </div>
      
    </div>
  )
}

export default Todo