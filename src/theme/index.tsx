import { createMuiTheme } from '@material-ui/core/styles';

import palette from './palette';
import typography from './typography';

const theme = createMuiTheme({
  palette,
  typography,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        'html, body': {
          backgroundColor: '#FFF',
        },
      },
    },
  },
});

export default theme;