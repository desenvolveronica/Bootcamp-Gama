import { Icon } from "@mui/material";
import React from "react";
import "./MenuSideButtons.css";
import { Link } from 'react-router-dom';

export const SideBarData = [
    {
        title: "Home",
        icon: <img src="src\components\Pictures\black-24dp\outline_home_black_24dp.png" alt="" />,
        link: '/Home'
    },
    {
        title: "Meus Programas",
        icon: <img src="src\components\Pictures\list\outline_fact_check_black_24dp.png" alt="" />,
        link: '/DashBoard'
    },
    {
        title: "Estatísticas",
        icon: <img src="src\components\Pictures\statistics\1x\outline_analytics_black_24dp.png" alt="" />,
        link: '/pieChart'
    },
    {
        title: "Clientes",
        icon: <img src="src\components\Pictures\people\outline_people_black_24dp.png" alt="" />,
        link: '/client'
    },
    {
        title: "Suporte",
        icon: <img src="src\components\Pictures\suport\1x\outline_help_outline_black_24dp.png
        " alt="" />,
        link: '/suport'
    },
    {
        title: "Sair",
        icon: <img src="src\components\Pictures\exit\1x\outline_logout_black_24dp.png
        " alt="" />,
        link: '/home',
    }
]

  