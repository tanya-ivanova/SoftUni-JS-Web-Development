import { TaskContext } from './contexts/TaskContext';

import useFetch from './hooks/useFetch';
import useTodosApi from './hooks/useTodosApi';

import TaskList from './components/TaskList';
import CreateTask from './components/CreateTask';

import styles from './App.module.css';

function App() {
    // const [tasks, setTasks] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3030/jsonstore/todos')
    //         .then(res => res.json())
    //         .then(result => {
    //             setTasks(Object.values(result));
    //         })
    // }, []);

    const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todos', []);
    const { removeTodo, createTodo, updateTodo } = useTodosApi();

    const taskCreateHandler = async (newTask) => {
        const createdTask = await createTodo(newTask);

        setTasks(state => [
            ...state,
            createdTask
        ]);
    };

    const taskDeleteHandler = (taskId) => {
        removeTodo(taskId)
            .then(() => setTasks(state => state.filter(x => x._id != taskId)));
    };

    const toggleTask = async (task) => {
        const updatedTask = {...task, isCompleted: !task.isCompleted};

        await updateTodo(task._id, updatedTask);
        setTasks(state => state.map(x => x._id == task._id ? updatedTask : x));
    };

    const taskEditHandler = async (task, newTitle) => {
        const updatedTask = {...task, title: newTitle};

        await updateTodo(task._id, updatedTask);
        setTasks(state => state.map(x => x._id == task._id ? updatedTask : x));
    };

    return (
        <TaskContext.Provider value={{taskDeleteHandler, toggleTask, taskEditHandler}}>
            <div className={styles['site-wrapper']}>
                <header>
                    <h1>TODO App</h1>
                </header>

                <main>
                    {isLoading
                        ? <p>Loading...</p>
                        : <TaskList tasks={tasks} />
                    }

                    <CreateTask taskCreateHandler={taskCreateHandler} />
                </main>
            </div>
        </TaskContext.Provider>
    );
}

export default App;
