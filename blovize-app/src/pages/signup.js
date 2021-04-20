import styled from 'styled-components';
import { useState } from 'react';

import LandingLayout from '../components/layout/LandingLayout';
import Landing from '../components/Landing';
import SignUpForm from '../components/form/SignUpForm';


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

const SignUpPage = () => {
    const [accesApp, setAccesApp] = useState(null);


    return(
        <>
            <LandingLayout>
                <Landing />
                <SignUpForm />
            </LandingLayout>  
        </>
    )
}

export default SignUpPage;