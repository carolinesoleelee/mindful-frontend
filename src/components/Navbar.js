import React, { Fragment } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = props => {
  let {location: { pathname }, logged_in, setCurrentUser} = props;

  let logout = () => {
    setCurrentUser(null)
    localStorage.clear()
    props.history.push('/user')
  }


  return (
    <Menu pointing secondary>
      {logged_in ? (<Fragment>
          <Menu.Item as={NavLink} to="/" name="Homepage" active={pathname === "/"}/>
          <Link className='item' to='/analytics'>Analytics</Link>
          <Link className='item' to='/timesheet'>Timesheet</Link>
          <Menu.Menu position="right">
            <Menu.Item to="/logout" className='logout' name="Logout" onClick={logout} />
          </Menu.Menu>
        </Fragment>) : (
        <Menu.Item
          as={NavLink}
          to="/login"
          name="Login"
          active={pathname === "/login"}
        />
      )}
    </Menu>
  );
};

const NavBarWithRouter = withRouter(Navbar);

export default NavBarWithRouter;
