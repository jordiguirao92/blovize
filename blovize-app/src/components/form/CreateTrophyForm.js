import {useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

import {Flex, FlexStyled, Button, Input, H3, Spacer, LinkStyled, A, Select, ImageStyled, InputImage} from '../UI';
import {userSignup} from '../../controllers/user';
import {SportBranchData} from './SportBranchData';

const CreateTrophyForm = () => {

    const user = useSelector(state => state.user);
    const history = useHistory();
    const [error, setError] = useState('');
    const [file, setFile] = useState('');
    const [addPlayers, setAddPlayers] = useState([]);
    const [formData, setFormData] = useState({
        trophyTitle:'', 
        trophyTeam:'', 
        trophyDate:'', 
        trophyClassification:'', 
        trophyBranch:'', 
        trophyImage: '',
        trophyDescription:'',
        userRole: user.userRole === 'institution' ? 'institution' : 'player'
    });
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const result = await userSignup(formData);
        console.log('IMTCHLG ~ file: signup.js ~ line 14 ~ handleFormSubmit ~ result', result);
        if (result) {
          history.push('/main');
        }
      }

    return(
        <Flex justify='center'>
            <FlexStyled direction='column' justify='center' width='90%'>
                <H3 margin='50px auto'>Trophies Creator Form</H3>
                <form onSubmit={handleFormSubmit}>
                    <Flex justify='flex-start' align='flex-start' >
                        <Flex direction='column' align='flex-start' width='auto' margin='0px 10px'>
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='trophyTitle'>Trophy title</label>
                                <Input width='300px' height='30px' 
                                    id='trophyTitle' 
                                    name='trophyTitle' 
                                    type='text' 
                                    placeholder='Introduce the name of the trophy' 
                                    value={formData.trophyTitle} 
                                    onChange={(event) => setFormData({ ...formData, trophyTitle: event.target.value })}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='trophyTeam'>Trophy team</label>
                                <Input width='300px' height='30px' 
                                    id='trophyTeam' 
                                    name='trophyTeam' 
                                    type='text' 
                                    placeholder='Introduce the name of the team' 
                                    value={formData.trophyTeam} 
                                    onChange={(event) => setFormData({ ...formData, trophyTeam: event.target.value })}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='trophyDate'>Trophy date</label>
                                <Input width='300px' height='30px' 
                                    id='trophyDate' 
                                    name='trophyDate' 
                                    type='datetime-local' 
                                    placeholder='Introduce the date of the trophy' 
                                    value={formData.trophyDate} 
                                    onChange={(event) => {setFormData({ ...formData, trophyDate: event.target.value });
                                    console.log(event.target.value);
                                    console.log(new Date(event.target.value))
                                    console.log(new Date(event.target.value).getTime())
                                    }}
                                    />
                            </Flex>
                        </Flex>
                        <Flex direction='column' align='flex-start' width='auto'>
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='trophyClassification'>Trophy classification</label>
                                <Input width='300px' height='30px' 
                                    id='trophyClassification' 
                                    name='trophyClassification' 
                                    type='text '
                                    placeholder='Introduce the classification' 
                                    value={formData.trophyClassification} 
                                    onChange={(event) => setFormData({ ...formData, trophyClassification: event.target.value })}
                                    />
                            </Flex>
                            <Spacer />
                            <Flex direction='column' align='flex-start' width='auto'>
                                <label htmlFor='trophyClassification'>Trophy branch</label>
                                <Select name='trophyBranch' width='300px' height='30px' onChange={(event) => setFormData({ ...formData, trophyBranch: event.target.value })}>
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
                                <label htmlFor='trophyImage'>Trophy Image</label>
                                <InputImage width='300px' height='30px' 
                                    id='trophyImage' 
                                    name='trophyImage' 
                                    type='file'
                                    value={formData.trophyImage}
                                    onChange={(event) => {
                                        setFormData({ ...formData, trophyImage: event.target.value });
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
                                <label htmlFor='trophyDescription'>Trophy description</label>
                                <Input width='600px' height='30px' 
                                    id='trophyDescription' 
                                    name='trophyDescription' 
                                    type='text' 
                                    placeholder='Introduce a description of the trophy' 
                                    value={formData.trophyDescription} 
                                    onChange={(event) => setFormData({ ...formData, trophyDescription: event.target.value })}
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