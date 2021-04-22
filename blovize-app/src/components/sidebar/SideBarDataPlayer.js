import { FcLike, FcShop, FcSettings, FcAddImage, FcRating, FcExternal, FcDownload} from 'react-icons/fc';

export const SidebarDataPlayer = [
    {
      title: 'Marketplace',
      path: '/marketplace',
      icon: <FcShop />,
    },
    {
      title: 'My Trohpies',
      path: '/my-trophies',
      icon: <FcRating/>,
    },
    {
      title: 'Favourites Trophies',
      path: '/favourites-trophies',
      icon: <FcLike />,
    },
    {
      title: 'Offers Received',
      path: '/offers-received',
      icon: <FcDownload/>,
    },
    {
      title: 'Offers Send',
      path: '/offer-send',
      icon: <FcExternal/>,
    },
    {
      title: 'Claim Trophy',
      path: '/claim-trophy',
      icon: <FcAddImage/>,
    },
    {
      title: 'Configuration Profile',
      path: '/configuration-profile',
      icon: <FcSettings />,
    }
  ];