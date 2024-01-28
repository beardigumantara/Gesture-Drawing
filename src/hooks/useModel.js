import { useState, useEffect } from "react";
import { shuffle } from "../lib/util";
import dataImages from "../lib/imageData";

let currentIndex = {
  male : -1,
  female : -1,
}

let model = [];
let theme;

const shuffleDataImages  = {
  male : shuffle(dataImages.male),
  female : shuffle(dataImages.female),
}

const useModel = () => {
  const [currentModel, setCurrentModel] = useState();
  const [modelLeft, setModelLeft] = useState(10);

  const hasModel = modelLeft > 0;
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

  const modelNext = () => {
    currentIndex[theme] += 1;
    setCurrentModel(model[currentIndex[theme]]);
    setModelLeft(modelLeft - 1);
  }

  const getModel = () => {
    model = shuffleDataImages[theme];
  };

  const modelIsEmpty = currentIndex[theme] === model.length - 1;
  useEffect(() => {
    if (modelIsEmpty) {
      currentIndex[theme] = -1;
      shuffleDataImages[theme] = shuffle(dataImages[theme]);
    }
  }, [modelIsEmpty]);

  return {
    currentModel,
    modelNext,
    getTheme,
    getModel,
    currentIndex,
    modelLeft,
    theme,
    setModelLeft,
    hasModel,
    provideThemes,
    res,
    chooseTheme,
    resetTheme,
  }
};

export default useModel;