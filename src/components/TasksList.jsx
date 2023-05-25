import React, { useState, useContext } from 'react'
import TaskCard from './TaskCard';
import { TaskContext } from '../context/TaskContext'


function TasksList() {
  const { tasks } = useContext(TaskContext);


  if (tasks.length === 0) {
    return <div className='w-full text-center'>
      <p className='text-white'>No hay tareas pendientes</p>
    </div>
  }

  return (
    <div className='grid grid-cols-4 gap-2'>

      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TasksList