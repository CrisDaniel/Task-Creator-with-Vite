/* eslint-disable react/prop-types */
import { MdDeleteOutline } from "react-icons/md";
import './TaskCard.css'
const TaskCard = (props) => {

    const {tarea, deleteTask} = props;

    const deleteTaskId = () => {
      deleteTask(tarea.id);
    }

    return (<div className="card">
      <div className='TaskCard' key={tarea.id}>
        <h3>{tarea.Title}</h3>
        <p>{tarea.Description}</p>
      </div>
      <MdDeleteOutline onClick={deleteTaskId}/>
    </div>
    );
}

export default TaskCard;