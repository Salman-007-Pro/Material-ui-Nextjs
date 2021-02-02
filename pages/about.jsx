import React from "react";
import Head from "next/head";
import {
  Grid,
  Typography,
  useMediaQuery,
  Hidden,
  Avatar,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//components
import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles((theme) => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
  },
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 600,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
  },
  avatar: {
    height: "22em",
    width: "22em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300,
    },
  },
}));
const About = ({ setValue, setSelectedIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid container direction="column">
      <Head>
        <title key="title">About Us - History & Team | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="We provide the fastest, most modern, affordable, and aesthetic software design and development services in the Midwest. Get a free online estimate now!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | About Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/about" />
        <link rel="canonical" key="canonical" href="arc.com/about" />
      </Head>
      <Grid
        item
        classes={{ root: classes.rowContainer }}
        style={{ marginTop: matchesMD ? "1em" : "2em" }}
        align={matchesMD ? "center" : undefined}
      >
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        classes={{ root: classes.rowContainer }}
        align="center"
        style={{ margin: "2rem 0" }}
      >
        <Typography
          variant="h4"
          paragraph
          style={{ maxWidth: "55rem" }}
          classes={{ root: classes.missionStatement }}
        >
          Whether it be person to person, business to consumer, or an individual
          to their interests, technology is meant to bring us closer to what we
          care about in the best way possible. Arc Development will use that
          principle to provide fast, modern, inexpensive, and aesthetic software
          to the Midwest and beyond.
        </Typography>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        classes={{ root: classes.rowContainer }}
        justify="space-around"
        style={{ marginBottom: "15rem" }}
        align={matchesMD ? "center" : undefined}
      >
        <Grid item>
          <Grid item lg>
            <Typography variant="h4" gutterBottom>
              History
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ fontWeight: 700, fontStyle: "italic" }}
            >
              We’re the new kid on the block.
            </Typography>
            <Grid item style={{ maxWidth: "35rem" }}>
              <Typography variant="body1" paragraph>
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography variant="body1" paragraph>
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography variant="body1" paragraph>
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography variant="body1" paragraph>
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid item lg>
            <img
              src="/assets/history.svg"
              alt="history"
              width="100%"
              style={{ maxWidth: "40rem" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item container classes={{ root: classes.rowContainer }}>
        <Grid item container direction="column" alignItems="center">
          <Typography variant="h4" gutterBottom>
            Team
          </Typography>
          <Typography variant="body1" paragraph>
            Muhammad Salman Asif
          </Typography>
          <Typography variant="body1" paragraph>
            I started coding I was 19 year old
          </Typography>
          <Avatar
            src="/assets/founder.png"
            alt="founder"
            classes={{ root: classes.avatar }}
          />
          <Hidden lgUp>
            <Grid
              item
              align="center"
              style={{ maxWidth: "40rem", padding: "1.25rem" }}
            >
              <Typography variant="body1" paragraph>
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" paragraph>
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Hidden>
        </Grid>

        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          justify={matchesMD ? "center" : "space-around"}
        >
          <Grid
            item
            lg
            align="center"
            style={{ marginBottom: matchesMD ? "5rem" : 0 }}
          >
            <img
              src="/assets/yearbook.svg"
              alt="yearbook"
              width="100%"
              style={{ maxWidth: "25rem" }}
            />
            <Typography variant="caption" paragraph>
              a page from my Sophomore yearbook
            </Typography>
          </Grid>
          <Grid item lg>
            <Hidden mdDown>
              <Grid
                item
                align="center"
                style={{ maxWidth: "40rem", padding: "1.25rem" }}
              >
                <Typography variant="body1" paragraph>
                  I taught myself basic coding from a library book in third
                  grade, and ever since then my passion has solely been set on
                  learning — learning about computers, learning mathematics and
                  philosophy, studying design, always just learning.
                </Typography>
                <Typography variant="body1" paragraph>
                  Now I’m ready to apply everything I’ve learned, and to help
                  others with the intuition I have developed.
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
          <Grid
            item
            lg
            align={matchesMD ? "center" : "right"}
            style={{ marginBottom: "10rem" }}
          >
            <img
              src="/assets/puppy.svg"
              alt="puppy"
              width="100%"
              style={{ maxWidth: "25rem" }}
            />
            <Typography variant="caption" paragraph>
              my miniature dapple dachshund, Sterling
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction setValue={setValue} />
      </Grid>
    </Grid>
  );
};

export default About;
