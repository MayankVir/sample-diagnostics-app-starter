import React from 'react'
import DataUsageIcon from '@material-ui/icons/DataUsage';
import TuneIcon from '@material-ui/icons/Tune';
import FlagIcon from '@material-ui/icons/Flag';
// import / from './components/SysData'
// import diagnostic_manager from '../components/SysManager'
// import SysState from '../components/SysState'

export const SidebarData =  [
      {
          title: "System Data",
          icon: <DataUsageIcon />,
          link: "/",
      },
      {
          title: "System Diagnostic Manager",
          icon: <TuneIcon />,
          link: "/diagnostic_manager",
      },
      {
          title: "System State",
          icon: <FlagIcon />,
          link: "/state",
      },
];