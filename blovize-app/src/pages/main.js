import MainLayout from '../components/layout/MainLayout';
import Landing from '../components/Landing';
import ProfileCard from '../components/ProfileCard';


const MainPage = () => {

    return(
        <>
            <MainLayout>
                    <Landing />
                    <ProfileCard />
            </MainLayout>
        </>
    )
}

export default MainPage;