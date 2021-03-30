import React, {useState} from 'react'
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../GraphQL/MutationLogin';

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login, {error, data}] = useMutation(LOGIN_MUTATION);

    const loginUser = () => {
        login({
            variables: {
                email: email,
                password: password
            }
        })
        if(error) {
            console.log(error);
        } else {
            console.log(data);
        }
    }

    return (
        <div>
            <input type="text" placeholder="Enter email" onChange={(e) => {setEmail(e.target.value)}}/>
            <input type="text" placeholder="Enter your password" onChange={(e) => {setPassword(e.target.value)}} />
            <button onClick={loginUser}>Login</button>
        </div>
    )
}

export default LoginForm
