import React, { Component, useState, useCallback, useRef } from "react";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";
import * as Yup from "yup";
import getValidationErrors from "../../../utils/getValidationErrors";
import {
  FaGithubAlt,
  FaUserAlt,
  FaSpinner,
  FaArrowCircleLeft,
  FaSearch,
} from "react-icons/fa";

import { Container, SubmitButton, Title, List } from "./styles";

import Input from "../../../components/Form/input";
import Datepicker from "../../../components/Form/datepicker";

import { Link } from "react-router-dom";

function Edit(props) {
  const dataRca = props.location.state;

  console.log(props);
  console.log(dataRca);

  const formRef = useRef(null);

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required("Nome Obrigatório"),
        endereco: Yup.string().required("Endereço Obrigatório"),
        cidade: Yup.string().required("Cidade Obrigatória"),
        firma: Yup.string().required("Nome da Empresa Obrigatorio"),
        cnpj: Yup.string()
          .required("Cnpj Obrigatorio")
          .max(14, "Cnpj deve ter no maximo 14 digitos!"),

        cpf: Yup.string()
          .required("Cpf Obrigatorio")
          .max(11, "Cpf deve ter no maximo 11 digitos!"),

        ci: Yup.string().required("Nº da Identidade Obrigatório"),

        praca1: Yup.string().required(
          "Nomes das Praças atendidas são obrigatorias"
        ),
        praca2: Yup.string(),
        dtinicio: Yup.date().required("Data da admissão e obrigatória"),
        dtfim: Yup.date(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (error) {
      const errors = getValidationErrors(error);

      formRef.current.setErrors(errors);
    }
  }, []);

  const handleCancel = useCallback(async (data) => {
    console.log("data");
  }, []);

  return (
    <Container>
      <Title
        style={{
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <div className="back">
          <Link to="/rca">
            <FaArrowCircleLeft /> Voltar a listagem de vendedores
          </Link>
        </div>
      </Title>
      <Title>
        <div className="rca" style={{ display: "flex" }}>
          <h1>
            <FaUserAlt />
            {dataRca.nome}
          </h1>
        </div>
      </Title>
      <Form ref={formRef} initialData={dataRca} onSubmit={handleSubmit}>
        {/* 
      NOME: "ANTONIO ANDERSON",
      FIRMA: "",
      ENDERECO: "RUA MEXICO,168 BAIRRO: CJ.J.ESPE/CEARA",
      CNPJ: "",
      CIDADE: "PARNAIBA",
      CPF: "181.486.543-87",
      CI: "329647",
      PRACAATEND: "PARNAIBA,LUIS CORREIA,ILHA GRANDE", */}

        <Input name="nome" label="Nome Pessoa Fisica" />
        <Input name="endereco" label="Endereço" />
        <Input name="cidade" label="Cidade" />
        <Input name="firma" label="Nome da Empresa" />
        <Input name="cnpj" label="CNPJ" />
        <Input name="cpf" label="CPF" />
        <Input name="ci" label="Carteira de Identidade" />
        <Input name="praca1" label="Praças Atendidas 1" />
        <Input name="praca2" label="Praças Atendidas 2" />
        <div className="dates-group">
          <div className="date-admission">
            <Datepicker name="dtinicio" label="Data Inicio Contrato" />
          </div>

          <div className="date-resignation">
            <Datepicker name="dtfim" label="Data Fim Contrato" />
          </div>
        </div>

        <div className="scbuttons">
          <div className="saveform">
            <SubmitButton>
              <FaArrowCircleLeft /> Salvar
            </SubmitButton>
          </div>
        </div>
      </Form>
    </Container>
  );
}

export default Edit;
