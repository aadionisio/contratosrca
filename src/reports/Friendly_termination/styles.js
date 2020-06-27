import styled from "styled-components";

export const Container = styled.div`
  width: 21cm;
  text-align: justify;
  margin-left: 2cm;

  font-family: "Courier New", Courier, monospace;

  p {
  }
`;

export const Title = styled.h1`
  text-align: center;

  font-size: 12pt;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  font-size: 12pt;
  margin-bottom: 12pt;
  margin-top: 12pt;
  text-indent: 0px;

  div {
    /* display: block; */
    /* border-width: 1px; */
    /* border-style: double; */
    /* border-color: #f00; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    span {
      margin-left: 1cm;
      margin-right: 1cm;
    }
  }
`;

export const DateDocument = styled.p`
  font-size: 12pt;
  text-align: center;
  text-indent: 0px;
`;

export const Signatures = styled.div`
  height: 250px;
  width: 100%;
  display: flex;
  /* border-width: 1px;
  border-style: double;
  border-color: #f00; */

  .Representada {
    height: 100%;
    width: 70%;
    display: block;
    /* border-width: 1px;
    border-style: double;
    border-color: #f00; */

    p {
      font-size: 12pt;
      text-align: center;
      text-indent: 0px;
      margin-top: 30px;
    }
  }

  .Representante {
    height: 100%;
    width: 70%;
    display: block;
    /* border-width: 1px;
    border-style: double;
    border-color: #f00; */

    p {
      font-size: 12pt;
      text-align: center;
      text-indent: 0px;
      margin-top: 30px;
    }
  }
`;
