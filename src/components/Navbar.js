import React, { Fragment } from "react";
import { NavLink, withRouter, Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const Navbar = props => {
  let {location: { pathname }, logged_in, setCurrentUser} = props;

  let logout = () => {
    setCurrentUser(null)
    localStorage.clear()
    props.history.push('/login')
  }


  return (
    <Menu pointing secondary className='Navbar'>
      {logged_in ? (<Fragment>
        <div className='topbar'>
          <Link className='it' to='/analytics'>ANALYTICS</Link>
          <Link className='it' to='/timesheet'>DAILY LOG</Link>
          <a className='it' href={'http://localhost:3003/user'}>RELIEF</a>
          </div>
          <Menu.Menu position="right">
            <Menu.Item to="/logout" className='logout' name="LOGOUT" onClick={logout} />
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
          // <a href={'http://localhost:3003/user'}>Let it out</a>
