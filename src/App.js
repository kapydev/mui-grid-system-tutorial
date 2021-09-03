import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} style={{ backgroundColor: "red", fontSize: 40 }}>
        red
      </Grid>
      <Grid item xs={12} sm={4} style={{ backgroundColor: "yellow" }}>
        yellow
      </Grid>
      <Grid item xs={12} sm={2} style={{ backgroundColor: "blue" }}>
        blue
      </Grid>
    </Grid>
  );
}

export default App;
