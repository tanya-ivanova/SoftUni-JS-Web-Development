import { createContext, useEffect, useState } from "react";
import * as userService from '../services/userService';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    // const [search, setSearch] = useState('');
    // const [criteria, setCriteria] = useState('all');
    const [filters, setFilters] = useState({
        text: '',
        criteria: 'all'
    });

    useEffect(() => {
        userService.getAll()
            .then(users => {
                setUsers(users);
                setFilteredUsers(users);
            });
    }, []);

    const addUser = (user) => {
        setUsers(oldUsers => [...oldUsers, user]);
    };

    const filterUsers = (text, criteria = 'all') => {
        // setFilters({
        //     text,
        //     criteria
        // });
        if(criteria === 'all') {
            setFilteredUsers(users);            
        } else {
            setFilteredUsers(users.filter(x => x[criteria].includes(text)));
        }

    };

    return (
        <UserContext.Provider value={{users: filteredUsers, addUser, filterUsers}}>
            {children}
        </UserContext.Provider>
    );
};