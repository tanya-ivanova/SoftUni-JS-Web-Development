import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
    const infoRef = useRef();

    const [values, setValues] = useState({
        username: '',
        password: '',
        age: '',
        bio: '',
        gender: 'f',
        userType: 'corporate',
        tac: false,
        egn: '',
        eik: ''
    });

    useEffect(() => {
        if(values.username && values.age) {
            infoRef.current.value = `${values.username} - ${values.age}`;
        }
    }, [values.username, values.age]);

    //const [username, setUsername] = useState('GoshoDefault');
    // const[password, setPassword] = useState('');
    // const[age, setAge] = useState('');
    //const[bio, setBio] = useState('');
    //const[gender, setGender] = useState('f');
    //const[userType, setUserType] = useState('corporate');
    //const [tac, setTac] = useState(false);


    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        }));
    };  

    const submitHandler = (e) => {
        e.preventDefault();
        // let values = Object.fromEntries(new FormData(e.target));
        console.log(values);
        
    };

    // const usernameChangeHandler = (e) => {
    //     setUsername(e.target.value);
    // };

    return (

        <div className="App">
            <header className="App-header">
                <form onSubmit={submitHandler}>
                    <div>
                        <label htmlFor="username">Username: </label>
                        {/* <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={usernameChangeHandler}
                            value={username}
                        /> */}
                        <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={changeHandler}
                            value={values.username}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password: </label>
                        {/* <input id="password" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} /> */}
                        <input id="password" type="password" name="password" value={values.password} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="age">Age: </label>
                        {/* <input id="age" type="number" name="age" value={age} onChange={(e) => setAge(Number(e.target.value))} /> */}
                        <input id="age" type="number" name="age" value={values.age} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="bio">Biography: </label>
                        {/* <textarea name="bio" id="bio" cols="30" rows="10" value={bio} onChange={(e) => setBio(e.target.value)} /> */}
                        <textarea name="bio" id="bio" cols="30" rows="10" value={values.bio} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender: </label>
                        {/* <select name="gender" id="gender" value={gender} onChange={(e) => setGender(e.target.value)}> */}
                        <select name="gender" id="gender" value={values.gender} onChange={changeHandler}>
                            <option value="m">Male</option>
                            <option value="f">Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="individual-user-type">Individual: </label>
                        {/* <input type="radio" name="userType" id="individual-user-type" value="individual" checked={userType === 'individual'} onChange={(e) => setUserType(e.target.value)} /> */}
                        <input type="radio" name="userType" id="individual-user-type" value="individual" checked={values.userType === 'individual'} onChange={changeHandler} />

                        <label htmlFor="corporate-user-type">Corporate: </label>
                        {/* <input type="radio" name="userType" id="corporate-user-type" value="corporate" checked={userType === 'corporate'} onChange={(e) => setUserType(e.target.value)} /> */}
                        <input type="radio" name="userType" id="corporate-user-type" value="corporate" checked={values.userType === 'corporate'} onChange={changeHandler} />
                    </div>
                    <div>
                        <label htmlFor="identifier">{values.userType == 'individual' ? 'EGN' : 'EIK'}</label>
                        {values.userType == 'individual'
                            ? <input type="text" name="egn" id="identifier" value={values.egn} onChange={changeHandler} />
                            : <input type="text" name="eik" id="identifier" value={values.eik} onChange={changeHandler} />
                        }
                    </div>
                    <div>
                        <label htmlFor="tac">Terms and Conditions: </label>
                        {/* <input type="checkbox" name="tac" id="tac" checked={tac} onChange={(e) => setTac(e.target.value == "on")} /> */}
                        <input type="checkbox" name="tac" id="tac" checked={values.tac} onChange={changeHandler} />
                    </div>
                    <div>
                        <input type="submit" value="Register" disabled={!values.tac} />
                        {/* <button type="submit">Register</button> */}
                    </div>
                    <div>
                        <label htmlFor="uncontrolled-input">Uncontrolled Input </label>
                        <input type="text" name="uncontrolled" id="uncontrolled-input" ref={infoRef} />
                    </div>
                </form>
                {/* <button type="button">Send</button> */}
            </header>
        </div >
    );
}

export default App;
