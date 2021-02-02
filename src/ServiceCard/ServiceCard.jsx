import React from "react";
import Link from "../Link";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//icon
import ButtonArrow from "../ui/ButtonArrow";

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
  specialLearnMore: {
    "&:hover": {
      backgroundColor: theme.palette.common.orange,
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subtitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));
const ServiceCard = ({
  title,
  subTitle1,
  subTitle2,
  link,
  onClick,
  pic,
  right,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      justify={matchesSM ? "center" : right ? "flex-end" : undefined}
    >
      <Grid
        item
        style={{
          marginLeft: !right ? (matchesSM ? 0 : "5em") : undefined,
          textAlign: matchesSM ? "center" : undefined,
          width: matchesSM ? undefined : "35em",
        }}
      >
        <Typography variant="h4">{title}</Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          {subTitle1}
        </Typography>
        <Typography variant="subtitle1">{subTitle2()}</Typography>
        <Button
          variant="outlined"
          classes={{ root: classes.learnMore }}
          component={Link}
          href={link}
          onClick={onClick}
        >
          <span style={{ marginRight: 10 }}>Learn more</span>
          <ButtonArrow
            fill={theme.palette.common.blue}
            width={10}
            height={10}
          />
        </Button>
      </Grid>
      <Grid
        item
        className={classes.icon}
        style={{ marginRight: right ? (matchesSM ? 0 : "5em") : undefined }}
      >
        <img src={pic.src} alt={pic.alt} width="250em" />
      </Grid>
    </Grid>
  );
};

export default ServiceCard;
