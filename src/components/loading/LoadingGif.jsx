import { Suspense } from "react";
import { Grid } from "@mui/material";

const LoadingGif = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <Grid container justify="center" alignItems="center" height="100vh" width="100vw">
          <Grid item>
            <img src="https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-10.gif" alt="page loading" />
          </Grid>
        </Grid>
      }
    >
      <Component {...props} />
    </Suspense>
  );
};
export default LoadingGif