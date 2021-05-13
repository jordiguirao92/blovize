import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

import LandingLayout from '../components/layout/LandingLayout';
import Landing from '../components/Landing';
import SignUpRole from '../components/form/SignUpRole';
import Loading from '../components/Loading';
import {Flex, Button, Spacer, HomeImage, H2} from '../components/UI';


const HomePage = () => {
    const [accesApp, setAccesApp] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const user = useSelector(state => state.user);

  useEffect(() => {
      if(user) history.push('/main');
      setIsLoading(false);
  }, []);

  if (isLoading) return <Loading />;


    return(
        <>
            <LandingLayout>
                <Landing />

                <Flex justify='space-evenly' padding='50px 0px'>
                    <Button  width='200px' height='65px' onClick={() => setAccesApp('signup') }><H2 color={props => props.theme.colors.white}>Sign Up</H2></Button>
                    <Link to="/login"><Button width='200px' height='65px' backColor={props => props.theme.colors.white} color={props => props.theme.colors.primary}><H2 color={props => props.theme.colors.primary}>Log in</H2></Button></Link>
                </Flex>

                {accesApp === 'signup' && <SignUpRole />}
                <HomeImage height='700px'/>
            </LandingLayout>  
        </>
    )
}

export default HomePage;