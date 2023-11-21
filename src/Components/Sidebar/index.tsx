import { useNavigate } from 'react-router-dom';
import { GrUserAdmin } from 'react-icons/gr'

import { Menu } from "../Sidebar/styles"
import React from 'react';

export const SideBar: React.FC = () => {
  const navigate = useNavigate();


  const handleSwitchAdmin = () => {
    navigate("/", {replace:true})
  }

  return (
    <>
      <Menu >
        <div className='main'>
          <button onClick={handleSwitchAdmin}><GrUserAdmin/><span>Admin</span></button>
        </div>
      </Menu>
    </>
  )
}