import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, darken, lighten } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  card: ({ color, action }: any) => ({
    position: "relative",
    transition: "transform 0.3s ease-in-out",
    willChange: "transform",
    margin: "0 auto",
    ...(action ? { cursor: "pointer" } : {}),

    "&:before, &:after": {
      borderRadius: "5px",
      content: "''",
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      transition: "transform 0.3s ease-in-out",
      willChange: "transform",
    },

    "&:before": {
      zIndex: -1,
      backgroundColor: color,
    },

    "&:after": {
      zIndex: -2,
      backgroundColor: darken(color, 0.5),
    },
  }),

  content: ({ color }: any) => ({
    padding: "30px",
    borderRadius: "5px",
    backgroundColor: lighten(color, 0.5),
  }),

  left: ({ density }: any) => ({
    "&:before, &:after": {
      transformOrigin: "right center",
    },
    "&:hover": {
      transform: `translate(-${density}px, 0)`,
      "&:before": { transform: `translate(${density}px, 0) scale(0.95)` },
      "&:after": { transform: `translate(${density * 2}px, 0) scale(0.90)` },
    },
  }),

  right: ({ density }: any) => ({
    "&:before, &:after": {
      transformOrigin: "left center",
    },
    "&:hover": {
      transform: `translate(${density}px, 0)`,
      "&:before": { transform: `translate(-${density}px, 0) scale(0.95)` },
      "&:after": { transform: `translate(-${density * 2}px, 0) scale(0.90)` },
    },
  }),

  up: ({ density }: any) => ({
    "&:before, &:after": {
      transformOrigin: "center bottom",
    },
    "&:hover": {
      transform: `translate(0, -${density}px)`,
      "&:before": { transform: `translate(0, ${density}px) scale(0.95)` },
      "&:after": { transform: `translate(0, ${density * 2}px) scale(0.90)` },
    },
  }),

  down: ({ density }: any) => ({
    "&:before, &:after": {
      transformOrigin: "center top",
    },
    "&:hover": {
      transform: `translate(0, ${density}px)`,
      "&:before": { transform: `translate(0, -${density}px) scale(0.95)` },
      "&:after": { transform: `translate(0, -${density * 2}px) scale(0.90)` },
    },
  }),

  upLeft: ({ density }: any) => ({
    "&:hover": {
      transform: `translate(-${density}px, -${density}px)`,
      "&:before": { transform: `translate(${density}px, ${density}px)` },
      "&:after": { transform: `translate(${density * 2}px, ${density * 2}px)` },
    },
  }),

  upRight: ({ density }: any) => ({
    "&:hover": {
      transform: `translate(${density}px, -${density}px)`,
      "&:before": { transform: `translate(-${density}px, ${density}px)` },
      "&:after": {
        transform: `translate(-${density * 2}px, ${density * 2}px)`,
      },
    },
  }),

  downLeft: ({ density }: any) => ({
    "&:hover": {
      transform: `translate(-${density}px, ${density}px)`,
      "&:before": { transform: `translate(${density}px, -${density}px)` },
      "&:after": {
        transform: `translate(${density * 2}px, -${density * 2}px)`,
      },
    },
  }),

  downRight: ({ density }: any) => ({
    "&:hover": {
      transform: `translate(${density}px, ${density}px)`,
      "&:before": { transform: `translate(-${density}px, -${density}px)` },
      "&:after": {
        transform: `translate(-${density * 2}px, -${density * 2}px)`,
      },
    },
  }),

  fanLeft: ({ density }: any) => ({
    transformOrigin: "center bottom",
    "&:before, &:after": {
      transformOrigin: "center bottom",
    },
    "&:hover": {
      transform: `translate(-${density / 2}px, 0) rotate(-2.5deg)`,
      "&:before": {
        transform: `translate(${density / 2}px, 0) rotate(2.5deg)`,
      },
      "&:after": { transform: `translate(${density}px, 0) rotate(5deg)` },
    },
  }),

  fanRight: ({ density }: any) => ({
    transformOrigin: "center bottom",
    "&:before, &:after": {
      transformOrigin: "50% 100%",
    },
    "&:hover": {
      transform: `translate(${density / 2}px, 0) rotate(2.5deg)`,
      "&:before": {
        transform: `translate(-${density / 2}px, 0) rotate(-2.5deg)`,
      },
      "&:after": { transform: `translate(-${density}px, 0) rotate(-5deg)` },
    },
  }),
});

export enum Variant {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
  UP_LEFT = "upLeft",
  UP_RIGHT = "upRight",
  DOWN_LEFT = "downLeft",
  DOWN_RIGHT = "downRight",
  FAN_LEFT = "fanLeft",
  FAN_RIGHT = "fanRight",
}

export default function CardStack({
  children,
  classNames,
  color = "#d49fa5",
  density = 10,
  variant = Variant.LEFT,
  action,
}: {
  variant?: Variant;
  children: any;
  color?: string;
  density?: number;
  classNames?: any;
  action?: any;
}) {
  const css = useStyles({ color, density, action });

  const classes = clsx(css.card, classNames, {
    [css.left]: variant === Variant.LEFT,
    [css.right]: variant === Variant.RIGHT,
    [css.up]: variant === Variant.UP,
    [css.down]: variant === Variant.DOWN,
    [css.upLeft]: variant === Variant.UP_LEFT,
    [css.upRight]: variant === Variant.UP_RIGHT,
    [css.downLeft]: variant === Variant.DOWN_LEFT,
    [css.downRight]: variant === Variant.DOWN_RIGHT,
    [css.fanLeft]: variant === Variant.FAN_LEFT,
    [css.fanRight]: variant === Variant.FAN_RIGHT,
  });

  return (
    <Box className={classes} boxShadow={2} onClick={action}>
      <Box className={css.content}>{children}</Box>
    </Box>
  );
}
