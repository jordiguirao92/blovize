import {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from 'firebase';

import {Flex, FlexStyled, Button, Input, H3, Spacer, LinkStyled, A, TextArea, ImageStyled, InputImage} from '../UI';
import {userSignup, updateUserProfile} from '../../controllers/user';

const ConfigurationProfileForm = ({role}) => {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const [error, setError] = useState('');
    const [file, setFile] = useState('');
    const [uploadValue, setUploadValue] = useState(-1);
    const [formData, setFormData] = useState({
        name:'', 
        nickName:'', 
        profileImage: '', 
        description:'', 
    });
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const uploadedFormData = {...formData, name: formData.name ? formData.name : user.name, 
            nickName: formData.nickName ? formData.nickName : user.nickName,
            description: formData.description ? formData.description : user.description };
        const result = await updateUserProfile(user.id, uploadedFormData);
        if (result) {
          history.push('/main');
        }
      }

    const handleUpload = async (event) => {
        const file = event.target.files[0]; 
        const storageRef = firebase.storage().ref(`/images//profiles/${user.email}`);
        const task = storageRef.put(file);

        task.on('state_changed', snapshot => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
            setUploadValue(percentage);
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                  console.log('Upload is paused');
                  break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                  console.log('Upload is running');
                  break;
              }   
        }, error => {
            console.log(error.message);
        },
         async () => {
            setUploadValue(100);
            const fileURL = await task.snapshot.ref.getDownloadURL();
            setFile(fileURL);
            console.log(fileURL);
            setUploadValue(-1);
            setFormData({ ...formData, profileImage: fileURL});
         }
        )
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
                                    onChange={(event) => {
                                        handleUpload(event);
                                        }}
                                    />
                            </Flex>
                            <Flex direction='column' align='center' margin='5px 0px'>
                                {uploadValue >= 0 && <progress value={uploadValue} max='100'></progress>}
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