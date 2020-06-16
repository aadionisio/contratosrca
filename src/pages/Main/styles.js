import styled from "styled-components";

export const Container = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: absolute;
  text-align: center;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  left: 25%;
  right: 25%;
  top: 6.84%;
  bottom: -2.25%;
  border: 6px solid #fffafa;

  div {
    display: grid;

    justify-content: center;
    align-items: center;
  }

  div button {
    background: #fffafa;
    border: 0;
    margin-top: 10px;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    width: 210px;
    height: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* position: absolute;
  left: 14.65%;
  right: 14.55%;
  
  top: 6.84%;
  bottom: -2.25%; */

  /* mix-blend-mode: normal;
  opacity: 0.8;
  border: 6px solid #56ff66;
  box-sizing: border-box; */
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: "submit",
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  width: 180px;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
