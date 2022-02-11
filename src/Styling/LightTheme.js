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
        main: "#fff"
      },
      textMain: {
          light: "#434950",
          main: "#3c4248"
      },
      backgroundSecondary: {
        main: "#e0e3e7"
      },
      card: {
        main: "linear-gradient(#c6cace, #bbbfc3)"
      }
    },
    spaceBackground: {
      src: "/Assets/dashboard_background_test.png"
    },
    dashboardIconSize: {
      size: 100
    },
    fontSize: {
      medium: 20,
      small: 15,
      large: 25,
      extraLarge: 30
    }
  });

  export default lightTheme;