import {FcPanorama, FcSettings, FcAddImage, FcRating} from 'react-icons/fc';

export const SidebarDataInstitution = [
  {
    title: 'My Trohpies',
    path: '/my-trophies',
    icon: <FcRating/>,
  },
  {
    title: 'Created Trophies',
    path: '/my-trophies',
    icon: <FcPanorama />,
  },
  {
    title: 'Trophies Creator',
    path: '/trophies-creator',
    icon: <FcAddImage/>,
  },
  {
    title: 'Configuration Profile',
    path: '/configuration-profile',
    icon: <FcSettings />,
  }
];