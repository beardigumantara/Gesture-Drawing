/**
 * Shuffle array content
 *
 * @param {array} array - Array to be shuffled
 * @returns {array}
 * @example Shuffle ['a, 'b', 'c'] to ['b', 'c', 'a']
 */

export const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex; // While there remain elements to shuffle...

  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const GESTURE_STATES = {
  EMPTY: "empty",
  REGISTER: "register",
  READY: "ready",
  MATCH: "match",
  ENDING: "ending",
  // ... (tambahkan state lainnya jika diperlukan)
};