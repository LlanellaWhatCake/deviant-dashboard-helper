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
        main: "#8d939c"
      },
      textMain: {
          light: "#d2d2d2",
          main: "#3c4248"
      },
      backgroundSecondary: {
        main: "#282c30"
      },
      card: {
        main: "linear-gradient(#353a40, #3f444b)"
      }
    },
    spaceBackground: {
      src: "/Assets/dashboard_background_test.png"
    },
    dashboardIconSize: {
      size: 100
    }
  });

  export default theme;