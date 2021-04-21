import { useState, useContext } from 'react';
import {Flex, FlexStyled, Button, Input, H3, Spacer} from '../UI';

import useInput from '../../hooks/useInput';


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
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='500px'>
                <H3> Sign up to Blovize</H3>
                <form onSubmit={handleLogin}>
                    <Flex direction='column' align='flex-start'>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='name'>Name & Last Name</label>
                            <Input width='300px' height='30px' id='name' name='name' type='text' placeholder='Introduce your name' value='' onChange={onEmailChange}/>
                        </Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='nickName'>Nickname</label>
                            <Input width='300px' height='30px' id='nickName' name='nickName' type='text' value={email} onChange={onEmailChange}/>
                        </Flex>
                    </Flex>
                    <Spacer />    
                    <Flex direction='column' align='flex-start'>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='email'>Email</label>
                            <Input width='300px' height='30px' id='email' name='email' type='email' value={email} onChange={onEmailChange}/>
                        </Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='password'>Password</label>
                            <Input width='300px' height='30px' id='password' name='password' type='password' value={password} onChange={onPasswordChange}/>
                        </Flex>
                    </Flex>
                    <Spacer />
                    <Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='description'>Description</label>
                            <Input width='300px' height='30px' id='description' name='description' type='text' value={email} onChange={onEmailChange}/>
                        </Flex>
                    </Flex>
                    <Spacer />
                    <Flex direction='column' align='flex-start'>
                        {error && <p>&nbsp;{error}</p>}
                        <Button width='300px' height='30px'>Log In</Button>
                    </Flex>
                </form>
            </FlexStyled>
        </Flex>
        
    )
}

export default SignUpForm;