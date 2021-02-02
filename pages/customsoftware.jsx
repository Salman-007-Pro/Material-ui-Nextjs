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
import Lottie from "react-lottie";

//components
import CallToAction from "../src/ui/CallToAction";

//animation
import documentsAnimation from "../src/animations/documentsAnimation/data";
import scaleAnimation from "../src/animations/scaleAnimation/data.json";
import automationAnimation from "../src/animations/automationAnimation/data.json";
import uxAnimation from "../src/animations/uxAnimation/data";

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
    maxWidth: "30rem",
    [theme.breakpoints.down("sm")]: {
      "&:nth-child(2)": {
        marginTop: "8rem",
        marginBottom: "8rem",
      },
    },
  },
  itemContainer: {
    // border: "1px solid red",
    maxWidth: "40rem",
  },
}));

const defaultOptions = (animationData) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const selectedHandle = (val) => {
    setValue(1);
    setSelectedIndex(val);
  };
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">
          Custom Software Development and Design - Free Estimate
        </title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Custom Software Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/customsoftware" />
        <link rel="canonical" key="canonical" href="arc.com/customsoftware" />
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
              href="/services"
              onClick={() => selectedHandle(0)}
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
          <Typography variant="h2">Custom Software Development</Typography>
          <Typography variant="body1" paragraph>
            Whether we’re replacing old software or inventing new solutions, Arc
            Development is here to help your business tackle technology.
          </Typography>
          <Typography variant="body1" paragraph>
            Using regular commercial software leaves you with a lot of stuff you
            don’t need, without some of the stuff you do need, and ultimately
            controls the way you work. Without using any software at all you
            risk falling behind competitors and missing out on huge savings from
            increased efficiency.
          </Typography>
          <Typography variant="body1" paragraph>
            Our custom solutions are designed from the ground up with your
            needs, wants, and goals at the core. This collaborative process
            produces finely tuned software that is much more effective at
            improving your workflow and reducing costs than generalized options.
          </Typography>
          <Typography variant="body1" paragraph>
            We create exactly what you what, exactly how you want it.
          </Typography>
        </Grid>
        <Hidden smDown>
          <Grid item>
            <IconButton
              component={Link}
              href="/mobileapps"
              onClick={() => selectedHandle(2)}
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
        direction={matchesSM ? "column" : "row"}
        justify={matchesSM ? undefined : "center"}
        alignItems={matchesSM ? "center" : undefined}
        classes={{ root: classes.rowContainer }}
        style={{ marginTop: "10rem", marginBottom: "15rem" }}
      >
        <Grid item md align="center" classes={{ root: classes.iconItem }}>
          <Typography variant="h4" gutterBottom>
            Save Energy
          </Typography>
          <img src="/assets/bulb.svg" alt="lightbulb" />
        </Grid>
        <Grid item md align="center" classes={{ root: classes.iconItem }}>
          <Typography variant="h4" gutterBottom>
            Save Time
          </Typography>
          <img src="/assets/stopwatch.svg" alt="stopwatch" />
        </Grid>
        <Grid item md align="center" classes={{ root: classes.iconItem }}>
          <Typography variant="h4" gutterBottom>
            Save Money
          </Typography>
          <img src="/assets/cash.svg" alt="cash" />
        </Grid>
      </Grid>

      {/* item container */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? undefined : "space-between"}
        alignItems={matchesMD ? "center" : undefined}
        classes={{ root: classes.rowContainer }}
        style={{ marginBottom: "20rem" }}
      >
        <Grid
          item
          container
          md
          direction="column"
          classes={{ root: classes.itemContainer }}
          style={{
            marginBottom: matchesMD ? "12rem" : undefined,
          }}
        >
          <Grid item align={matchesMD ? "center" : undefined}>
            <Typography variant="h4" gutterBottom>
              Digital Documents &amp; Data
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              style={{ maxWidth: matchesMD ? undefined : "20rem" }}
              align={matchesMD ? "center" : undefined}
            >
              <Typography variant="body1" paragraph>
                Reduce Errors. Reduce Waste. Reduce Costs.
              </Typography>
              <Typography variant="body1" paragraph>
                Billions are spent annually on the purchasing, printing, and
                distribution of paper. On top of the massive environmental
                impact this has, it causes harm to your bottom line as well.
              </Typography>
              <Typography variant="body1" paragraph>
                By utilizing digital forms and documents you can remove these
                obsolete expenses, accelerate your communication, and help the
                Earth.
              </Typography>
            </Grid>
            <Grid item lg>
              <Lottie
                options={defaultOptions(documentsAnimation)}
                style={{
                  maxHeight: 275,
                  maxWidth: 275,
                  minHeight: 250,
                  marginLeft: matchesMD ? 0 : "1rem",
                  margin: matchesMD ? "0px auto" : 0,
                }}
                isClickToPauseDisabled
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Second */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          md
          classes={{ root: classes.itemContainer }}
          justify={matchesMD ? undefined : "flex-end"}
          alignItems={matchesMD ? "center" : undefined}
        >
          <Grid item lg>
            <Lottie
              options={defaultOptions(scaleAnimation)}
              style={{
                maxHeight: 275,
                maxWidth: 275,
                minHeight: 250,
                marginRight: matchesMD ? 0 : "1rem",
                margin: matchesMD ? "0px auto" : 0,
              }}
              isClickToPauseDisabled
            />
          </Grid>
          <Grid item>
            <Grid item align={matchesMD ? "center" : "right"}>
              <Typography variant="h2" gutterBottom>
                Scale
              </Typography>
            </Grid>
            <Grid item align={matchesMD ? "center" : "right"}>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{
                  direction: matchesMD ? "ltr" : "rtl",
                  maxWidth: matchesMD ? undefined : "20rem",
                }}
              >
                Whether you’re a large brand, just getting started, or taking
                off right now, our application architecture ensures pain-free
                growth and reliability.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ marginBottom: "20rem" }}
      >
        <Grid item style={{ marginBottom: "5px" }}>
          <img
            src="/assets/root.svg"
            alt="tree with root"
            height={matchesSM ? "300em" : "450em"}
            width={matchesSM ? "300em" : "450em"}
          />
        </Grid>
        <Grid item align="center" classes={{ root: classes.itemContainer }}>
          <Typography variant="h4" gutterBottom>
            Root-Cause Analysis
          </Typography>
          <Typography variant="body1" paragraph>
            Many problems are merely symptoms of larger, underlying issues.
          </Typography>
          <Typography variant="body1" paragraph>
            We can help you thoroughly examine all areas of your business to
            develop a holistic plan for the most effective implementation of
            technology.
          </Typography>
        </Grid>
      </Grid>
      {/* item container */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        justify={matchesMD ? undefined : "space-between"}
        alignItems={matchesMD ? "center" : undefined}
        classes={{ root: classes.rowContainer }}
        style={{ marginBottom: "15rem" }}
      >
        <Grid
          item
          container
          md
          direction="column"
          classes={{ root: classes.itemContainer }}
          style={{
            marginBottom: matchesMD ? "12rem" : undefined,
          }}
        >
          <Grid item align={matchesMD ? "center" : undefined}>
            <Typography variant="h4" gutterBottom>
              Automation
            </Typography>
          </Grid>
          <Grid
            item
            container
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
          >
            <Grid
              item
              style={{ maxWidth: matchesMD ? undefined : "20rem" }}
              align={matchesMD ? "center" : undefined}
            >
              <Typography variant="body1" paragraph>
                Why waste time when you don’t have to?
              </Typography>
              <Typography variant="body1" paragraph>
                We can help you identify processes with time or event based
                actions which can now easily be automated.
              </Typography>
              <Typography variant="body1" paragraph>
                Increasing efficiency increases profits, leaving you more time
                to focus on your business, not busywork
              </Typography>
            </Grid>
            <Grid item lg>
              <Lottie
                options={defaultOptions(automationAnimation)}
                style={{
                  maxHeight: 275,
                  maxWidth: 275,
                  minHeight: 250,
                  marginLeft: matchesMD ? 0 : "1rem",
                  margin: matchesMD ? "0px auto" : 0,
                }}
                isClickToPauseDisabled
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Second */}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          md
          justify={matchesMD ? undefined : "flex-end"}
          alignItems={matchesMD ? "center" : undefined}
          style={{ maxWidth: "40rem", minWidth: matchesMD ? 0 : "37rem" }}
        >
          <Grid item lg align={matchesMD ? "center" : "right"}>
            <Lottie
              options={defaultOptions(uxAnimation)}
              style={{
                maxHeight: 310,
                maxWidth: 155,
                marginRight: matchesMD ? 0 : "1rem",
                margin: matchesMD ? "0px auto" : 0,
              }}
              isClickToPauseDisabled
            />
          </Grid>
          <Grid item>
            <Grid item align={matchesMD ? "center" : "right"}>
              <Typography variant="h2" gutterBottom>
                User Experience Design
              </Typography>
            </Grid>
            <Grid item align={matchesMD ? "center" : "right"}>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{
                  direction: matchesMD ? "ltr" : "rtl",
                  maxWidth: matchesMD ? undefined : "20rem",
                }}
              >
                A good design that isn’t usable isn’t a good design.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{
                  direction: matchesMD ? "ltr" : "rtl",
                  maxWidth: matchesMD ? undefined : "20rem",
                }}
              >
                So why are so many pieces of software complicated, confusing,
                and frustrating?
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchesMD ? "center" : undefined}
                style={{
                  direction: matchesMD ? "ltr" : "rtl",
                  maxWidth: matchesMD ? undefined : "20rem",
                }}
              >
                By prioritizing users and the real ways they interact with
                technology we’re able to develop unique, personable experiences
                that solve problems rather than create new ones.
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

export default CustomSoftware;
