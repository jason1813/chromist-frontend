import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import Network from '../../network/Network';

export default function ProfileMenu(props) {
  const [anchorEl, setAnchorEl] = useState(props.anchorEl);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    Network.authOut();
    document.location.href = '../';
  };

  return (
    <div className="ProfileMenu">
      <img
        className="NavBar-profile"
        src={require('../img/profile.png')}
        alt="pencil"
        onClick={handleClick}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
