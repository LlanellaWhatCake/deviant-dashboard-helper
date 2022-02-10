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

  export default darkTheme;