import React from "react";
import Link from "../Link";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//icon
import ButtonArrow from "./ButtonArrow";

const useStyles = makeStyles((theme) => ({
  learnMore: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 10,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2em",
    },
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      "& svg": {
        fill: "white",
      },
    },
  },

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 70,
    width: 180,
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.3rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  callToActionContainer: {
    backgroundImage: 'url("/assets/background.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "60em",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: 'url("/assets/mobileBackground.jpg")',
    },
  },
}));

const CallToAction = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : "row"}
      classes={{ root: classes.callToActionContainer }}
    >
      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
        }}
      >
        <Typography variant="h2">
          Simple Software.
          <br />
          Revolutionary Results.
        </Typography>
        <Typography
          variant="subtitle2"
          style={{ fontSize: "1.5rem", marginBottom: "5px" }}
        >
          Take advantage of the 21st Century.
        </Typography>
        <Button
          component={Link}
          href="/revolution"
          onClick={() => setValue(2)}
          variant="outlined"
          classes={{
            root: classes.learnMore,
          }}
          style={{
            borderColor: "white",
            color: "white",
          }}
        >
          <span style={{ marginRight: 10 }}>Learn more</span>
          <ButtonArrow fill="white" width={10} height={10} />
        </Button>
      </Grid>
      <Grid
        item
        style={{
          marginRight: matchesSM ? 0 : "5em",
          textAlign: matchesSM ? "center" : "inherit",
          marginTop: matchesSM ? "1rem" : 0,
        }}
      >
        <Button
          variant="contained"
          className={classes.estimateButton}
          component={Link}
          href="/estimate"
          onClick={() => setValue(5)}
        >
          Free Estimate
        </Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
