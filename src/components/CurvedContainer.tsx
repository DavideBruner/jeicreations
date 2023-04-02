import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

import CurvedUp from "../assets/curved-up.svg";
import CurvedDown from "../assets/curved-down.svg";

const useStyles = makeStyles((theme) => ({
  container: ({ color, variant, gradient }: any) => ({
    position: "relative",
    ...(!gradient
      ? { backgroundColor: color }
      : { backgroundImage: `linear-gradient(to bottom, ${color}, #FFF)` }),
  }),
  title: ({ color }: any) => ({
    color: theme.palette.getContrastText(color),
    paddingBottom: theme.spacing(2),
  }),
}));

export default function Curvedcontainer({
  color,
  title,
  children,
  variant = "up",
  gradient,
}) {
  const css = useStyles({ color, variant, gradient });

  return (
    <Box position="relative" p={0}>
      {variant == "up" && (
        <CurvedUp fill={color} style={{ display: "block" }} />
      )}
      {variant == "down" && (
        <CurvedDown
          fill={color}
          style={{ display: "block", position: "absolute", top: "-58px" }}
        />
      )}
      <Box key={title} p={3} paddingBottom={8} className={css.container}>
        {title && (
          <Typography variant="h3" className={css.title}>
            {title}
          </Typography>
        )}
        {children}
      </Box>
    </Box>
  );
}
