import React from 'react';
import { Container, Button } from '@material-ui/core';
import { ThemeProvider, createMuiTheme} from '@material-ui/core';



function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#9c27b0',
      }
    },
  });

  return (
    <div className="App">
      {/**
       * https://material-ui.com/pt/api/container/
       * https://material-ui.com/pt/components/grid/
       * https://material-ui.com/pt/guides/interoperability/ (styled-component)
       * 
       * https://material-ui.com/pt/customization/theming/ <----
       * https://material-ui.com/pt/customization/default-theme/ <----
       * https://material-ui.com/pt/customization/color/ <---
       */
      }
      <ThemeProvider theme={theme}>
      <Container maxWidth="xl">
      
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
