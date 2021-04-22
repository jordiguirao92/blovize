import { useState } from 'react';
import { Link } from 'react-router-dom';

import LandingLayout from '../components/layout/LandingLayout';
import Landing from '../components/Landing';
import SignUpRole from '../components/form/SignUpRole';
import {Flex, Button, Spacer} from '../components/UI';


const HomePage = () => {
    const [accesApp, setAccesApp] = useState(null);


    return(
        <>
            <LandingLayout>
                <Landing />
                <Spacer />
                <Flex justify='space-evenly'>
                    <Button  width='200px' height='65px' onClick={() => setAccesApp('signup') }>Sign Up</Button>
                    <Link to="/login"><Button width='200px' height='65px' backColor={props => props.theme.colors.white} color={props => props.theme.colors.primary}>Log in</Button></Link>
                </Flex>
                <Spacer />
                {accesApp === 'signup' && <SignUpRole />}
            </LandingLayout>  
        </>
    )
}

export default HomePage;