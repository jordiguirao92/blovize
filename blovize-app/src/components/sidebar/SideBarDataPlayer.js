import { FcLike, FcShop, FcSettings, FcAddImage, FcRating, FcExternal, FcDownload} from 'react-icons/fc';
import {BsFillStarFill} from 'react-icons/bs'

import {iconSize} from '../UI'

export const SidebarDataPlayer = [
    {
      title: 'Marketplace',
      path: '/marketplace',
      icon: <FcShop size={iconSize}/>,
    },
    {
      title: 'My Trophies',
      path: '/my-trophies',
      icon: <FcRating size={iconSize}/>,
    },
    {
      title: 'Favourites Trophies',
      path: '/favourites-trophies',
      icon: <BsFillStarFill size={iconSize} style={{fill: 'gold' }} />
    },
    {
      title: 'Offers Received',
      path: '/offers-received',
      icon: <FcDownload size={iconSize}/>,
    },
    {
      title: 'Offers Send',
      path: '/offer-send',
      icon: <FcExternal size={iconSize}/>,
    },
    {
      title: 'Claim Trophy',
      path: '/claim-trophy',
      icon: <FcAddImage size={iconSize}/>,
    },
    {
      title: 'Configuration Profile',
      path: '/configuration-profile',
      icon: <FcSettings size={iconSize}/>,
    }
  ];