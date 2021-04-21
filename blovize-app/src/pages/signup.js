import { useState } from 'react';

import LandingLayout from '../components/layout/LandingLayout';
import Landing from '../components/Landing';
import SignUpForm from '../components/form/SignUpForm';


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