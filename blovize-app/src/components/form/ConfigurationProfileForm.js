import {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, Button, Input, H3, Spacer, LinkStyled, A, TextArea, ImageStyled, InputImage} from '../UI';
import {userSignup, updateUserProfile} from '../../controllers/user';

const ConfigurationProfileForm = ({role}) => {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const [error, setError] = useState('');
    const [file, setFile] = useState('');
    const [formData, setFormData] = useState({
        name:'', 
        nickName:'', 
        profileImage:'', 
        description:'', 
    });
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        //const result = await updateUserProfile(user.id, formData);
        //console.log('IMTCHLG ~ file: signup.js ~ line 14 ~ handleFormSubmit ~ result', result);
        /*if (result) {
          history.push('/main');
        }*/
      }

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center'>
                <H3 margin='30px auto'>Update your data</H3>
                <form onSubmit={handleFormSubmit}>
                    <Flex justify='flex-start' align='flex-start'  margin='0px 10px' >
                        <Flex direction='column' align='flex-start'>
                            <Flex direction='column' align='flex-start'>
                                <label htmlFor='name'>Update your name</label>
                                <Input width='300px' height='30px' 
                                    id='name' 
                                    name='name' 
                                    type='text' 
                                    placeholder={user.name} 
                                    value={formData.name} 
                                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                                    />
                            </Flex>
                            <Spacer /> 
                            <Flex direction='column' align='flex-start'>
                                <label htmlFor='nickName'>Update your Nickname</label>
                                <Input width='300px' height='30px' 
                                    id='nickName' 
                                    name='nickName' 
                                    type='text' 
                                    placeholder={user.nickName} 
                                    value={formData.nickName} 
                                    onChange={(event) => setFormData({ ...formData, nickName: event.target.value })}
                                    />
                            </Flex>
                        </Flex>
                        <Flex direction='column' align='flex-start' margin='0px 10px'>
                            <Flex direction='column' align='flex-start'>
                                <label htmlFor='trophyImage'>Update your profile image</label>
                                <InputImage width='300px' height='30px' 
                                    id='profileImage' 
                                    name='profileImage' 
                                    type='file'
                                    value={formData.profileImage}
                                    onChange={(event) => {
                                        setFormData({ ...formData, profileImage: event.target.value });
                                        setFile(URL.createObjectURL(event.target.files[0]));
                                        }}
                                    />
                            </Flex>
                            <Flex direction='column' align='center' margin='5px 0px'>
                                <ImageStyled src={file}/>
                            </Flex>
                        </Flex>
                    </Flex>   
                    <Flex>
                        <Flex direction='column' align='flex-start' margin='0px 10px'>
                            <label htmlFor='description'>Update your description</label>
                            <TextArea width='100%' height='100px' 
                                id='description' 
                                name='description' 
                                type='text' 
                                rows="4" 
                                cols="50"
                                placeholder={user.description} 
                                value={formData.description} 
                                onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                                />
                        </Flex>
                    </Flex>
                    <Spacer />
                    <Flex direction='column' align='center' margin='0px 10px'>
                        {error && <p>&nbsp;{error}</p>}
                        <Button width='300px' height='30px'>Update data</Button>
                    </Flex>
                    <Spacer />
                </form>
            </FlexStyled>
        </Flex>
        
    )
}

export default ConfigurationProfileForm;