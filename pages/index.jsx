import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import {
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import ServiceCard from "../src/ServiceCard/ServiceCard";
import Lottie from "react-lottie";

//components
import CallToAction from "../src/ui/CallToAction";

//icon
import ButtonArrow from "../src/ui/ButtonArrow";

//animation
import animationData from "../src/animations/landinganimation/data";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    height: 45,
    width: 145,
    fontSize: "0.9rem",
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      "& svg": {
        fill: "white",
      },
    },
  },
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
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1rem",
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
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
  serviceContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
      marginTop: "5em",
    },
  },
  revolutionContainer: {
    backgroundImage: `url("/assets/repeatingBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  revolutionCard: {
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: "8em 0",
      borderRadius: 0,
      width: "100%",
    },
  },
  informationContainer: {
    backgroundImage: `url("/assets/infoBackground.svg")`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
}));
const LandingPage = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const selectedHandle = (val) => {
    setValue(1);
    setSelectedIndex(val);
  };

  const serviceCard = [
    {
      title: "Custom Software Development",
      subTitle1: "Save Energy. Save Time. Save Money.",
      subTitle2: () => (
        <>
          Complete digital solutions, from investigation to{" "}
          <span className={classes.specialText}>Celebration</span>
        </>
      ),
      link: "/customsoftware",
      onClick: () => selectedHandle(1),
      pic: {
        src: "/assets/customSoftwareIcon.svg",
        alt: "Custom Software Icon",
      },
    },
    {
      title: "IOS/Android App Development",
      subTitle1: "Extend Functionality. Extend Access. Increase Engagement.",

      subTitle2: () => (
        <>
          Integrate your web experience or create a standalone app{" "}
          {matchesXS ? null : <br />}
          with either mobile platform.
        </>
      ),
      link: "/mobileapps",
      onClick: () => selectedHandle(2),
      pic: {
        src: "/assets/mobileIcon.svg",
        alt: "Mobile App Icon",
      },
      right: true,
    },
    {
      title: "Website Development",
      subTitle1: "Reach More. Discover More. Sell more.",
      subTitle2: () => <>Optimized for Search Engines, built for speed.</>,
      link: "/websites",
      onClick: () => selectedHandle(3),
      pic: {
        src: "/assets/websiteIcon.svg",
        alt: "Websites Icon",
      },
    },
  ];
  return (
    <Grid
      container
      direction="column"
      classes={{ root: classes.mainContainer }}
    >
      <Head>
        <title key="title">
          Custom Software, Mobile Apps, and Websites | Arc Development
        </title>
        <meta
          name="description"
          key="description"
          content="Pristine software custom-designed from the ground up with cutting-edge optimizations. Use our free estimate calculator to check your project cost!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Arc Development"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com" />
        <link rel="canonical" key="canonical" href="arc.com" />
      </Head>
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid sm item className={classes.heroTextContainer}>
            <Typography variant="h2" align="center">
              Bringing West Coast Technology
              <br />
              to the Midwest
            </Typography>
            <Grid
              container
              justify="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button
                  component={Link}
                  href="/estimate"
                  className={classes.estimateButton}
                  variant="contained"
                  onClick={() => setValue(5)}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  href="/revolution"
                  onClick={() => setValue(2)}
                  className={classes.learnButtonHero}
                  variant="outlined"
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm lg={7} item className={classes.animation}>
            <Lottie
              options={defaultOptions}
              width="100%"
              height="100%"
              isClickToPauseDisabled
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Service Section */}
      {serviceCard.map((el, index) => (
        <Grid item key={index}>
          <div className={classes.serviceContainer}>
            <ServiceCard
              title={el.title}
              subTitle1={el.subTitle1}
              subTitle2={el.subTitle2}
              link={el.link}
              onClick={el.onClick}
              pic={el.pic}
              right={el.right}
            />
          </div>
        </Grid>
      ))}
      {/* revolution section */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify="center"
          style={{ height: "100rem", marginTop: "12rem" }}
          classes={{ root: classes.revolutionContainer }}
        >
          <Card classes={{ root: classes.revolutionCard }}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography variant="h3" gutterBottom>
                The Revolution
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Visionary insights coupled with cutting-edge technology is a
                recipe for revolution.
              </Typography>

              <Button
                variant="outlined"
                classes={{ root: classes.learnButtonHero }}
                component={Link}
                href="/revolution"
                onClick={() => setValue(2)}
              >
                <span style={{ marginRight: 10 }}>Learn more</span>
                <ButtonArrow
                  fill={theme.palette.common.blue}
                  width={15}
                  height={15}
                />
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* information section */}
      <Grid item>
        <Grid
          container
          alignItems="center"
          justify={matchesXS ? "center" : "space-between"}
          direction={matchesXS ? "column" : "row"}
          style={{ height: "80rem" }}
          classes={{ root: classes.informationContainer }}
        >
          <Grid
            item
            style={{
              marginLeft: matchesXS ? 0 : "5em",
              marginBottom: matchesXS ? "10em" : 0,
              textAlign: matchesXS ? "center" : "inherit",
            }}
          >
            <Typography variant="h2" style={{ color: "white" }}>
              About Us
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: "5px" }}>
              Let's get personal.
            </Typography>
            <Button
              component={Link}
              href="/about"
              onClick={() => setValue(3)}
              variant="outlined"
              classes={{
                root: `${classes.learnMore} ${classes.specialLearnMore}`,
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
              textAlign: matchesXS ? "center" : "right",
              marginRight: matchesXS ? 0 : "5em",
            }}
          >
            <Typography variant="h2" style={{ color: "white" }}>
              Contact Us
            </Typography>
            <Typography variant="subtitle2" style={{ marginBottom: "5px" }}>
              Say Hello. 👋🏻
            </Typography>
            <Button
              component={Link}
              href="/contact"
              onClick={() => setValue(4)}
              variant="outlined"
              classes={{
                root: `${classes.learnMore} ${classes.specialLearnMore}`,
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
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
