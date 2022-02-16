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
      },
      backgroundThird: {
        main: "#f0f0f0"
      }
    },
    spaceBackground: {
      src: "/Assets/dashboard_background_test.png"
    },
    dashboardIconSize: {
      size: 100
    },
    fontSize: {
      medium: 15,
      small: 10,
      large: 20,
      extraLarge: 25
    }
  });

  export default lightTheme;