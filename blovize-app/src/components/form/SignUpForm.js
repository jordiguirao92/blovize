import {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';

import {Flex, FlexStyled, Button, Input, H3, Spacer, LinkStyled, A} from '../UI';
import {userSignup} from '../../controllers/user';

const SignUpForm = (role) => {

    const history = useHistory();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({name:'', 
        nickName:'', 
        email:'', 
        password:'', 
        description:'', 
        creator: ''
    });

    useEffect(() => {
        if(role.role === 'player') {
            setFormData({ ...formData, creator: false});
            console.log(formData.creator);
        } else if(role.role === 'institution') {
            setFormData({ ...formData, creator: 'ins' });
            console.log(formData.creator);
        }
      }, []);
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const result = await userSignup(formData);
        console.log('IMTCHLG ~ file: signup.js ~ line 14 ~ handleFormSubmit ~ result', result);
        if (result) {
          history.push('/main');
        }
      }

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' width='500px' height='500px'>
                <H3> Sign up to Blovize</H3>
                <form onSubmit={handleFormSubmit}>
                    <Flex direction='column' align='flex-start'>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='name'>Name & Last Name</label>
                            <Input width='300px' height='30px' 
                                id='name' 
                                name='name' 
                                type='text' 
                                placeholder='Introduce your name' 
                                value={formData.name} 
                                onChange={(value) => setFormData({ ...formData, name: value })}
                                />
                        </Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='nickName'>Nickname</label>
                            <Input width='300px' height='30px' 
                                id='nickName' 
                                name='nickName' 
                                type='text' 
                                placeholder='Introduce your nickname' 
                                value={formData.nickName} 
                                onChange={(value) => setFormData({ ...formData, nickName: value })}
                                />
                        </Flex>
                    </Flex>
                    <Spacer />    
                    <Flex direction='column' align='flex-start'>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='email'>Email</label>
                            <Input width='300px' height='30px' 
                                id='email' 
                                name='email' 
                                type='email' 
                                placeholder='Introduce your email' 
                                value={formData.email} 
                                onChange={(value) => setFormData({ ...formData, email: value })}
                                />
                        </Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='password'>Password</label>
                            <Input width='300px' height='30px' 
                                id='password' 
                                name='password' 
                                type='password' 
                                placeholder='Introduce a password' 
                                value={formData.password} 
                                onChange={(value) => setFormData({ ...formData, password: value })}
                                />
                        </Flex>
                    </Flex>
                    <Spacer />
                    <Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='description'>Description</label>
                            <Input width='300px' height='30px' 
                                id='description' 
                                name='description' 
                                type='text' 
                                placeholder='Write few words about you' 
                                value={formData.description} 
                                onChange={(value) => setFormData({ ...formData, description: value })}
                                />
                        </Flex>
                    </Flex>
                    <Spacer />
                    <Flex direction='column' align='flex-start'>
                        {error && <p>&nbsp;{error}</p>}
                        <Button width='300px' height='30px'>Log In</Button>
                    </Flex>
                    <Spacer />
                    <Flex align='flex-start'>
                        <A>Do you have account?</A><LinkStyled to='/login'>Log in</LinkStyled>    
                    </Flex>
                </form>
            </FlexStyled>
        </Flex>
        
    )
}

export default SignUpForm;