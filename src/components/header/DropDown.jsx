import React, { useState } from 'react'

import { MenuHandler,Button, MenuItem, Menu, MenuList } from '@material-tailwind/react'
import { useNavigate } from 'react-router-dom';


function DropDown({handler,setProfile}) {
    
    const navigate=useNavigate()
  return (
    <div>
        <Menu placement="bottom-end">
          <MenuHandler>
            <h1 className="cursor-pointer" >{handler}</h1>
          </MenuHandler>
          <MenuList>
            <MenuItem className="lg:mr-4" onClick={()=>{
                setProfile(true )
            }}>Profile</MenuItem>
            <MenuItem  onClick={() => {
                    navigate("/");
                  }}>Log In</MenuItem>
            <MenuItem onClick={() => {
                    navigate("/register");
                  }}>Log Out</MenuItem>
          </MenuList>
        </Menu>
    </div>
  )
}

export default DropDown