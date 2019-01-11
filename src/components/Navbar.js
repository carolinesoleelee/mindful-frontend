import React, { Fragment } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = props => {
  let { location: { pathname } } = props;
  return (
    <Menu pointing secondary>
      {<Fragment>
          <Menu.Item as={NavLink} to="/" name="Homepage" active={pathname === "/"}/>
          <Link className='item' to='/analytics'>Analytics</Link>
          <Link className='item' to='/timesheet'>Timesheet</Link>
          <Menu.Menu position="right">
          </Menu.Menu>
        </Fragment>
      }
    </Menu>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
