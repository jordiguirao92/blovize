import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/ProfileCard';
import ConfigurationProfileForm from '../components/form/ConfigurationProfileForm'




const ConfigurationProfile= () => {

    return(
        <>
            <MainLayout>
                    <ProfileCard />
                    <ConfigurationProfileForm />
            </MainLayout>
        </>  
    )
}

export default ConfigurationProfile;