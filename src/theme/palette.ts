
import { fade } from '@material-ui/core/styles/colorManipulator';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { pink, yellow, red, blue, white, black, grey, green } from './colors';

const palette: PaletteOptions = {
  primary: {
    main: pink[500],
    light: pink[300],
    dark: pink[600],
  },
  secondary: {
    main: grey[800],
    light: grey[200],
    dark: grey[900],
  },
  error: {
    main: red[500],
    dark: red[600],
    light: red[100],
  },
  warning: {
    main: yellow[500],
    dark: yellow[600],
    light: yellow[200],
  },
  success: {
    main: green[500],
    dark: green[600],
    light: green[100],
  },
  info: {
    main: blue[500],
    dark: blue[600],
    light: blue[100],
  },
  text: {
    primary: grey[800],
    secondary: grey[700],
    disabled: fade(grey[800], 0.44),
    hint: fade(grey[800], 0.44),
  },
  common: {
    black: black,
    white: white,
  },
  grey,
  background: {
    paper: white,
    default: white,
  }
}

export default palette;