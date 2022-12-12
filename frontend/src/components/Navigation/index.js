import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Navigation.css';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import ProfileDropdown from './ProfileDropdown';

function Navigation() {

    const dispatch = useDispatch();
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
        <>
        <ProfileDropdown user={sessionUser}className="user-button">
        </ProfileDropdown>
        </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <>
    <div className='top-nav'>
    <a className="github" href="https://github.com/ethangraham43"><img className="githubLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Font_Awesome_5_brands_github.svg" /></a>
    <a className="linkedin" href="https://www.linkedin.com/in/ethan-graham-28454918b/"><img className="linkedinLogo" src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" /></a>
    </div>
    <div className='nav-class'>
        <NavLink exact to="/">
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/opentable_logo_icon_170879.png" className="logo"alt=''/><h3 className='title'>ConnecTable</h3>
        </NavLink>
        <img src="https://img.icons8.com/ios-filled/512/search.png" className='search-button'/>
        {sessionLinks}
    </div>
    </>
  );
}

export default Navigation;