import { useState } from "react";

export const useInputFields = () => {
  const [inputValues, setInputValue] = useState({
    input1: "",
    input2: "",
    input3: "",
  });
  const [showInput, setShowInput] = useState(false);
  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      if (value.length >= maxLength) {
        setShowInput(true);
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 2) {
          // Get the next input field
          const nextSibling = document.querySelector(
            `input[name=input-${parseInt(fieldIndex, 10) + 1}]`
          );

          // If found, focus the next field
          if (nextSibling !== null) {
            nextSibling.focus();
          }
        }
      }

      setInputValue({
        ...value,
        [`input${fieldIndex}`]: value,
      });
    },
  };
};
