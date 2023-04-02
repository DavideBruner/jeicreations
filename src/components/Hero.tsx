import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Image from "next/image";
import { FontFamily } from "../theme/typography";

import { SocialList } from "./SocialList";

const useStyles = makeStyles({
  container: {
    backgroundColor: "#fffdf7",
    padding: "50px",
    borderBottomLeftRadius: "50% 30%",
    borderBottomRightRadius: "50% 30%",
    height: "400px",
    position: "relative",
  },
  image: {},
  text: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // fontFamily: FontFamily.DANCING,
  },
});

const Hero = ({ img, ...props }) => {
  const css = useStyles();
  return (
    <Box
      className={css.container}
      justifyContent="center"
      textAlign="center"
      display="flex"
    >
      {/* <Image
        src={img}
        alt="Logo"
        // objectPosition="center"
        // layout="fill"
        width={100}
        height={100}
        // width={"100%"}
        // height={"100%"}
        // {...props}
      /> */}
      <Typography variant="h1" className={css.text}>
        Jei Creations
      </Typography>
      {/* <SocialList /> */}
    </Box>
  );
};

Hero.defaultProps = {
  img: "/LogoIllustration.png",
};

export default Hero;
