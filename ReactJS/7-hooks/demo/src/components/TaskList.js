import TaskItem from "./TaskItem";

const TaskList = ({
    tasks
}) => {
    return (
        <ul>
            {tasks.map(x => 
                <TaskItem 
                    key={x._id}
                    task={x}                     
                />
            )}
        </ul>
    );
};

export default TaskList;