import React from "react";
import { ChangeEventHandler } from "react";

interface InputWithLabelProps {
  label_name: string;
  input_type: string;
  input_name: string;
  input_id: string;
  input_placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export default function InputWithLabel(props: InputWithLabelProps) {
  return (
    <div className="relative mt-4">
      <label
        htmlFor={props.input_id}
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {props.label_name}
      </label>
      <input
        type={props.input_type}
        name={props.input_name}
        id={props.input_id}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder={props.input_placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
