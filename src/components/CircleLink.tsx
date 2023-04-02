import Link from "next/link";
import { makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import PenCircle from "../assets/pen-circle.svg";
import { useRouter } from "next/router";
import React from "react";

const useStyles = makeStyles({
  wrapper: {
    margin: "20px",
    display: "inline-block",
    cursor: "pointer",
    zIndex: 1,
    position: "relative",
    "&:hover": {
      "& > $circle": {
        strokeDasharray: "180px 278px",
        stroke: "#f4c8e4",
        transition: "stroke .25s ease .1s, stroke-dasharray .35s",
      },
    },
  },
  item: {
    position: "relative",
    zIndex: 2,
  },
  active: {
    "& > $circle": {
      stroke: "#F2CEAE",
      strokeDasharray: "180px 278px",
      transition: "stroke .25s ease .1s, stroke-dasharray .35s",
    },
  },
  circle: {
    width: "100px",
    height: "55px",
    position: "absolute",
    zIndex: 0,
    left: "50%",
    top: "-100%",
    transform: "translate(-50%, 7px) translateZ(0)",
    fill: "none",
    stroke: "#f4c8e4",
    strokeLinecap: "round",
    strokeWidth: "2px",
    strokeDasharray: "69px 278px",
    strokeDashoffset: "361px",
    transition: "stroke .25s ease .0s, stroke-dasharray .35s",
  },
});

interface Props {
  as?: keyof JSX.IntrinsicElements;
  path: string;
  children?: any;
  active: boolean;
}

export default function CircleLink(
  { as: Wrapper, path, children, active }: Props = {
    as: "div",
    path: "/",
    active: false,
    children: null,
  }
) {
  const css = useStyles();
  return (
    <Wrapper
      className={clsx(css.wrapper, {
        [css.active]: active,
      })}
    >
      <Link href={path} as={path} passHref>
        <Typography variant="body1" className={css.item}>
          {children}
        </Typography>
      </Link>
      <PenCircle className={css.circle} />
    </Wrapper>
  );
}
