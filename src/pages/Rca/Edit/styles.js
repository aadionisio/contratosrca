import styled, { keyframes, css } from "styled-components";

export const Container = styled.div.attrs((props) => ({}))`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  height: 950px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }

  label {
    display: block;
    font-weight: bold;
    margin-top: 5px;
  }

  input {
    width: 100%;
    text-transform: uppercase;
    /* margin-bottom: 15px; */
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    /* border-color: red; */
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: #c53030;
      `}
  }

  input:focus {
    border-color: #111;
  }

  svg {
    margin-right: 10px;
  }

  .dates-group {
    display: flex;
    justify-content: space-between;
    width: 100%;

    div {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      display: block;
      /* width: 100%; */
    }
  }

  .scbuttons {
    /* border: 6px solid red; */
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      display: block;
      /* background: #111; */
      /* background: rgb(60, 179, 113, 0.7); */
      color: #fff;
      border: 0;
      cursor: pointer;
      border-radius: 4px;
      width: 50%;

      padding: 16px;
      font-weight: bold;
      font-size: 15px;
      transition: background-color 0.2s;
    }

    /* button:hover {
      background: rgb(2, 149, 113, 1);
    } */
  }

  .cancel {
    color: blue;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 50%;
    /* border: 6px solid black; */

    button {
      background: red;
    }

    button:hover {
      background: rgb(178, 34, 34, 1);
    }
  }

  .saveform {
    color: blue;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    /* border: 6px solid black; */

    button {
      background: rgb(60, 179, 113, 0.7);
    }

    button:hover {
      background: rgb(2, 149, 113, 1);
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
  /* margin-left: 10px; */
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

export const Title = styled.div`
  /* border: 6px solid red; */

  .rca {
    /* color: blue; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-top: 10px;
    border: 1px solid #eee;
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
    /* margin-left: 10px; */
    border-radius: 4px;

    display: block;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentForm = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  height: 200px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  /* margin: 10px auto; */
`;
