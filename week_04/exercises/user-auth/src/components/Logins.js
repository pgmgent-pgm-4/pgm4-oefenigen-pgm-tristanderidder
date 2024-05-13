import React, { useContext, useEffect, useState } from 'react';
import useLogin from '../hooks/useLogin';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';

export default function Logins({newUser, setNewUser}) {
    const { user, login } = useContext(UserContext);
    const [isFormError, setIsFormError] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormError(login({username: newUser.username, password: newUser.password}));
    }

    useEffect(() => {
        if(user) {
            navigate('/welcome');
        }
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <>
                    <label htmlFor='username'>Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={newUser.username}
                        onChange={(e) => {setNewUser((prev) => {return {...prev, username: e.target.value}})}}
                    />
                </>
                <>
                    <label htmlFor='password'>Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        value={newUser.password}
                        onChange={(e) => { setNewUser((prev) => { return { ...prev, password: e.target.value } }) }}
                    />
                </>
                {isFormError && (
                    <div>
                        <p style={{color: "red"}}>Invalid username or password</p>
                    </div>
                
                )}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
