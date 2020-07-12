import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";
// import { Container } from './styles';

function Input({ name, label, maxlength = 10, placeholder, ...rest }) {
  // criando um apontamento ao input.
  const inputRef = useRef(null);

  // useField faz a conexão do meu input com o Unform

  const { fieldName, registerField, defaultValue, error } = useField(name);
  // disparando a função registerField para registrar o uso do campo pelo formulario

  useEffect(() => {
    registerField({
      name: fieldName,
      // passo a referencia do campo que será registrado.
      ref: inputRef.current,
      // path contem o nome do campo denrto da referencia que contem o conteudo do campo
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input
        ref={inputRef}
        id={fieldName}
        defaultValue={defaultValue}
        maxLength={maxlength}
        isErrored={!!error}
        {...rest}
      />

      {error && <span style={{ color: "#f00" }}>{error}</span>}
    </>
  );
}

export default Input;
