import { useState } from "react";

export const useInputFields = () => {
  const [inputValues, setInputValue] = useState({
    input1: "",
    input2: "",
    input3: "",
  });
  const [newInput, setNewInput] = useState({
    inputs: [
      {
        name: "first",
        autoFocus: true,
        type: "text",
        value: "1",
      },
      {
        name: "second",
        autoFocus: false,
        type: "text",
        value: "2",
      },
    ],
  });
  const [showInput, setShowInput] = useState(false);
  return {
    handleChange: (e) => {
      const { maxLength, value, name } = e.target;
      const [fieldName, fieldIndex] = name.split("-");

      if (value.length >= maxLength - 1) {
        setShowInput(true);
        newInput.inputs.map((input, index) => (
          <input
            key={index}
            type={input.type}
            value={input.value}
            name={input.name}
            autoFocus={input.autoFocus}
            // onChange={handleChange}
          />
        ));
        // Check if it's not the last input field
        if (parseInt(fieldIndex, 10) < 3) {
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
    showInput,
  };
};
