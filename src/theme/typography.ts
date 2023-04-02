import { TypographyOptions } from "@material-ui/core/styles/createTypography";
import { pxToRem } from "./utilities";

export enum FontWeight {
  LIGHT = 300,
  REGULAR = 400,
  MEDIUM = 500,
  BOLD = 600,
}

export enum FontFamily {
  SEVILLANA = '"Sevillana"',
  SHADOWS_INTO_LIGHT = '"Shadows Into Light"',
  RUBIK = '"Rubik"',
  DANCING = '"Dancing Script"',
}

const typography: TypographyOptions = {
  fontFamily: FontFamily.RUBIK,
  fontSize: 14,
  htmlFontSize: 16,
  h1: {
    fontWeight: FontWeight.BOLD,
    fontFamily: FontFamily.DANCING,
    fontSize: pxToRem(120),
    lineHeight: pxToRem(120),
  },
  h2: {
    fontWeight: FontWeight.BOLD,
    fontFamily: FontFamily.DANCING,
    fontSize: pxToRem(60),
    lineHeight: pxToRem(60),
  },
  h3: {
    fontWeight: FontWeight.BOLD,
    fontFamily: FontFamily.SHADOWS_INTO_LIGHT,
    letterSpacing: 0.7,
    fontSize: pxToRem(40),
    lineHeight: pxToRem(32),
  },
  h4: {
    fontWeight: FontWeight.REGULAR,
    fontFamily: FontFamily.RUBIK,
    letterSpacing: 0.6,
    fontSize: pxToRem(24),
    lineHeight: pxToRem(28),
  },
  h5: {
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.RUBIK,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(20),
  },
  h6: {
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.RUBIK,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  subtitle1: {
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.RUBIK,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(20),
  },
  subtitle2: {
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.RUBIK,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  body1: {
    fontWeight: FontWeight.LIGHT,
    fontFamily: FontFamily.RUBIK,
    fontSize: pxToRem(20),
    lineHeight: pxToRem(24),
  },
  body2: {
    fontWeight: FontWeight.LIGHT,
    fontFamily: FontFamily.RUBIK,
    fontSize: pxToRem(16),
    lineHeight: pxToRem(20),
  },
  button: {
    fontWeight: FontWeight.MEDIUM,
    fontFamily: FontFamily.RUBIK,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(20),
  },
  caption: {
    fontWeight: FontWeight.LIGHT,
    fontFamily: FontFamily.SHADOWS_INTO_LIGHT,
    fontSize: pxToRem(14),
    lineHeight: pxToRem(16),
  },
  overline: {
    fontWeight: FontWeight.LIGHT,
    fontFamily: FontFamily.SHADOWS_INTO_LIGHT,
    fontSize: pxToRem(25),
    lineHeight: pxToRem(25),
  },
  fontWeightLight: FontWeight.LIGHT,
  fontWeightRegular: FontWeight.REGULAR,
  fontWeightMedium: FontWeight.MEDIUM,
  fontWeightBold: FontWeight.BOLD,
};

export default typography;
