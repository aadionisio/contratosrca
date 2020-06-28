import styled, { keyframes, css } from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;

  h1 {
  }

  .back {
    color: blue;
  }

  .title {
    /* color: rgb(60, 179, 113, 0.7); */
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 20px;

    svg {
      margin-right: 10px;
    }
  }

  /* display: flex;
  justify-content: center;
  /* align-items: center; */
  /* position: absolute;
  text-align: center;
  /* display: flex; */
  /* justify-content: center;
  align-items: center;
  left: 25%;
  right: 25%;
  top: 6.84%;
  bottom: -2.25%;
  border: 6px solid #fffafa;  */

  /* div {
    /* display: grid; 
    border: 6px solid red;

    justify-content: center;
    align-items: center;

    .back {
      text-align: left;
      height: 60px;
    } */
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
  disabled: props.loading,
}))`
  background: rgb(60, 179, 113, 0.7);
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const Title = styled.header`
  /* display: flex; */
  /* flex-direction: column; */
  /* align-items: center; */

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    border: 1px solid #eee;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
  }

  & + li {
    border-top: 1px solid #eee;
  }

  a {
    color: #eee;
    text-decoration: none;
    font-weight: bold;
  }

  .button {
    background: rgb(60, 179, 113, 0.7);
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: block;
    justify-content: center;
    align-items: center;
  }

  .botoes {
    /* border: 6px solid red; */
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .rca {
    width: 50%;
  }
`;
