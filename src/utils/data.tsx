import BedIcon from "../assets/svg/bed.svg";
import LightIcon from "../assets/svg/light.svg";
import PCIcon from "../assets/svg/pc.svg";
import VideoGameIcon from "../assets/svg/videogame.svg";
import WifiIcon from "../assets/svg/wifi.svg";
import WirelessIcon from "../assets/svg/wireless.svg";
import WorkIcon from "../assets/svg/work.svg";

import Profile from "../assets/images/profile.jpg";

export const list = [
  {
    description: "Quarto",
    icon: <BedIcon />,
    devices: 4,
  },
  {
    description: "Escritório",
    icon: <WorkIcon />,
    devices: 6,
    active: true,
  },
  {
    description: "Cozinha",
    icon: <VideoGameIcon />,
    devices: 12,
  },
  {
    description: "Sala de Jogos",
    icon: <VideoGameIcon />,
    devices: 2,
  },
  {
    description: "Lampada",
    icon: <LightIcon />,
    devices: 10,
  },
  {
    description: "Wifi",
    icon: <WifiIcon />,
    devices: 3,
  },
  {
    description: "Carregador Sem Fio",
    icon: <WirelessIcon />,
    devices: 12,
  },
  {
    description: "PC",
    icon: <PCIcon />,
    devices: 3,
  },
];

export const user = {
  name: "Keanu",
  profile: Profile,
};
