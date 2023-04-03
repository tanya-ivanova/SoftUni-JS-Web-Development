import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

export const TodoItem = ({
    _id,
    text,
    isCompleted,    
}) => {
    const {onTodoDeleteClick, onTodoClick} = useContext(TodoContext);

    return (
        <ListGroup.Item action srtyle={{display: 'flex', justifyContent: 'space-between'}} onClick={() => onTodoClick(_id)} >
            <p style={{textDecoration: isCompleted ? 'line-through' : 'none'}} >{text}</p>
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>x</Button>
        </ListGroup.Item>
    );
};
