import React from "react";
import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";

import Copyright from "./Copyright";
import { getCategories } from "../lib/categories";
import Logo from "./Logo";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#BDC4E0",
    marginTop: "215px",
    position: "relative",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "-215px",
      left: 0,
      width: "100%",
      height: "215px",
      background: "url('/wave2.svg')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    },
  },
});

const Links = ({ links }) => {
  return (
    <List>
      {links.map(({ name }, index) => (
        <ListItem key={index} disableGutters>
          <Link variant="body1">
            <Typography variant="overline" color="textPrimary">
              {name}
            </Typography>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};
const FooterLinks = () => {
  const categories = getCategories();

  return (
    <Grid container justify="center" alignContent="center" spacing={8}>
      <Grid item>
        <Typography variant="h6">Products</Typography>
        <Links links={categories} />
      </Grid>
      <Grid item>
        <Typography variant="h6">About me</Typography>
        <Links links={[{ name: "Who I am" }]} />
      </Grid>
      <Grid item>
        <Typography variant="h6">Useful links</Typography>
        <Links links={[{ name: "Privacy Policy" }]} />
      </Grid>
    </Grid>
  );
};

export default function Footer({}) {
  const css = useStyles();

  return (
    <Box className={css.container} position="relative">
      <Box
        display={"flex"}
        justifyContent="center"
        position="absolute"
        width={"100%"}
        style={{
          top: -280,
        }}
      >
        <Box borderRadius={"50%"} bgcolor="white" padding={5}>
          <Logo />
        </Box>
      </Box>
      {/* <FooterLinks /> */}
      <Copyright />
    </Box>
  );
}

export async function getStaticProps() {
  const categories = getCategories();
  return {
    props: { categories },
  };
}
