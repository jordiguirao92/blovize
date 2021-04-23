
import LandingLayout from '../components/layout/LandingLayout';
import NotFound from '../components/NotFound'
import {FlexStyled} from '../components/UI'


const NotFoundPage = () => {

    return(
        <>
            <LandingLayout>
                <NotFound />
            </LandingLayout>  
        </>
    )
}

export default NotFoundPage;