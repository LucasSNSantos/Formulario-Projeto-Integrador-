import React from 'react';
import './CSS/styles.css'
import { Box, Button, Container, Grid, Avatar } from '@material-ui/core';

function App() {
  return (
    <body>
      <div className="container">
        <div className="box">
          <form className="form">
            <legend>
              Esta é a ferramenta de GAP Análise, com base na Metodologia Killchain
            </legend>

            <Button variant="contained" size="large">
              Vamos Lá!
            </Button>
          </form>


          <div>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Avatar
                  alt="Lucas Souza"
                  src="/Images/lucas.jfif"
                />
              </Grid>
              <Grid item xs={3}>
                <Avatar
                  alt="Caique Augusto"
                  src="/Images/lucas.jfif"
                />
              </Grid>
              <Grid item xs={3}>
                <Avatar
                  alt="Miguel Falcão"
                  src="/Images/lucas.jfif"
                />
              </Grid>
              <Grid item xs={3}>
                <Avatar
                  alt="Marcos Aurelio"
                  src="/Images/lucas.jfif"
                />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
