import { useState, useContext } from 'react';

import useInput from '../../hooks/useInput';
import {Flex, FlexStyled, Button, Input, H3, Spacer} from '../UI';


const LoginForm = () => {

    const [email, onEmailChange] = useInput();
    const [password, onPasswordChange] = useInput();
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        console.log('login', email, password);
        event.preventDefault();
        setError('');
    }

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
                <H3>Login to Blovize</H3>
                <form onSubmit={handleLogin}>
                    <Flex direction='column' align='flex-start'>
                        <label htmlFor='login'>Email</label>
                        <Input width='300px' height='30px' id='login' name='login' type='email' placeholder='Introduce your email' value={email} onChange={onEmailChange}/>
                    </Flex>

                    <Spacer height='10px'/>

                    <Flex direction='column' align='flex-start'>
                        <label htmlFor='password'>Password</label>
                        <Input width='300px' height='30px' id='password' name='password' type='password' placeholder='Introduce your password' value={password} onChange={onPasswordChange}/>
                    </Flex>

                    <Spacer height='10px'/>

                    <Flex direction='column' align='flex-start'>
                        {error && <p>&nbsp;{error}</p>}
                        <Button width='300px' height='30px'>Log In</Button>
                    </Flex>
                </form>
            </FlexStyled>
        </Flex>
        
    )
}

export default LoginForm;