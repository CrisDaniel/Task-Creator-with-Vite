import TaskCard from './TaskCard';

/* eslint-disable react/prop-types */
export function TaskList (props){
    
    const {task, deleteTask} = props;

    return (
      <>
        {task.map((tarea) => (
          <TaskCard key={tarea.id} tarea= {tarea} deleteTask={deleteTask}/>
        ))}
      </>
    );
}