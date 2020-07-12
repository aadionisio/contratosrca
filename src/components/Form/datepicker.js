import React, { useEffect, useState, useRef } from "react"; // add the hooks

import { useField } from "@unform/core"; // useField hook
import * as Yup from "yup";

import ReactDatepicker, { registerLocale } from "react-datepicker"; // react datepicker component
import pt from "date-fns/locale/pt";
import "react-datepicker/dist/react-datepicker.css"; // react datepicker css

// import { Container } from './styles';

function DatePicker({ name, label }) {
  registerLocale("pt", pt);
  const ref = useRef(null); // for ref manipulation purposes
  const { fieldName, registerField, defaultValue, error } = useField(name); // the name of the prop in form object is used here
  const [selectedDate, setSelectedDate] = useState(defaultValue); // the state of our datepicker component

  useEffect(() => {
    registerField({
      // here, we're registering the field in the whole form
      name: fieldName,
      ref: ref.current,
      path: "props.selected", // this is the path to selected date in ReactDatepicker (wich is the selected prop)
      clearValue: (pickerRef) => {
        // for reset purposes
        pickerRef.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {/* the label is like label in Unform Input component */}
      {!!label && <label htmlFor="datepicker">{label}</label>}
      <ReactDatepicker
        id="datepicker"
        name={fieldName}
        locale="pt"
        dateFormat="dd/MM/yyyy"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        ref={ref}
      />
      {/* the error is like error in Unform Input component */}
      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </>
  );
}

export default DatePicker;
