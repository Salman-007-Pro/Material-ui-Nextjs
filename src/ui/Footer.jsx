import React from "react";
import Link from "../Link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    zIndex: 1302,
    position: "relative",
  },
  adornment: {
    width: "25em",
    verticalAlign: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  gridContainer: {
    position: "absolute",
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75ren",
    fontWeight: "bold",
    textDecoration: "none",
  },
  gridItem: {
    margin: "3em",
  },
  icon: {
    width: "4rem",
    heigth: "4rem",
    [theme.breakpoints.down("xs")]: {
      width: "2.5rem",
      heigth: "2.5rem",
    },
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em",
      marginTop: "-4em",
    },
  },
}));

const Footer = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden mdDown>
        <Grid
          container
          classes={{ root: classes.gridContainer }}
          justify="center"
        >
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/"
                onClick={() => setValue(0)}
              >
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/services"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(0);
                }}
              >
                Services
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/customsoftware"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(1);
                }}
              >
                Custom Software Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/mobileapps"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(2);
                }}
              >
                IOS/Android App Development
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/websites"
                onClick={() => {
                  setValue(1);
                  setSelectedIndex(3);
                }}
              >
                Website Development
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                The Revolution
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                Vision
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                Technology
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/revolution"
                onClick={() => {
                  setValue(2);
                }}
              >
                Process
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                About Us
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                Mission Statement
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                History
              </Grid>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/about"
                onClick={() => {
                  setValue(3);
                }}
              >
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                component={Link}
                href="/contact"
                onClick={() => {
                  setValue(4);
                }}
              >
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        src="/assets/footerAdornment.svg"
        alt="black decorative slash"
        className={classes.adornment}
      />
      <Grid
        container
        classes={{ root: classes.socialContainer }}
        justify="flex-end"
        spacing={2}
        alignItems="center"
      >
        <Grid
          item
          component={"a"}
          href="https://www.instagram.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.twitter.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/twitter.svg"
            alt="Twitter"
            className={classes.icon}
          />
        </Grid>
        <Grid
          item
          component={"a"}
          href="https://www.facebook.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="/assets/facebook.svg"
            alt="Facebook"
            className={classes.icon}
          />
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
