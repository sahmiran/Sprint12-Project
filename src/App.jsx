import { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  useEffect(() => {
    toast("Sayfama Hoşgeldin !!");
  }, []);
  return (
    <>
      <HomeScreen></HomeScreen>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
