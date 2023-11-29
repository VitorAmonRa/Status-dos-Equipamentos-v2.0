import { IconDiv } from './styles';
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react';
import { SideBar } from '../Sidebar/index'

import React from 'react';

export const Burguer: React.FC = () => {
  const [open, setOpen] = useState(false)

  return(
    <>
     <IconDiv>
          <button  onClick={() => setOpen(!open)}>
            <GiHamburgerMenu/>
          </button>
        </IconDiv>
        <SideBar/>
        

        
    </>
  )
}