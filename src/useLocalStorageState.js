import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  // Initialziang state using callback function, only callback function can initialize states not a direct function call
  const [value, setValue] = useState(function () {
    const watchedMovies = localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key))
      : initialState;
    return watchedMovies;
  });

  console.log(localStorage.getItem(key));
  useEffect(
    function () {
      localStorage.setItem("value", JSON.stringify(value));
    },
    [value]
  );

  return [value, setValue];
}
