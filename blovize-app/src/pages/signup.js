import {useParams} from "react-router-dom";

import LandingLayout from '../components/layout/LandingLayout';
import Landing from '../components/Landing';
import SignUpForm from '../components/form/SignUpForm';


const SignUpPage = () => {
    const {role} = useParams();
    console.log(role);

    return(
        <>
            <LandingLayout>
                <Landing />
                <SignUpForm role={role}/>
            </LandingLayout>  
        </>
    )
}

export default SignUpPage;