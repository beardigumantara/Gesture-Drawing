import { useState, useEffect } from "react";
import { shuffle } from "../lib/util";
import dataImages from "../lib/imageData";

let currentIndex = {
  male : -1,
  female : -1,
}

let gesture = [];
let theme;

const shuffleDataImages  = {
  male : shuffle(dataImages.male),
  female : shuffle(dataImages.female),
}

const useGesture = () => {
  const [currentGesture, setCurrentGesture] = useState();
  const [gestureleft, setGestureleft] = useState(10);

  const hasGesture = gestureleft > 0;
  const hasTheme = theme !== undefined;

  const provideThemes = Object.keys(shuffleDataImages);

  const getTheme = () => {
    const pickOneRandomly = (Array) => 
      Array[Math.floor(Math.random() * Array.length)];
    theme = pickOneRandomly(provideThemes);
  };

  let res;
  const chooseTheme = (input) => {
    if (hasTheme) {
      return;
    }
    res = provideThemes.find((theme) => theme === input);
    if (input === res) {
      theme = input;
      console.log('setting theme', theme);
    }
  };

  const resetTheme = () => {
    theme = undefined;
    console.log('resetting theme', theme);
  };

  const gestureNext = () => {
    currentIndex[theme] += 1;
    setCurrentGesture(gesture[currentIndex[theme]]);
    setGestureleft(gestureleft - 1);
  }

  const getGesture = () => {
    gesture = shuffleDataImages[theme];
  };

  const gestureIsEmpty = currentIndex[theme] === gesture.length - 1;
  useEffect(() => {
    if (gestureIsEmpty) {
      currentIndex[theme] = -1;
      shuffleDataImages[theme] = shuffle(dataImages[theme]);
    }
  }, [gestureIsEmpty]);

  return {
    currentGesture,
    gestureNext,
    getTheme,
    getGesture,
    currentIndex,
    gestureleft,
    theme,
    setGestureleft,
    hasGesture,
    provideThemes,
    res,
    chooseTheme,
    resetTheme,
  }
};