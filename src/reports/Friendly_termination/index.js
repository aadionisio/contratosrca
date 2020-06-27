import React from "react";

import {
  Container,
  Paragraph,
  Title,
  DateDocument,
  Signatures,
} from "./styles";

function Contract_pf() {
  function datePerExtension() {
    const data = new Date();

    var day = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ][data.getDay()];
    var date = data.getDate();
    var month = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ][data.getMonth()];
    var year = data.getFullYear();

    // console.log(data);
    // console.log(`Parnaiba, ${date} de ${month} de ${year}`);
    return `Parnaiba, ${date} de ${month} de ${year}`;
  }

  return (
    <Container>
      <Title>
        {" "}
        TERMO DE RESCISÃO AMIGÁVEL DO CONTRATO DE REPRESENTAÇÃO COMERCIAL
        AUTÔNOMA{" "}
      </Title>
      <Paragraph>
        Pelo presente instrumento particular acima enunciado, de um
        lado, EVANDRO COMERCIAL LTDA, pessoa jurídica de direito privado,
        inscrita no CNPJ 06.983.31/0004-86 e Insc. Estadual 19.473.228-82,
        localizada na Av. Dr. João Silva Filho n.º 5125, representada neste ato
        por seu sócio administrador Sr. Evandro de Sousa Brito, brasileiro,
        casado, empresário, portador da Cédula de Identidade RG n.º
        955.328-SSP-PI, inscrito no CPF sob o n.º 352.537.623-53, doravante
        designada REPRESENTADA, e de outro lado, MARCELO RUAN NORONHA VILANOVA,
        brasileiro, representante comercial autônomo, portador da Cédula de
        Identidade RG 3430614 SSP-PI , inscrito no CPF sob o n.º 057.733.843-96,
        registrado no Conselho Regional dos Representantes Comerciais do Estado
        do Piauí sob o número , residente e domiciliado no RUA ZUMBAMBI, N 3652,
        ,Bairro MATADOURO, Cidade Teresina, Estado do Piauí, doravante designado
        simplesmente REPRESENTANTE, na expressão livre de sua vontades, tem
        certo, justo e acordado o seguinte:
      </Paragraph>
      <Paragraph>
        <strong>CLÁUSULA PRIMEIRA</strong>: Fica estabelecido que, a partir da
        assinatura do presente, por consenso e transigência entre{" "}
        <strong>REPRESENTANTE</strong>  e <strong>REPRESENTADA</strong> , está
        rescindido o contrato de Representação Comercial, firmado em
        01/08/2019. 
      </Paragraph>
      <Paragraph>
        <strong>CLÁUSULA SEGUNDA</strong>: Tratando-se de rescisão amigável, a
        pedido do <strong>REPRESENTANTE</strong> , a{" "}
        <strong>REPRESENTADA</strong>  concorda em pagar ao{" "}
        <strong>REPRESENTANTE</strong>  e este em receber a importância de
        <strong>R$ 617,17</strong> (seiscentos e dezessete reais e dezessete
        centavos)em parcela única, proveniente da verba indenizatória, prevista
        nos artigos 27, j e 34, devida em razão da rescisão do contrato de
        representação comercial firmado entre as partes nos termos da Lei
        4886/65, com as alterações introduzidas pela Lei 8420/92.
      </Paragraph>
      <Paragraph>
        <strong>CLÁUSULA TERCEIRA</strong> : A importância acima mencionada será
        paga no ato da assinatura do presente termo de rescisão, em moeda
        corrente do país.
      </Paragraph>
      <Paragraph>
        <strong>CLÁUSULA QUARTA</strong> : O Representante declara neste ato que
        não esteve subordinado ao cumprimento de horário, não teve vínculo de
        natureza trabalhista, ou subordinação outra, exceto às cláusulas
        contratuais.
      </Paragraph>
      <Paragraph>
        <strong>CLÁUSULA QUINTA</strong> : O Representante recebendo a
        importância conforme estabelecido nas cláusulas Segunda e Terceira dá à
        Representada a mais ampla, rasa, geral e irrevogável quitação das verbas
        indenizatórias, nada mais tendo a reclamar, a qualquer título e ou
        qualquer natureza, no presente e no futuro, dando-se por pago e
        satisfeito em todos os seus haveres, para não mais se repetir a qualquer
        tempo sobre o objeto deste.
      </Paragraph>
      <Paragraph>
        <strong>CLÁUSULA SEXTA</strong> : E, por estarem assim certas, justas e
        acordadas, firmam as partes este instrumento em três vias de igual teor
        e forma, na presença de duas testemunhas abaixo, para que se produzam
        todos os efeitos de lei e de direito.
      </Paragraph>
      <br />
      <br />

      <DateDocument>{datePerExtension()}</DateDocument>
      <Signatures>
        <div className="Representada">
          <p>______________________________</p>
          <p style={{ marginTop: 0 }}>REPRESENTADA</p>
          <p style={{ textAlign: "left", marginLeft: 30, fontWeight: "bold" }}>
            T E S T E M U N H A S
          </p>
          <p>______________________________</p>
          <p style={{ marginTop: 0, textAlign: "left", marginLeft: 53 }}>
            Nome
          </p>
          <p style={{ marginTop: 0, textAlign: "left", marginLeft: 53 }}>
            RG nº
          </p>
        </div>
        <div className="Representante">
          <p>______________________________</p>
          <p style={{ marginTop: 0 }}>REPRESENTANTE</p>
          <br />
          <br />
          <br />
          <p>______________________________</p>
          <p style={{ marginTop: 0, textAlign: "left", marginLeft: 53 }}>
            Nome
          </p>
          <p style={{ marginTop: 0, textAlign: "left", marginLeft: 53 }}>
            RG nº
          </p>
        </div>
      </Signatures>
      {/* <br />
      <br />
      <Paragraph>
        <div>
          <span>________________________________________</span>
          <span>________________________________________</span>
        </div>
      </Paragraph>
      <Paragraph style={{ fontWeight: "normal" }}>
        <div>
          <span>JOSE DE SOUSA BRITO</span>
          <span>EVANDRO COMERCIAL LTDA</span>
        </div>
      </Paragraph>
      <br />

      <Paragraph style={{ fontWeight: "normal", marginLeft: 40 }}>
        Testemunhas:
      </Paragraph>
      <Paragraph>
        <div>
          <span>________________________________________</span>
          <span>________________________________________</span>
        </div>
      </Paragraph>

      <Paragraph style={{ marginBottom: 1 }}>
        <div>
          <span>NOME:_________________________________</span>
          <span>NOME:_________________________________</span>
        </div>
      </Paragraph>
      <Paragraph>
        <div>
          <span>CPF :___________________________________</span>
          <span>CPF :___________________________________</span>
        </div>
      </Paragraph> */}
    </Container>
  );
}

export default Contract_pf;
