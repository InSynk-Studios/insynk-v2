import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/Elements";

const useDynamicInputs = (maxInputs, maxLength) => {
  const [inputs, setInputs] = useState([""]);
  const inputRefs = useRef([]);

  // Add a new input field when the last one is filled
  useEffect(() => {
    const lastInput = inputs[inputs.length - 1];
    if (lastInput.length === maxLength && inputs.length < maxInputs) {
      setInputs((prevInputs) => [...prevInputs, ""]);
    }
  }, [inputs, maxLength, maxInputs]);

  // Transfer focus to the next input field when the maxLength is hit
  const handleInputChange = (index, event) => {
    const { value } = event.target;
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index] = value;
      // if (value.length === maxLength && index < maxInputs - 1) {
      //   inputRefs.current[index + 1].focus();
      // }
      return newInputs;
    });
  };

  // Set up refs for all input fields
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputs.length);
    inputRefs.current.forEach((ref, index) => {
      inputRefs.current[index] = ref || React.createRef();
    });
  }, [inputs]);

  const renderedInputs = inputs.map((input, index) => (
    <Input
      key={index}
      ref={inputRefs.current[index]}
      value={input}
      onChange={(event) => handleInputChange(index, event)}
      border="dashed"
      size="full"
      wrapperClassName="w-full"
      type="text"
      className="bg-transparent h-7 p-0"
      placeholder="About what you’re building in brief"
      // error={formState.errors["description1"]}
      // registration={register("description1")}
    />
  ));

  return renderedInputs;
};

export default useDynamicInputs;
