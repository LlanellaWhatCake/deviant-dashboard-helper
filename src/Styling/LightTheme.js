import { createTheme } from '@material-ui/core/styles';

const lightTheme = createTheme({
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
          light: "#434950",
          main: "#3c4248"
      },
      backgroundSecondary: {
        main: "#9ba8b5"
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
    },
    fontGeneralSize: {
      size: 20
    }
  });

  export default lightTheme;