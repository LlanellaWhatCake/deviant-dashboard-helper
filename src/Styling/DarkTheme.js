import { createTheme } from '@material-ui/core/styles';

const darkTheme = createTheme({
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
      backgroundSecondary: {
        main: "#282c30"
      },
      card: {
        main: "linear-gradient(#353a40, #3f444b)"
      },
      backgroundThird: {
        main: "#353a40"
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

  export default darkTheme;