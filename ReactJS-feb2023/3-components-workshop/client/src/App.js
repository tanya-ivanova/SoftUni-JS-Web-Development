import {useEffect, useState} from 'react';

import * as userService from './services/userService';

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { UserList } from "./components/UserList";

import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: ''
    });
    const [formErrors, setFormErrors] = useState({
        firstName: '',
        lastName: ''
    });

    useEffect(() => {
        // async function getUsers() {
        //     const users = await userService.getAll();
        //     return users;        
        // }

        // getUsers();

        userService.getAll()
            .then(users => {
                setUsers(users);
            })
            .catch(err => {
                console.log(err);
            });

    }, []);

    const onUserCreateSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const createdUser = await userService.create(data);
        setUsers(state => [...state, createdUser]);    
    };

    const onUserUpdateSubmit = async (e, userId) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        const updatedUser = await userService.update(userId, data);
        setUsers(state => state.map(x => x._id === userId ? updatedUser : x));
    };

    const onUserDelete = async (userId) => {
        await userService.remove(userId);

        setUsers(state => state.filter(x => x._id !== userId));
    };

    const formChangeHandler = (e) => {      
        setFormValues(state => ({...state, [e.target.name]: e.target.value}));
    };

    const validateForm = (e) => {
        const value = e.target.value;
        const errors = {}
        if(e.target.name === 'firstName' && (value.length < 3 || value.length > 20)) {
            errors.firstName = 'First name should be between 3 and 20 characters';            
        }
        if(e.target.name === 'lastName' && (value.length < 3 || value.length > 20)) {
            errors.lastName = 'Last name should be between 3 and 20 characters';
        }

        setFormErrors(errors);
    };

    return (
        <>
            <Header />

            <main className="main">
                <section className="card users-container">
                    <Search />

                    <UserList 
                        users={users} 
                        onUserCreateSubmit={onUserCreateSubmit}
                        onUserUpdateSubmit={onUserUpdateSubmit}
                        onUserDelete={onUserDelete}
                        formValues={formValues} 
                        formChangeHandler={formChangeHandler}
                        formErrors={formErrors}
                        validateForm={validateForm}
                    />
                    
                </section>
            </main>
            <Footer />

        </>
    );
}

export default App;
