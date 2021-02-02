import React, { useState, useEffect } from "react";
import Link from "../Link";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3rem",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25rem",
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: "50px",
    marginRight: "25px",
    borderRadius: "50px",
    height: "45px",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: 0,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    color: "white",
    "&:hover": {
      opacity: 1,
    },
  },
  drawIcon: {
    width: "50px",
    height: "50px",
  },
  drawIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  drawerContainer: {
    backgroundColor: theme.palette.common.blue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7,
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1,
    },
  },

  drawerListItemEstimate: {
    backgroundColor: theme.palette.common.orange,
  },
  appBar: {
    zIndex: theme.zIndex.modal + 1,
  },
}));

const menuItem = [
  {
    name: "Services",
    link: "/services",
    activeIndex: 1,
    selectedIndex: 0,
  },
  {
    name: "Custom Software Development",
    link: "/customsoftware",
    activeIndex: 1,
    selectedIndex: 1,
  },
  {
    name: "IOS/Android App Development",
    link: "/mobileapps",
    activeIndex: 1,
    selectedIndex: 2,
  },
  {
    name: "Website Development",
    link: "/websites",
    activeIndex: 1,
    selectedIndex: 3,
  },
];
const routes = [
  {
    name: "Home",
    link: "/",
    activeIndex: 0,
  },
  {
    name: "Services",
    link: "/services",
    activeIndex: 1,
    ariaOwns: (anchorEl) => (anchorEl ? "simple-menu" : undefined),
    ariaHaspopup: (anchorEl) => (anchorEl ? true : undefined),
    onMouseOver: (handleClick) => (event) => handleClick(event),
  },
  {
    name: "Revolution",
    link: "/revolution",
    activeIndex: 2,
  },
  {
    name: "About Us",
    link: "/about",
    activeIndex: 3,
  },
  {
    name: "Contact Us",
    link: "/contact",
    activeIndex: 4,
  },
  {
    name: "Free Estimate",
    link: "/estimate",
    activeIndex: 5,
  },
];

const Header = ({ value, setValue, selectedIndex, setSelectedIndex }) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleChanger = (e, newValue) => setValue(newValue);

  const handleClick = ({ currentTarget }) => {
    setAnchorEl(currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (index) => {
    setValue(1);
    setAnchorEl(null);
    setSelectedIndex(index);
  };

  useEffect(() => {
    [...menuItem, ...routes]?.forEach((option) => {
      if (window.location.pathname === option.link) {
        if (option.activeIndex !== value) {
          setValue(option.activeIndex);
          if (
            option?.selectedIndex &&
            option?.selectedIndex !== selectedIndex
          ) {
            setSelectedIndex(option.selectedIndex);
          }
        }
      }
    });
  }, [value, selectedIndex, setValue, setSelectedIndex]);
  const tabs = (
    <>
      <Tabs
        className={classes.tabContainer}
        value={value === 5 ? false : value}
        onChange={handleChanger}
        indicatorColor="primary"
      >
        {[...routes.slice(0, routes.length - 1)]?.map((route, index) => (
          <Tab
            key={index}
            aria-owns={route.ariaOwns?.(anchorEl)}
            aria-haspopup={route.ariaHaspopup?.(anchorEl)}
            onMouseOver={route.onMouseOver?.(handleClick)}
            label={route.name}
            className={classes.tab}
            component={Link}
            href={route.link}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        href="/estimate"
        onClick={() => setValue(5)}
      >
        Free Estimate
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        classes={{ paper: classes.menu }}
        elevation={0}
        style={{ zIndex: 1302 }}
      >
        {menuItem?.map((option, i) => {
          const isSelected = i === selectedIndex && value === 1;
          return (
            <MenuItem
              key={i}
              onClick={() => handleMenuItemClick(i)}
              component={Link}
              href={option.link}
              classes={{
                root: classes.menuItem,
                selected: classes.drawerItemSelected,
              }}
              selected={isSelected}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawerContainer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes?.map((option, i) => {
            const isEstimate = option.link === "/estimate";
            return (
              <ListItem
                key={i}
                divider
                button
                component={Link}
                href={option.link}
                onClick={() => {
                  setOpenDrawer(false);
                  setValue(option.activeIndex);
                }}
                selected={!isEstimate && value === option.activeIndex}
                classes={{
                  root: isEstimate && classes.drawerItemEstimate,
                  selected: !isEstimate && classes.drawerItemSelected,
                }}
              >
                <ListItemText
                  disableTypography
                  classes={{ root: classes.drawerItem }}
                >
                  {option.name}
                </ListItemText>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        onClick={() => setOpenDrawer((prev) => !prev)}
        className={classes.drawIconContainer}
      >
        <MenuIcon className={classes.drawIcon} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar
          position="fixed"
          color="primary"
          classes={{ root: classes.appBar }}
        >
          <Toolbar disableGutters>
            <Button
              component={Link}
              href="/"
              disableRipple
              onClick={() => {
                setOpenDrawer(false);
                setValue(0);
              }}
              className={classes.logoContainer}
            >
              <img
                src="/assets/logo.svg"
                alt="company-logo"
                className={classes.logo}
              />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;

//reference how to pass the props in makeStyles function
// const useStyles = props => makeStyles( theme => ({
//   div: {
//       width: theme.spacing(props.units || 0)
//   }
// }));

// export default function ComponentExample({ children, ...props }){
//   const { div } = useStyles(props)();
//   return (
//       <div className={div}>{children}</div>
//   );
// }
