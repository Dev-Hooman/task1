import React from 'react'
import HomeIcon from '@/assets/icons/HomeIcon'
import KeyIcon from '@/assets/icons/KeyIcon'
import GlobeIcons from '@/assets/icons/GlobeIcons'
import AdjustmentIcons from '@/assets/icons/AdjustmentIcons'
import WarningIcon from '@/assets/icons/WarningIcon'
import Settings from '@/assets/icons/Settings'
import ServerIcon from '@/assets/icons/ServerIcon'
import TableIcon from '@/assets/icons/TableIcon'
import StackIcon from '@/assets/icons/StackIcon'
import UserGroupIcon from '@/assets/icons/UserGroupIcon'
import IdentificationIcon from '@/assets/icons/IdentificationIcon'
import CurrencyDollarIcon from '@/assets/icons/CurrencyDollarIcon'
import UserIcon from '@/assets/icons/UserIcon'


const IconsData = ({iconName}) => {


    if(iconName == "FiHome"){
        return <HomeIcon/>
    }else if(iconName == "Fikey"){
        return <KeyIcon/>
    }else if(iconName == 'FiGlobe'){
        return <GlobeIcons/>
    }else if(iconName == 'FiTool'){
        return <AdjustmentIcons/>
    }else if(iconName == 'WarningIcon'){
        return <WarningIcon/>
    }else if(iconName == 'FiSettings'){
        return <Settings/>
    }else if(iconName == 'FiServer'){
       return  <ServerIcon/>
    }else if(iconName == 'FiGrid'){
        return <TableIcon/>
    }else if(iconName == 'GiGears'){
        return <StackIcon/>
    }else if(iconName == 'FiUsers'){
        return <UserGroupIcon/>
    }else if(iconName == 'FiCreditCard'){
        return <IdentificationIcon/>
    }else if(iconName == 'FiDollarSign'){
        return <CurrencyDollarIcon/>
    }else if(iconName == 'UserIcon'){
        return <UserIcon/>
    }
}

export default IconsData