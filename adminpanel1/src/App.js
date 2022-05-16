import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import UserDetails from './allData/UserDetails';
import UserEduction from './allData/UserEduction';

function App() {
    const [login, setLogin] = useState(true)
    const [changeNavbar, setChangeNavbar] = useState(false)
    const [changeUserdata, setChangeUserdata] = useState(true)

    useEffect(() => {
        if (localStorage.getItem("loginData")) {
            setChangeNavbar(true)
        }
    }, [])

    const handleLogin = (value) => {
        setLogin(value)
    }

    const handleRegister = (value) => {
        setLogin(value)
    }

    const hadleUserinfo = (value) => {
        setChangeUserdata(value)
    }

    const hadleUserEduction = (value) => {
        setChangeUserdata(value)
    }

    return (
        <>
            <NavBar handlelogin={handleLogin} handleregister={handleRegister} hadleUserinfo={hadleUserinfo} hadleUserEduction={hadleUserEduction} setChangeNavbar={setChangeNavbar} changeNavbar={changeNavbar} />
            {changeNavbar ? changeUserdata ? <UserDetails /> : <UserEduction /> : login ? <Login setChangeNavbar={setChangeNavbar} /> : <Form />}
        </>
    );
}

export default App;
