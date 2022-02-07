import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: "#00c787",
        dark: "#01a570"
      },
      secondary: {
        main: "#505459",
        dark: "#353a40"
      },
      backgroundMain: {
        main: "#1e2125"
      },
      textMain: {
          light: "#d2d2d2",
          main: "#949494"
      },
    },
    spaceBackground: {
      src: "/Assets/dashboard_background_test.png"
    }
  });

  export default theme;