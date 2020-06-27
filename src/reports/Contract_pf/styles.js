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

export const ContentTopic = styled.p`
  /* text indent - coloca um espaço na primeira linha do paragrafo */
  text-indent: 1cm;
  /* margin-bottom: 12pt; */
  font-size: 12pt;
`;

export const Title = styled.h1`
  text-align: center;

  font-size: 12pt;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const ListOrder = styled.ol`
  /* display: block; */
  list-style-type: lower-alpha;

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 1.5cm;
  font-size: 12pt;
`;
