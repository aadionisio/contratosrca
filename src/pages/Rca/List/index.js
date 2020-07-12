import React, { Component, useState } from "react";
import {
  FaGithubAlt,
  FaUserAlt,
  FaSpinner,
  FaArrowCircleLeft,
  FaSearch,
} from "react-icons/fa";

import { Container, Form, SubmitButton, Title, List } from "./styles";
import { Link } from "react-router-dom";

function Rca() {
  const [rca, setRca] = useState([]);
  const [listRca, setListRca] = useState([]);
  const [loading, setLoading] = useState(false);
  const listaRca = [
    {
      CODUSUR: "12",
      NOME: "JOSE DE SOUSA BRITO",
      FIRMA: "",
      ENDERECO: "RUA MEXICO,168 BAIRRO: CJ.J.ESPE/CEARA",
      CNPJ: "",
      CIDADE: "PARNAIBA",
      CPF: "181.486.543-87",
      CI: "329647",
      PRACAATEND: "PARNAIBA,LUIS CORREIA,ILHA GRANDE",
    },
    {
      CODUSUR: "70",
      NOME: "CLEIDIVAN PEREIRA",
      FIRMA: "",
      ENDERECO: "RESIDENCIAL CASA NOVA QD H CASA 3 BAIRRO: FREIHIGINO",
      CNPJ: "",
      CIDADE: "PARNAIBA",
      CPF: "629.867.323-72",
      CI: "1700356",
      PRACAATEND: "PARNAIBA,LUIS CORREIA,ILHA GRANDE",
      DATAADMISSAO: "20/02/2013",
    },
    {
      CODUSUR: "38",
      NOME: "ANTONIO ANDERSON",
      FIRMA: "",
      ENDERECO: "RUA MEXICO,168 BAIRRO: CJ.J.ESPE/CEARA",
      CNPJ: "",
      CIDADE: "PARNAIBA",
      CPF: "181.486.543-87",
      CI: "329647",
      PRACAATEND: "PARNAIBA,LUIS CORREIA,ILHA GRANDE",
    },
  ];

  function handleChange(event) {
    setRca(event.target.value);
  }

  function handleBuscaRca(e) {
    // Preventdefault desabilita o recarregamento da pagina ao executar a função
    e.preventDefault();
    setListRca(listRca.concat(listaRca));
    //setRca("");
  }

  return (
    <Container>
      <Title>
        <div className="back">
          <Link to="/">
            <FaArrowCircleLeft /> Voltar ao menu
          </Link>
        </div>
        <div className="title">
          <h1>
            <FaUserAlt />
            Localizar Vendedores
          </h1>
        </div>
      </Title>

      <Form onSubmit={handleBuscaRca}>
        <input
          type="text"
          placeholder="Digite o Vendedor"
          // value={rca}
          //onChange={handleChange}
        />
        <SubmitButton>
          <FaSearch color="#FFF" size={14} />
        </SubmitButton>
      </Form>

      <List>
        {listRca.map((item) => (
          <li key={item.CODUSUR}>
            <div className="rca">
              <span> {item.CODUSUR}</span>
              <span> {item.NOME}</span>
            </div>
            <div className="botoes">
              <Link
                className="button"
                to={{
                  pathname: "/edit",
                  state: {
                    codusur: item.CODUSUR,
                    nome: item.NOME,
                    firma: item.FIRMA,
                    endereco: item.ENDERECO,
                    cnpj: item.CNPJ,
                    cidade: item.CIDADE,
                    cpf: item.CPF,
                    ci: item.CI,
                    pracaatend1: item.PRACAATEND,
                  },
                }}
              >
                Editar
              </Link>
              <Link className="button" to={`#`}>
                Gerar
              </Link>
            </div>
          </li>
        ))}
      </List>
    </Container>
  );
}

export default Rca;
