import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "./context/useTheme";
import { LanguageProvider } from "./context/useLanguage";

function App() {
  useEffect(() => {
    toast("Sayfama Hoşgeldin !!");
  }, []);
  return (
    <>
      <LanguageProvider>
        <ThemeProvider>
          <HomeScreen></HomeScreen>
          <ToastContainer></ToastContainer>
        </ThemeProvider>
      </LanguageProvider>
    </>
  );
}

export default App;
