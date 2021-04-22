import { useState } from 'react';

import MainLayout from '../components/layout/MainLayout';
import Landing from '../components/Landing';


const MainPage = () => {
    const [accesApp, setAccesApp] = useState(null);


    return(
        <>
            <MainLayout>
                    <Landing />
            </MainLayout>
        </>
        
            
        
    )
}

export default MainPage;