import MainLayout from '../components/layout/MainLayout';
import Landing from '../components/Landing';
import ProfileCard from '../components/ProfileCard';
import {MainImage} from '../components/UI';


const MainPage = () => {

    return(
        <>
            <MainLayout>
                    <Landing />
                    <ProfileCard />
                    <MainImage height='400px'/>
            </MainLayout>
        </>
    )
}

export default MainPage;