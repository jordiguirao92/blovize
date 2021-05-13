import { useState } from 'react';

import LandingLayout from '../components/layout/LandingLayout';
import Landing from '../components/Landing';
import LoginForm from '../components/form/LoginForm';


const LoginPage = () => {
    const [accesApp, setAccesApp] = useState(null);


    return(
        <>
            <LandingLayout>
                <Landing />
                <LoginForm />
            </LandingLayout>  
        </>
    )
}

export default LoginPage;