import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import LandingLayout from '../components/layout/LandingLayout';
import Landing from '../components/Landing';
import SignUpRole from '../components/form/SignUpRole';
import LoginForm from '../components/form/LoginForm';

const HomeDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    background-color: ${props => props.theme.colors.white};

    .button {
        margin: 10px;
        border-radius: 7px;
        width: 200px;
        height: 65px;
        border: 3px solid ${props => props.theme.colors.primary};
        cursor: pointer;

        &.signup {
            color: ${props => props.theme.colors.white};
            background-color: ${props => props.theme.colors.primary};
        }

        &.login {
            color: ${props => props.theme.colors.primary};
            background-color: ${props => props.theme.colors.white};

        }

    }


`

const HomePage = () => {
    const [accesApp, setAccesApp] = useState(null);


    return(
        <>
            <LandingLayout>
                <Landing />
                <HomeDiv>
                    <button className='button signup' onClick={() => setAccesApp('signup') }>Sign Up</button>
                    <Link to="/login"><button className='button login'>Log in</button></Link>
                </HomeDiv>
                {accesApp === 'signup' && <SignUpRole />}
            </LandingLayout>  
        </>
    )
}

export default HomePage;