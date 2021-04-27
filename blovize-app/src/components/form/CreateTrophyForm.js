import {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, Button, Input, H3, Spacer, LinkStyled, A, Select, ImageStyled, InputImage} from '../UI';
import {SportBranchData} from './SportBranchData';
import {createTrophy} from '../../controllers/trophy';

const CreateTrophyForm = () => {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const [error, setError] = useState('');
    const [file, setFile] = useState('');
    const [addPlayers, setAddPlayers] = useState([]);
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
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        //const result = await createTrophy(formData);
        /*console.log('IMTCHLG ~ file: signup.js ~ line 14 ~ handleFormSubmit ~ result', result);
        if (result) {
          history.push('/main');
        }*/
      }

    return(
        <Flex justify='center'>
            <FlexStyled direction='column' justify='center' width='90%'>
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
                                    value={formData.image}
                                    onChange={(event) => {
                                        setFormData({ ...formData, image: event.target.value });
                                        setFile(URL.createObjectURL(event.target.files[0]));
                                        }}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='center' margin='5px 0px'>
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
                                value={formData.playerName} 
                                onChange={(event) => setFormData({ ...formData, playerName: event.target.value })}
                                />
                        </Flex>
                        <Flex direction='column' align='flex-start' margin='0px 10px'>
                            <label htmlFor='playerEmail'>Player Blovize email</label>
                            <Input width='300px' height='30px' 
                                id='playerEmail' 
                                name='playerEmail' 
                                type='text' 
                                placeholder='Introduce the player user Blovize email (if exist)' 
                                value={formData.namePlayer} 
                                onChange={(event) => setFormData({ ...formData, playerEmail: event.target.value })}
                                />
                        </Flex>
                        <Flex direction='column' align='flex-start'>
                            <label htmlFor='numerTrophies'>Number of trophies</label>
                            <Input width='260px' height='30px' 
                                id='numerTrophies' 
                                name='numerTrophies' 
                                type='text' 
                                placeholder='Introduce the number of trophies to create' 
                                value={formData.numerTrophies} 
                                onChange={(event) => setFormData({ ...formData, numerTrophies: event.target.value })}
                                />
                        </Flex>
                        <Flex align='flex-end' margin='0px 10px'>
                            <Button width='100px' height='30px'>Add player</Button>  
                        </Flex>
                    </Flex>
                 
                    <Spacer />
                    <Flex direction='column' align='center'>
                        {error && <p>&nbsp;{error}</p>}
                        <Button width='300px' height='30px'>Create trophies</Button>
                    </Flex>
                    <Spacer />
                </form>
            </FlexStyled>
        </Flex>
        
    )
}

export default CreateTrophyForm;