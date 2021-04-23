import {FcPanorama, FcSettings, FcAddImage, FcRating} from 'react-icons/fc';

import {iconSize} from '../UI'

export const SidebarDataInstitution = [
  {
    title: 'My Trohpies',
    path: '/my-trophies',
    icon: <FcRating size={iconSize}/>,
  },
  {
    title: 'Created Trophies',
    path: '/my-trophies',
    icon: <FcPanorama size={iconSize}/>,
  },
  {
    title: 'Trophies Creator',
    path: '/trophies-creator',
    icon: <FcAddImage size={iconSize}/>,
  },
  {
    title: 'Configuration Profile',
    path: '/configuration-profile',
    icon: <FcSettings size={iconSize}/>,
  }
];