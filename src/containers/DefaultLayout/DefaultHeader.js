import React, { Component } from 'react';
import { Link, NavLink, Redirect } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
//import neologo from '../../assets/img/brand/logo.jpg'
import neologo from '../../assets/img/brand/logo-small.png'
import ProfileImg from '../../assets/img/avatars/6.jpg'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {

    if (localStorage.getItem('AUserToken') == null) {
      return <Redirect to="/login" />
    }

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: neologo, width: 90, height: 35, alt: 'Neo7Logix' }} /*width: 89, height: 25, */
          minimized={{ src: neologo, width: 45, height: 25, alt: 'Neo7Logix' }} /*width: 30, height: 30,*/
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          {/*<NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-list"></i></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-location-pin"></i></NavLink>
          </NavItem>*/}
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              {/* <img src={'../../assets/img/avatars/6.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" /> */}
              <img src={ProfileImg} className="img-avatar" alt="admin@bootstrapmaster.com" />
            </DropdownToggle>
            <DropdownMenu right>
              {/*<DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
              <DropdownItem><i className="fa fa-bell-o"></i> Updates<Badge color="info">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Comments<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
              <DropdownItem><i className="fa fa-usd"></i> Payments<Badge color="secondary">42</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>*/}
              <DropdownItem tag={Link} to="/profile"><i className="fa fa-user"></i> Profile</DropdownItem>
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-md-down-none" />*/}
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;

//<Nav className="d-md-down-none" navbar>
//  <NavItem className="px-3">
//    <NavLink to="/dashboard" className="nav-link" >Dashboard</NavLink>
//  </NavItem>
//  <NavItem className="px-3">
//    <Link to="/users" className="nav-link">Users</Link>
//  </NavItem>
//  <NavItem className="px-3">
//    <NavLink to="#" className="nav-link">Settings</NavLink>
//  </NavItem>
//</Nav>
