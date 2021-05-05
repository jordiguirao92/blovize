import {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';
import firebase from 'firebase';

import {Flex, FlexStyled, Button, Input, H3, Spacer, LinkStyled, A, Select, ImageStyled, InputImage, P} from '../UI';
import {SportBranchData} from './SportBranchData';
import {createTrophy} from '../../controllers/trophy';
import {getUserProfileByEmail} from '../../controllers/user';
import CreateTrophyPlayerCard from './CreateTrophyPlayerCard';

const CreateTrophyForm = () => {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const [error, setError] = useState('');
    const [file, setFile] = useState('');
    const [uploadValue, setUploadValue] = useState(-1);
    const [playerData, setPlayerData] = useState({playerName:'', playerBlovizeEmail: '', numberTrophies: ''});
    const [playersList, setPlayersList] = useState([]);
    const [formData, setFormData] = useState({
        name:'', 
        team:'', 
        date:'', 
        classification:'', 
        branch:'', 
        image: '',
        description:'',
        institution: user.name,
        creator: user.email
    });

    const addPlayer = async () => {
        if(playerData.playerName && playerData.numberTrophies) {
            if(playerData.playerBlovizeEmail) {
                setError('');
                const result = await getUserProfileByEmail(playerData.playerBlovizeEmail);
                if(result.length > 0 && result[0].email === playerData.playerBlovizeEmail) {
                    const playerObject = playerData;
                    setPlayersList([...playersList, playerObject]);
                } else {
                    setError('Please this email is not a Blovize email user');
                }
            } else if(!playerData.playerBlovizeEmail) {
                setError('');
                const playerObject = playerData;
                setPlayersList([...playersList, playerObject]);
            }

        } else {
            setError('Please fill Player Name and Number of trophies');
        }
    }

    const removePlayer = async (name) => {
        const newPlayerList = playersList.filter(player => player.playerName !== name);
        setPlayersList(newPlayerList);
    }
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const result = await createTrophy(formData, playersList);
        /*console.log('IMTCHLG ~ file: signup.js ~ line 14 ~ handleFormSubmit ~ result', result);
        if (result) {
          history.push('/created-trophies);
        }*/
      }

    const handleUpload = async (event) => {
        const file = event.target.files[0]; 
        if(!file) return
        const storageRef = firebase.storage().ref(`/images/trophies/${formData.name}`);
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
            setFormData({ ...formData, image: fileURL});
         }
        )
    }

    return(
        <Flex justify='center' margin='20px 0px'>
            <FlexStyled direction='column' justify='center' margin='0px 20px' >
                <H3 margin='50px auto'>Trophies Creator Form</H3>
                <form onSubmit={handleFormSubmit}>
                    <Flex justify='flex-start' align='flex-start' >
                        <Flex direction='column' align='flex-start' width='auto' margin='0px 10px'>
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='name'>Trophy title</label>
                                <Input width='300px' height='30px' 
                                    id='name' 
                                    name='name' 
                                    type='text' 
                                    placeholder='Introduce the name of the trophy' 
                                    value={formData.name} 
                                    onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='team'>Trophy team</label>
                                <Input width='300px' height='30px' 
                                    id='team' 
                                    name='team' 
                                    type='text' 
                                    placeholder='Introduce the name of the team' 
                                    value={formData.team} 
                                    onChange={(event) => setFormData({ ...formData, team: event.target.value })}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='date'>Trophy date</label>
                                <Input width='300px' height='30px' 
                                    id='date' 
                                    name='date' 
                                    type='datetime-local' 
                                    placeholder='Introduce the date of the trophy' 
                                    value={formData.date} 
                                    onChange={(event) => {setFormData({ ...formData, date: event.target.value });
                                    console.log(event.target.value);
                                    console.log(new Date(event.target.value))
                                    console.log(new Date(event.target.value).getTime())
                                    }}
                                    />
                            </Flex>
                        </Flex>
                        <Flex direction='column' align='flex-start' width='auto'>
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='classification'>Trophy classification</label>
                                <Input width='300px' height='30px' 
                                    id='classification' 
                                    name='classification' 
                                    type='text '
                                    placeholder='Introduce the classification' 
                                    value={formData.classification} 
                                    onChange={(event) => setFormData({ ...formData, classification: event.target.value })}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='branch'>Trophy branch</label>
                                <Select name='branch' width='300px' height='30px' onChange={(event) => setFormData({ ...formData, branch: event.target.value })}>
                                    {SportBranchData.map((sport) => {
                                        return(
                                            <option value={sport.value}>{sport.name}</option>
                                        ) 
                                    })}
                                </Select>
                            </Flex>
                        </Flex>
                        <Flex direction='column' align='flex-start' width='auto' margin='0px 10px'>
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='image'>Trophy Image</label>
                                <InputImage width='300px' height='30px' 
                                    id='image' 
                                    name='image' 
                                    type='file'
                                    onChange={(event) => {
                                        handleUpload(event);
                                        }}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='center' margin='5px 0px'>
                                {uploadValue >= 0 && <progress value={uploadValue} max='100'></progress>}
                                <ImageStyled src={file}/>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex direction='column' align='flex-start' margin='10px'>
                                <label htmlFor='description'>Trophy description</label>
                                <Input width='600px' height='30px' 
                                    id='description' 
                                    name='description' 
                                    type='text' 
                                    placeholder='Introduce a description of the trophy' 
                                    value={formData.description} 
                                    onChange={(event) => setFormData({ ...formData, description: event.target.value })}
                                    />
                    </Flex>
                    <Spacer />
                    <Flex  align='flex-end' margin='10px'>
                        <Flex direction='column' align='flex-start' >
                            <label htmlFor='playerName'>Player name</label>
                            <Input width='300px' height='30px' 
                                id='playerName' 
                                name='playerName' 
                                type='text' 
                                placeholder='Introduce the name of the player' 
                                value={playerData.playerName} 
                                onChange={(event) => setPlayerData({ ...playerData, playerName: event.target.value })}
                                />
                        </Flex>
                        <Flex direction='column' align='flex-start' margin='0px 10px'>
                            <label htmlFor='playerEmail'>Player Blovize email</label>
                            <Input width='300px' height='30px' 
                                id='playerEmail' 
                                name='playerEmail' 
                                type='text' 
                                placeholder='Introduce the player user Blovize email (if exist)' 
                                value={playerData.playerBlovizeEmail} 
                                onChange={(event) => setPlayerData({ ...playerData, playerBlovizeEmail: event.target.value })}
                                />
                        </Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='numerTrophies'>Number of trophies</label>
                            <Input width='260px' height='30px' 
                                id='numberTrophies' 
                                name='numberTrophies' 
                                type='text' 
                                placeholder='Introduce the number of trophies to create' 
                                value={playerData.numberTrophies} 
                                onChange={(event) => setPlayerData({ ...playerData, numberTrophies: Number(event.target.value) })}
                                />
                        </Flex>
                        <Flex align='flex-end' margin='0px 10px'>
                            <Button width='100px' height='30px' onClick={() => addPlayer() }>Add player</Button>  
                        </Flex>
                    </Flex>
                    {/*MAP PLAYERS */
                        playersList && playersList.map((player, index) => {
                            return(
                                <CreateTrophyPlayerCard 
                                    key={index}
                                    playerData={player}
                                    remove={removePlayer}
                                />
                            )
                        })
                    
                    }                             
                    <Spacer />
                    <Flex direction='column' align='center'>
                        {error && <P color='red'>&nbsp;{error}</P>}
                        <Button width='300px' height='30px'>Create trophies</Button>
                    </Flex>
                    <Spacer />
                </form>
            </FlexStyled>
        </Flex>
        
    )
}

export default CreateTrophyForm;
