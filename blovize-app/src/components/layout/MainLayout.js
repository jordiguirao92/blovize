import Footer from '../Footer';
import HeaderMain from '../HeaderMain';

import SideBar from '../sidebar/SideBar'

const MainLayout = ({ children }) => {
  return (
    <>
      <HeaderMain />
      <SideBar />
      {children}
      <Footer />
    </>
  )
}

export default MainLayout;