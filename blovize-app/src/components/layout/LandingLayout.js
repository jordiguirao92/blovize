import Footer from '../Footer';
import Header from '../Header';

const LandingLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default LandingLayout;