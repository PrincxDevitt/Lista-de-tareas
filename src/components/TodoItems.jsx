
import React from 'react'
import tick from '../assets/tick.png'
import no_tick from '../assets/no_tick.png'
import Delete_icon from '../assets/delete.png'

const TodoItems = ({text,id,isComple, deleteTodo}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div className='flex flex-1 items-center cursor-pointer'>
            <img src={tick} alt="" className='w-7' />
            <p className='text-slate-700-m1-4 
            text-[17px]'>{text} </p>
        </div>
        <img  onClick={()=>{deleteTodo(id)}} src={Delete_icon} alt="" className='w-3.5
        cursor-pointer' />

    </div>
  )
}

export default TodoItems