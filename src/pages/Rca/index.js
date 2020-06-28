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
    { CODUSUR: "12", NOME: "JOSE DE SOUSA BRITO" },
    { CODUSUR: "70", NOME: "CLEIDIVAN PEREIRA" },
    { CODUSUR: "38", NOME: "ANTONIO ANDERSON" },
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
              <Link className="button" to={`#`}>
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
