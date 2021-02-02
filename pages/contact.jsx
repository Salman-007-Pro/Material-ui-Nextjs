import React, { useState } from "react";
import Head from "next/head";
import Link from "../src/Link";
import {
  Grid,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogContent,
  Icon,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//components
import ButtonArrow from "../src/ui/ButtonArrow";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: 'url("/assets/background.jpg")',
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "60em",
    paddingBottom: "10em",
    [theme.breakpoints.down("md")]: {
      backgroundImage: 'url("/assets/mobileBackground.jpg")',
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    padding: "0.8rem 2rem",
    backgroundColor: theme.palette.common.orange,
    fontSize: "1.5rem",

    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: "0.7rem",
    height: 35,
    padding: 5,
    marginTop: 5,
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "4em",
    borderRadius: 5,
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,

    padding: "0.5rem 2rem",
    fontSize: "1rem",
    backgroundColor: theme.palette.common.orange,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  rowContainer: {
    paddingLeft: "3em",
    paddingRight: "3em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
  contactContainer: {
    [theme.breakpoints.down("md")]: {
      marginTop: "3rem",
      marginBottom: "10rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "2rem",
      marginBottom: "8rem",
    },
  },
}));
const Contact = ({ setValue, setSelectedIndex }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailHelper, setEmailHelper] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const onChange = (event) => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        const re = /[0-9]+/g;
        if (event.target.value === "" || re.test(event.target.value)) {
          setPhone(event.target.value);
          valid = /^\(?([0-9]{4})\)?[-]?([0-9]{7})/.test(event.target.value);
          if (!valid) {
            setPhoneHelper("Invalid phone");
          } else {
            setPhoneHelper("");
          }
        }
        break;

      default:
        break;
    }
  };
  return (
    <Grid container>
      <Head>
        <title key="title">Contact Us | Arc Development</title>
        <meta
          name="description"
          key="description"
          content="Let us guide you through the custom software design and development process. Send us a message with any of your ideas or questions to get started!"
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Contact Us"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="arc.com/contact" />
        <link
          rel="canonical"
          key="canonical"
          href="https://arc.com/contact.js"
        />
      </Head>
      <Grid
        item
        lg={4}
        xl={3}
        container
        direction="column"
        alignItems="center"
        justify="center"
        classes={{ root: classes.contactContainer }}
      >
        <Grid
          item
          style={{
            maxWidth: "18rem",
            width: "100%",
          }}
        >
          <Grid item align={matchesMD ? "center" : undefined}>
            <Typography variant="h2" style={{ lineHeight: 1 }}>
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              style={{ color: theme.palette.common.blue }}
            >
              We're waiting.
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "2rem" }}>
            <Grid container direction="row" style={{ marginBottom: "0.5rem" }}>
              <Grid item>
                <img
                  src="/assets/phone.svg"
                  alt="phone-icon"
                  style={{
                    verticalAlign: "middle",
                    width: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                />
              </Grid>
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
              >
                <a
                  href="tel:5555555555"
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    fontWeight: "500",
                  }}
                >
                  (555) 555-5555
                </a>
              </Typography>
            </Grid>
            <Grid container direction="row">
              <Grid item>
                <img
                  src="/assets/email.svg"
                  alt="email-icon"
                  style={{
                    verticalAlign: "middle",
                    width: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                />
              </Grid>
              <Typography
                variant="body1"
                style={{
                  color: theme.palette.common.blue,
                  fontSize: "1rem",
                  fontWeight: "500",
                }}
              >
                <a
                  href="mailto:salmanasif36@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  salmanasif36@gmail.com
                </a>
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginTop: "2rem" }}>
            <Grid container direction="column">
              <Grid item style={{ marginBottom: "0.7rem" }}>
                <TextField
                  label="Name"
                  id="name"
                  placeholder="Salman Asif"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.7rem" }}>
                <TextField
                  label="Phone Number"
                  id="phone"
                  placeholder="0332-1318363"
                  fullWidth
                  error={phoneHelper.length !== 0}
                  helperText={phoneHelper}
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.7rem" }}>
                <TextField
                  label="Email"
                  id="email"
                  placeholder="salman@gmail.com"
                  fullWidth
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  value={email}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                InputProps={{ disableUnderline: true }}
                classes={{ root: classes.message }}
                fullWidth
                multiline
                rows={10}
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
          </Grid>

          <Grid item style={{ marginTop: "2rem" }}>
            <Grid container justify="center">
              <Button
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  phoneHelper.length !== 0 ||
                  emailHelper.length !== 0
                }
                classes={{ root: classes.sendButton }}
                onClick={() => setOpen(true)}
                endIcon={
                  <Icon style={{ transform: "rotateZ(-60deg)" }}>send</Icon>
                }
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Dialog
        style={{ zIndex: 1302 }}
        open={open}
        fullScreen={matchesXS}
        onClose={() => setOpen(false)}
        PaperProps={{
          style: {
            paddingTop: matchesXS ? "1em" : "1em",
            paddingBottom: matchesXS ? "1em" : "1em",
            paddingLeft: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "5em"
              : "10em",
            paddingRight: matchesXS
              ? 0
              : matchesSM
              ? 0
              : matchesMD
              ? "5em"
              : "10em",
          },
        }}
      >
        <DialogContent align="center">
          <Grid
            item
            container
            direction="column"
            style={{
              maxWidth: matchesXS ? "25rem" : undefined,
              width: matchesXS ? "100%" : "25rem",
            }}
            align="center"
          >
            <Grid item align={matchesMD ? "center" : undefined}>
              <Typography variant="h2" style={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
            </Grid>
            <Grid item style={{ marginTop: "2rem" }}>
              <Grid
                container
                direction="row"
                style={{ marginBottom: "0.5rem" }}
                justify="center"
              >
                <Grid item>
                  <img
                    src="/assets/phone.svg"
                    alt="phone-icon"
                    style={{
                      verticalAlign: "middle",
                      width: "1.5rem",
                      marginRight: "0.5rem",
                    }}
                  />
                </Grid>
                <Typography
                  variant="body1"
                  style={{ color: theme.palette.common.blue, fontSize: "1rem" }}
                >
                  <a
                    href="tel:5555555555"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                      fontWeight: "500",
                    }}
                  >
                    (555) 555-5555
                  </a>
                </Typography>
              </Grid>
              <Grid container direction="row" justify="center">
                <Grid item>
                  <img
                    src="/assets/email.svg"
                    alt="email-icon"
                    style={{
                      verticalAlign: "middle",
                      width: "1.5rem",
                      marginRight: "0.5rem",
                    }}
                  />
                </Grid>
                <Typography
                  variant="body1"
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: "1rem",
                    fontWeight: "500",
                  }}
                >
                  <a
                    href="mailto:salmanasif36@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    salmanasif36@gmail.com
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "2rem" }}>
              <Grid container direction="column">
                <Grid item style={{ marginBottom: "0.7rem" }}>
                  <TextField
                    label="Name"
                    id="name"
                    placeholder="Salman Asif"
                    fullWidth
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.7rem" }}>
                  <TextField
                    label="Phone Number"
                    id="phone"
                    placeholder="0332-1318363"
                    fullWidth
                    error={phoneHelper.length !== 0}
                    helperText={phoneHelper}
                    value={phone}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item style={{ marginBottom: "0.7rem" }}>
                  <TextField
                    label="Email"
                    id="email"
                    placeholder="salman@gmail.com"
                    fullWidth
                    error={emailHelper.length !== 0}
                    helperText={emailHelper}
                    value={email}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  classes={{ root: classes.message }}
                  fullWidth
                  multiline
                  rows={10}
                  id="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
            </Grid>

            <Grid item style={{ marginTop: "2rem" }}>
              <Grid container justify="space-between">
                <Button
                  style={{ fontWeight: 300 }}
                  color="primary"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                  classes={{ root: classes.sendButton }}
                  onClick={() => setOpen(true)}
                  endIcon={
                    <Icon style={{ transform: "rotateZ(-60deg)" }}>send</Icon>
                  }
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        classes={{ root: classes.rowContainer }}
        alignItems="center"
        justify={matchesMD ? "center" : "space-between"}
        lg={8}
        xl={9}
      >
        <Grid
          item
          style={{
            textAlign: matchesMD ? "center" : "inherit",
          }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h2"
                style={{ fontSize: matchesXS ? "2rem" : undefined }}
              >
                Simple Software.
                <br />
                Revolutionary Results.
              </Typography>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="subtitle2"
                style={{ fontSize: matchesXS ? "1rem" : "1.5rem" }}
              >
                Take advantage of the 21st Century.
              </Typography>
              <Grid container justify={matchesMD ? "center" : undefined} item>
                <Button
                  component={Link}
                  href="/revolution"
                  variant="outlined"
                  className={classes.learnButton}
                  onClick={() => setValue(2)}
                >
                  <span style={{ marginRight: 5 }}>Learn More</span>
                  <ButtonArrow
                    width={10}
                    height={10}
                    fill={theme.palette.common.blue}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            component={Link}
            href="/estimate"
            variant="contained"
            className={classes.estimateButton}
            onClick={() => setValue(5)}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
