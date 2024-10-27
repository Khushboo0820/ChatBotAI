import {useState ,useeffect,useMemo} from "react";
import './App.css';
//import Sidebar from "./components/Sidebar/Sidebar";
//import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";
//import Input from "./components/Input";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("theme") || "light");
  const [chat, setChat] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  // //create theme
  // const theme = React.useMemo(() => createTheme(getThemePallete(mode)), [mode]);

  // //save theme mode in localstorage
  // useEffect(() => {
  //   localStorage.setItem("theme", mode);
  // }, [mode]);

  return (
    // <ThemeContext.Provider value={{ mode: mode, setMode: setMode }}>
    //   <ThemeProvider theme={theme}>
    //     <CssBaseline />

        <Grid
          container
          sx={{
            background:
              "linear-gradient(rgba(215, 199, 244, 0.2), rgba(151, 133, 186, 0.2))",
          }}
        >
          <Grid
            item
            xs={12}
            md={2.5}
            sx={{
              bgcolor: "primary.light",
              "@media (max-width:800px)": {
                width: "70%",
                transform: menuOpen ? "translateX(0)" : "translateX(-100%)",
                transition: "transform 400ms ease",
              },
            }}
            position={{ xs: "fixed", md: "relative" }}
            height={"100vh"}
            zIndex={{ xs: 9999, md: 1 }}
            boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}
          >
            {/* <Sidebar setChat={setChat} closeMenu={() => setMenuOpen(false)} /> */}
          </Grid>
          <Grid item xs={12} md={9.5}>
            {/* <Outlet
              context={{
                chat: chat,
                setChat: setChat,
                handleMobileMenu: setMenuOpen,
              }}
            /> */}
          </Grid>
        </Grid>
    //   </ThemeProvider>
    // </ThemeContext.Provider>
  );
}

export default App;