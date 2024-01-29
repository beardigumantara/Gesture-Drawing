import useTimer from "../hooks/useTimer";
import useModel from "../hooks/useModel";
import { useState } from "react";

const ReadyScreen = () => {
  const {
    modelLeft,
    theme,
    model,
    setModelLeft,
    getTheme,
    getModel,
    chooseTheme,
    resetTheme,
    provideThemes,
  } = useModel();

  const [value, setValue] = useState(10);
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleChangeValue = (e) => {
    setValue(e.target.value);
  };

  const handleChangeTheme = (e) => {
    setSelectedTheme(e.target.value);
    console.log("selected theme", selectedTheme);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModelLeft(parseInt(value, 10));
    chooseTheme(selectedTheme);
    getTheme();
    getModel();
    console.log("model left", modelLeft);
    console.log("tema", theme);
    console.log("model", model);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Number of Moderls:
          <input type="number" value={value} onChange={handleChangeValue} />
        </label>
      </div>
      <div>
        <label>Choose Theme :</label>
        {provideThemes.map((themeOption) => (
          <label key={themeOption}>
            {themeOption}
            <input
              type="radio"
              name="theme"
              value={themeOption}
              onChecked={selectedTheme === themeOption}
              onChange={handleChangeTheme}
            />
          </label>
        ))}
      </div>
      <div>
        <button type="submit">Apply</button>
      </div>
    </form>
  );
};
export default ReadyScreen;
