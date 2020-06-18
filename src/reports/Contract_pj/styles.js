import styled from "styled-components";

export const Container = styled.div`
  width: 21cm;
  text-align: justify;

  font-family: "Times New Roman", Times, serif;

  p {
  }
`;

export const Topic = styled.p`
  font-size: 12pt;
  font-weight: bold;
  text-indent: 0px;
`;

export const ContentTopic = styled.p`
  /* text indent - coloca um espaço na primeira linha do paragrafo */
  text-indent: 1cm;
  margin-bottom: 12pt;
`;

export const Title = styled.h1`
  text-align: center;

  font-size: 12pt;
  margin-top: 10px;
  margin-bottom: 30px;
`;
