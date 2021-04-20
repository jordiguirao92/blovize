import styled from 'styled-components';
import { useState, useContext } from 'react';
import {Flex, Spacer} from '../UI';

import useInput from '../../hooks/useInput';

const SignUpContainer = styled.div`
    display: flex;  
    justify-content: center;
    margin: 20px 0px;
`
const SignUpStyle = styled.div`
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
    
    .signup_form__field {
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

const SignUpForm = () => {

    const [email, onEmailChange] = useInput();
    const [password, onPasswordChange] = useInput();
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        console.log('login');
        event.preventDefault();
        setError('');
    }

    return(
        <Flex justify='center'>
            <SignUpStyle>
                <h3>Hello Player</h3>
                <form onSubmit={handleLogin}>
                    <Flex>
                        <div className="signup_form__field">
                            <label htmlFor='name'>Name & Last Name</label>
                            <input id='name' name='name' type='text' value={email} onChange={onEmailChange}/>
                        </div>
                        <div className="signup_form__field">
                            <label htmlFor='nickName'>Nickname</label>
                            <input id='nickName' name='nickName' type='text' value={email} onChange={onEmailChange}/>
                        </div>
                    </Flex>
                        
                    <Flex>
                        <div className="signup_form__field">
                            <label htmlFor='email'>Email</label>
                            <input id='email' name='email' type='email' value={email} onChange={onEmailChange}/>
                        </div>
                        <div className="signup_form__field">
                            <label htmlFor='password'>Password</label>
                            <input id='password' name='password' type='password' value={password} onChange={onPasswordChange}/>
                        </div>
                    </Flex>
  
                    <Flex>
                        <div className="signup_form__field">
                            <label htmlFor='description'>Description</label>
                            <input id='description' name='description' type='text' value={email} onChange={onEmailChange}/>
                        </div>
                    </Flex>

                
                    
                    <div className="signup_form__field">
                        {error && <p>&nbsp;{error}</p>}
                        <button>Log In</button>
                    </div>
                </form>
            </SignUpStyle>
        </Flex>
        
    )
}

export default SignUpForm;