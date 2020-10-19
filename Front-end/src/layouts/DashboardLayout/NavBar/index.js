import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';
import AzureAD from 'react-aad-msal';
import { authProvider } from '../../../authProvider';
import Can from 'src/authorize/Can';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Senior Developer'
};

const items = [
  {
    href: '/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard',
    visit: "dashboard-page:visit"
  },
  {
    href: '/users',
    icon: UsersIcon,
    title: 'Users',
    visit: "user-page:visit"
  },
  {
    href: '/initiatives',
    icon: ShoppingBagIcon,
    title: 'Initiatives',
    visit: "initiative-page:visit"
  },
  // {
  //   href: '/account',
  //   icon: UserIcon,
  //   title: 'Account',
  //   visit: "account-page:vist"
  // },
  // {
  //   href: '/settings',
  //   icon: SettingsIcon,
  //   title: 'Settings',
  //   visit: "setting-page:visit"
  // },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);


  const content = (

    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/account"
        />
        <AzureAD provider={authProvider}>
          {
            ({ accountInfo }) => {
              console.log(accountInfo.account.idToken.roles)
              return (
                < Typography
                  className={classes.name}
                  color="textPrimary"
                  variant="h5"
                >
                  {accountInfo?.account.name}
                </Typography>
              )
            }}
        </AzureAD >
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <AzureAD provider={authProvider}>
          {
            ({ accountInfo }) => {
              const role = accountInfo.account.idToken.roles
              return (
                <List>
                  {
                    items.map((item, index) => (
                      <Can
                        role={role}
                        perform={item.visit}
                        yes={() => (
                          <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                            key={index}
                          />
                        )}
                      />
                    ))}
                </List>
              )
            }}
        </AzureAD>
      </Box>
      <Box flexGrow={1} />
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;
