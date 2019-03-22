import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: amber,
  },
});

export default function UXPinWrapper({children}) {
    let roboto = document.createElement('link');
    roboto.setAttribute('rel', 'stylesheet');
    roboto.setAttribute('href', 'https://fonts.googleapis.com/css?family=Roboto:300,400,500');

    let icons = document.createElement('link');
    icons.setAttribute('rel', 'stylesheet');
    icons.setAttribute('href', 'https://fonts.googleapis.com/icon?family=Material+Icons');

    return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}