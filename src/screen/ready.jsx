import useTimer from "../hooks/useTimer";
import useModel from "../hooks/useModel";
import { useState } from "react";

const ReadyScreen =() => {
 const{
  modelLeft,
  theme,
  model,
  setModelLeft,
  getTheme,
  getModel,
  chooseTheme,
  resetTheme,
 } = useModel();

 const [value, setValue] = useState(10);

 const handleChangeValue = (e) => {
  setValue(e.target.value);
 }

 const handleChangeTheme = (e) => {
  chooseTheme(e.target.value);
 }

 const handleSubmit = () => {
  setModelLeft(parseInt(value, 10));
  getTheme();
  getModel();
  console.log('model left',modelLeft);
  console.log('tema',theme);
  console.log('model',model);
 }
 console.log('1model left',modelLeft);
 console.log('2tema',theme);
 console.log('3model',model);
 return (
  <div>
    <label>
    Number of Moderls:
    <input type="number" value={value} onChange={handleChangeValue} />
    </label>
    <br />
    <label htmlFor="">Theme :
      <label htmlFor="">Male
      <input type="radio" name="theme" value="male" onChecked={theme === "male"} onChange={handleChangeTheme} />  
      </label>
      <label htmlFor="">Female
      <input type="radio" name="theme" value="female" onChecked={theme === "female"} onChange={handleChangeTheme} />
      </label>
    </label>
    <br />
    <button onClick={handleSubmit}> Apply</button>
  </div>
 )
}
export default ReadyScreen;