import Footer from '../Footer';
import Header from '../Header';
import {WrapperDiv} from '../UI';

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      <WrapperDiv>
      {children}
      </WrapperDiv>
      <Footer />
    </>
  )
}

export default LandingLayout;