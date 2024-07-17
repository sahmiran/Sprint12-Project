import { useDispatch, useSelector } from "react-redux";
import "./Switch.css";
import { useTheme } from "../context/useTheme";

export default function Switch() {
  const dispatch = useDispatch();

  const { toggleLanguage } = useTheme();

  const changeHandler = () => {
    toggleLanguage();
  };
  return (
    <>
      <label className="switch" defaultChecked>
        <input type="checkbox" onChange={changeHandler} checked={!mode} />
        <span className="slider"></span>
      </label>
    </>
  );
}
