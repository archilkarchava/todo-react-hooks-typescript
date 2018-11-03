import React, { useState } from "react";

const useInputValue = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: (e: React.FormEvent<HTMLInputElement>) =>
      setValue(e.currentTarget.value),
    resetValue: () => setValue("")
  };
};

const Form = ({ onSubmit }: any) => {
  const { resetValue, ...text } = useInputValue("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input type="text" {...text} />
    </form>
  );
};

export default Form;
