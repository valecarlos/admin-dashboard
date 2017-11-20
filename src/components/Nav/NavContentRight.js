import React, { Component } from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

class NavContentRight extends Component {
  render() {
    return (
      <ul className="sidebar__content-right">
        <li>
          <IconMenu
            iconButtonElement={
              <IconButton
                className="md-button header-btn">
                <i className="material-icons">mail_outline</i>
              </IconButton>
            }
            menuStyle={{minWidth: '250px'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem
              className="header-icon-dropdown-item"
              leftIcon={<i className="material-icons">mail_outline</i>}
              primaryText="New mail"
              secondaryText={<span className="text-muted">5min ago</span>}
              />
              <MenuItem
                className="header-icon-dropdown-item"
                leftIcon={<i className="material-icons">mail_outline</i>}
                primaryText="New mail"
                secondaryText={<span className="text-muted">5min ago</span>}
              />
            </IconMenu>
        </li>
        <li>
          <IconMenu
            iconButtonElement={
              <IconButton
                className="md-button header-btn">
                <i className="material-icons">chat_bubble_outline</i>
              </IconButton>
            }
            menuStyle={{minWidth: '250px'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem
              className="header-icon-dropdown-item"
              leftIcon={<i className="material-icons">mail_outline</i>}
              primaryText="Karen"
              secondaryText={<span className="text-muted">5min ago</span>}
            />
          </IconMenu>
        </li>
      </ul>
    );
  }
}

export default NavContentRight;