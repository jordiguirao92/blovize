import {useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Flex, FlexStyled, Button, Input, H3, Spacer} from '../UI';
import { login } from '../../services/auth';


const LoginForm = () => {

    const history = useHistory();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const result = await login(formData.email, formData.password);
        if (result) {
            history.push('/main')
        }
    }

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='300px'>
                <H3>Login to Blovize</H3>
                <form onSubmit={handleFormSubmit}>
                    <Flex direction='column' align='flex-start'>
                        <label htmlFor='login'>Email</label>
                        <Input width='300px' height='30px' 
                            id='login' 
                            name='login' 
                            type='email' 
                            placeholder='Introduce your email' 
                            value={formData.email} 
                            onChange={(value) => setFormData({ ...formData, email: value })}
                        />
                    </Flex>

                    <Spacer height='10px'/>

                    <Flex direction='column' align='flex-start'>
                        <label htmlFor='password'>Password</label>
                        <Input width='300px' height='30px' 
                            id='password' 
                            name='password' 
                            type='password' 
                            placeholder='Introduce your password' 
                            value={formData.password} 
                            onChange={(value) => setFormData({ ...formData, password: value })}
                        />
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