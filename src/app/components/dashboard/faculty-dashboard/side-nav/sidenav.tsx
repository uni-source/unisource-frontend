'use client';
import './sidenav.css';
import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import RuleFolderIcon from '@mui/icons-material/RuleFolder';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StoreIcon from '@mui/icons-material/Store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '../../../../../../redux/features/auth/authSlice';
import { MDBCardImage } from 'mdb-react-ui-kit';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: 'white',
  color: 'black',
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: 'var(--light-purple)', 
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor: 'var(--light-purple)', 
      },
    }),
  }),
);

const StyledLink = styled(Link)({
  textDecoration: 'none',
  color: 'inherit',
});

interface MiniDrawerProps {
  childTitle: string;
  mentor:any; 
}

export default function MiniDrawer({ childTitle,mentor }: MiniDrawerProps) {
  const theme = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [notifications, setNotifications] = React.useState(true);

  React.useEffect(() => {
    setTitle(childTitle);
  }, [childTitle]);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLoggedOut = () => {
    dispatch(userLoggedOut());
    router.push('/');
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '/faculty-dashboard' },
    { text: 'Student Verification', icon: <PersonAddIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '/faculty-dashboard/student-verification' },
    { text: 'All Students', icon: <PeopleAltIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '/faculty-dashboard/all-students' },
    { text: 'Pending Projects', icon: <RuleFolderIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '/faculty-dashboard/pending-projects' },
    { text: 'All Projects', icon: <FolderCopyIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '/faculty-dashboard/all-projects' },
    { text: 'Org Verification', icon: <AddBusinessIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '/faculty-dashboard/organization-verification' },
    { text: 'All Organizations', icon: <StoreIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '/faculty-dashboard/all-organization' },
    { text: 'Logout', icon: <ExitToAppIcon sx={{ fontSize: 30, marginTop: 1, marginBottom: 1 }} />, link: '', onClick: handleLoggedOut }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 1,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography sx={{ fontSize: 25, fontWeight: "700", paddingLeft: "20px" }} noWrap component="div">
              {title}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit">
              <Badge variant="dot" color="success" invisible={!notifications}>
                <NotificationsIcon sx={{ fontSize: 30 }} />
              </Badge>
            </IconButton>
            {mentor?.data?.public_url ? (
                  <MDBCardImage
                    src={mentor?.data?.public_url}
                    alt="avatar"
                    className="rounded-circle"
                    fluid
                    style={{
                      width: "40px",
                      height: "40px",
                      marginLeft: 1
                    }}
                  />
                ) : (
                  <Avatar
                    alt="avatar"
                    sx={{
                      width: 40,
                      height: 40,
                      marginLeft: 1
                    }}
                  ></Avatar>
                )}
            <Typography variant="body1" sx={{ display: { xs: 'none', md: 'block' }, marginLeft: 1 }}>
              {mentor?.data?.name}
            </Typography>
          </Box>
        </Toolbar>
      </AppBar> 
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuItems.map((item) => (
            item.text === 'Logout' ? (
              <ListItem disablePadding sx={{ display: 'block' }} key={item.text} onClick={item.onClick}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ) : (
              <StyledLink href={item.link} key={item.text}>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </StyledLink>
            )
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
