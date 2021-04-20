import styled from 'styled-components';
import { useState, useContext } from 'react';

import useInput from '../../hooks/useInput';


const LoginContainer = styled.div`
    display: flex;  
    justify-content: center;
    margin: 20px 0px;
`
const LoginStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    border: 5px solid ${props => props.theme.colors.primary};
    border-radius: 10px;
    height: 250px;
    width: 400px;
    box-shadow: 5px 5px 5px grey;
    
    .login_form__field {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

    button {
        margin: 10px;
        border-radius: 7px;
        width: 150px;
        height: 50px;
        border: 3px solid ${props => props.theme.colors.primary};
        cursor: pointer;
        color: ${props => props.theme.colors.white};
        background-color: ${props => props.theme.colors.primary};
    }

    input {
        width: 300px;
        height: 30px;
        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: 5px;
    }
`

const LoginForm = () => {

    const [email, onEmailChange] = useInput();
    const [password, onPasswordChange] = useInput();
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        console.log('login');
        event.preventDefault();
        setError('');
    }

    return(
        <LoginContainer>
            <LoginStyle>
                <h3>Welcome to Blovize</h3>
                <form onSubmit={handleLogin}>
                    <div className="login_form__field">
                        <label htmlFor='login'>Email</label>
                        <input id='login' name='login' type='email' placeholder='Introduce your email' value={email} onChange={onEmailChange}/>
                    </div>
                    <div className="login_form__field">
                        <label htmlFor='password'>Password</label>
                        <input id='password' name='password' type='password' placeholder='Introduce your password' value={password} onChange={onPasswordChange}/>
                    </div>
                    <div className="login_form__field">
                        {error && <p>&nbsp;{error}</p>}
                        <button>Log In</button>
                    </div>
                </form>
            </LoginStyle>
        </LoginContainer>
        
    )
}

export default LoginForm;