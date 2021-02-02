import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import {
  Grid,
  Typography,
  useMediaQuery,
  IconButton,
  Hidden,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//components
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  arrowContainer: {
    marginTop: "0.5em",
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  iconItem: {
    [theme.breakpoints.down("sm")]: {
      "&:nth-child(2)": {
        marginTop: "8rem",
        marginBottom: "8rem",
      },
    },
  },
  iconSize: {
    [theme.breakpoints.down("md")]: {
      "&:nth-child(2)": {
        maxWidth: "20rem",
      },
    },
  },
  itemContainer: {
    maxWidth: "40rem",
  },
  paragraphContainer: {
    maxWidth: "30em",
    marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      marginTop: "10px",
      marginLeft: 0,
    },
  },
}));
const Websites = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const selectedHandle = (val) => {
    setValue(1);
    setSelectedIndex(val);
  };
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Stunning Custom Website Design | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Completely custom designed and built from scratch to be blazing fast. Optimized code, server-side rendering, and perfect responsive design | 99% PageSpeed Score"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Websites"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/websites" />
        <link rel="canonical" key="canonical" href="arc.com/websites" />
      </Head>
      <Grid
        item
        container
        direction="row"
        style={{ marginTop: matchesXS ? "1em" : "2em" }}
        classes={{ root: classes.rowContainer }}
        justify={matchesSM ? "center" : undefined}
      >
        <Hidden smDown>
          <Grid item style={{ marginRight: "1em", marginLeft: "-3.5em" }}>
            <IconButton
              component={Link}
              href="/mobileapps"
              onClick={() => selectedHandle(2)}
              classes={{ root: classes.arrowContainer }}
              style={{ backgroundColor: "transparent" }}
            >
              <img src="/assets/backArrow.svg" alt="back arrow" />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid
          item
          align={matchesSM ? "center" : "justify"}
          style={{ maxWidth: "40rem" }}
        >
          <Typography variant="h2">Website Development</Typography>
          <Typography variant="body1" paragraph>
            Having a website is a necessity in today’s business world. They give
            you one central, public location to let people know who you are,
            what you do, and why you’re the best at it.
          </Typography>
          <Typography variant="body1" paragraph>
            From simply having your hours posted to having a full fledged online
            store, making yourself as accessible as possible to users online
            drives growth and enables you to reach new customers.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <IconButton
              component={Link}
              href="/services"
              onClick={() => selectedHandle(0)}
              classes={{ root: classes.arrowContainer }}
              style={{ backgroundColor: "transparent" }}
            >
              <img src="/assets/forwardArrow.svg" alt="forward arrow" />
            </IconButton>
          </Grid>
        </Hidden>
      </Grid>
      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.rowContainer }}
        style={{ marginTop: "10rem" }}
        alignItems={matchesSM ? "center" : undefined}
      >
        <Grid item md>
          <Typography variant="h4" gutterBottom>
            Analytics
          </Typography>
        </Grid>
        <Grid
          md
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          justify={matchesSM ? "center" : undefined}
        >
          <Grid item>
            <img
              src="/assets/analytics.svg"
              alt="analytics"
              style={{
                maxWidth: matchesSM ? "15rem" : "25rem",
              }}
            />
          </Grid>
          <Grid item classes={{ root: classes.paragraphContainer }}>
            <Typography variant="body1" paragraph>
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.rowContainer }}
        style={{ marginTop: "10rem" }}
        alignItems={matchesSM ? "center" : "flex-end"}
      >
        <Grid item>
          <Grid item md align={matchesSM ? "center" : undefined}>
            <Typography variant="h4" gutterBottom>
              E-Commerce
            </Typography>
          </Grid>
          <Grid
            md
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
            justify={matchesSM ? "center" : undefined}
          >
            <Grid item>
              <img
                src="/assets/ecommerce.svg"
                alt="ecommerce"
                style={{
                  maxWidth: matchesSM ? "15rem" : "25rem",
                }}
              />
            </Grid>
            <Grid item classes={{ root: classes.paragraphContainer }}>
              <Typography variant="body1" paragraph>
                It’s no secret that people like to shop online.
              </Typography>
              <Typography variant="body1" paragraph>
                In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                time for your slice of that pie.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.rowContainer }}
        style={{ marginTop: "10rem" }}
        alignItems={matchesSM ? "center" : undefined}
      >
        <Grid item md>
          <Typography variant="h4" gutterBottom>
            Outreach
          </Typography>
        </Grid>
        <Grid
          md
          item
          container
          direction={matchesSM ? "column" : "row"}
          alignItems="center"
          justify={matchesSM ? "center" : undefined}
        >
          <Grid item>
            <img
              src="/assets/outreach.svg"
              alt="outreach"
              style={{
                maxWidth: matchesSM ? "15rem" : "25rem",
              }}
            />
          </Grid>
          <Grid item classes={{ root: classes.paragraphContainer }}>
            <Typography variant="body1" paragraph>
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        classes={{ root: classes.rowContainer }}
        style={{ margin: "10rem 0" }}
        alignItems={matchesSM ? "center" : "flex-end"}
      >
        <Grid item>
          <Grid item md align={matchesSM ? "center" : undefined}>
            <Typography variant="h4" gutterBottom>
              Search Engine Optimization
            </Typography>
          </Grid>
          <Grid
            md
            item
            container
            direction={matchesSM ? "column" : "row"}
            alignItems="center"
            justify={matchesSM ? "center" : undefined}
          >
            <Grid item>
              <img
                src="/assets/seo.svg"
                alt="seo"
                style={{
                  maxWidth: matchesSM ? "15rem" : "25rem",
                }}
              />
            </Grid>
            <Grid item classes={{ root: classes.paragraphContainer }}>
              <Typography variant="body1" paragraph>
                How often have you ever been to the second page of Google
                results? If you’re like us, probably never.
              </Typography>
              <Typography variant="body1" paragraph>
                Customers don’t go there either, so we make sure your website is
                designed to end up on top.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
