import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import CreateTrophyForm from '../components/form/CreateTrophyForm';


const TrophiesCreator = () => {

    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <CreateTrophyForm />
            </MainLayout>
        </>  
    )
}

export default TrophiesCreator;