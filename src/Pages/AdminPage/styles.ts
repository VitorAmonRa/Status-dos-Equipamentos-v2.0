import styled from "styled-components";

export const Container = styled.main`
  justify-content:center;
  align-items:center;
  max-width: 100%;
  min-height:100vh;
  width: 100%;
  height: 100vh;
  background-color: #D5D5D5;

`;
export const ButtonEmail = styled.span`
  display:flex;
  flex-direction: column;
  position:relative;
  justify-content:center;
  align-items:center;
  width: 100%;
  max-width: 100px;
  height:100vh;
  max-height:50px;
  top: 5rem;
  left: 50%;
  transform:translate(-50%,-50%);
`;
export const ContainerForm = styled.div`
  display:flex;
  flex-direction: column;
  position:relative;
  justify-content:center;
  align-items:center;
  width: 100%;
  max-width: 1000px;
  height:100vh;
  max-height:700px;
  border: 3px solid black;
  border-radius: 20px;
  top: 45%;
  left: 50%;
  transform:translate(-50%,-50%);
  @media (max-width:1920px) {
      max-width:900px;
  
  }

`;
export const Form = styled.form`
    display:flex;
    flex-direction: column;
    max-width:900px;
    max-height:600px;
    padding: 20px 0 ;
    width:100%;
    height:100vh;
`;
export const Field = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    padding: 18px 0 40px 0;
    margin: 18px 0;
    border-radius: 20px;
`;
export const Label = styled.label`
  font-size: 22px;
  font-weight: bold;
  margin: 10px;
`;
export const InputText = styled.input` 
  font-size: 15px;
  width:100%;
  height:100vh;
  max-width: 500px;
  height: 30px;
  padding: 15px;
  word-wrap: break-word;
  cursor: pointer;
  &:hover{
      border: 2px solid black;
    }
  @media (max-width:1920px) {
    height: 20px;
  }
`
export const Select = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  font-size: 19px;
  margin-top: 10px;
  width:100%;
  height:100vh;
  max-width: 900px;
  max-height: 50px;
  font-weight: bold;
  cursor: pointer;
  .checkbox{ 
    display: flex;
    padding:0px 8px;
    input{
      width: 22px;
      height: 20px;
      color:#fff;
      background-color:red;
      cursor: pointer;
      .check1{
        background-color:red;
      }
      &:checked + label{
            border-color: red;
        }
    }
    label{
      cursor:pointer;
    }
  }
  @media (max-width:1920px) {
    font-size: 18px;
  }
`
export const ButtonSection = styled.div`
  display:flex;
  justify-content:space-around;
    button{
      display:flex;
      justify-content:center;
      align-items:center;
      padding: 20px 0;
      margin: 20px;
      font-size: 18px;
      font-weight: bold;
      width: 100%;
      height:100vh;
      max-width: 210px;
      max-height: 50px;
      cursor: pointer;
      border: 2px solid black;
      border-radius: 5px;
    &:hover{
      background-color:red;
      color:#fff;
    }
  }
  @media (max-width:1920px) {
    button{
      max-width: 210px;
      padding: 15px;
    }
  }
` 
export const ModalSection = styled.section`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  position:absolute;
  max-height:700px;
  max-width:1000px;
  width:100%;
  height: 100dvh;
  padding: 5px;
  border: 2px solid black;
  border-radius: 5px;
  background-color: black;
  .modal-article{
    width:100%;
    max-width:1100px;
    height: 100dvh;
    color:#fff;
    overflow-y: scroll;
      section{
      display: flex;
      justify-content: space-between;
      align-items:center;
      background-color:grey;
      padding: 10px 0;
      margin: 10px;
      border: 4px solid black;
      p{
        font-size: 18px;
        padding: 0 10px;
      }
      button{
        font-weight:bold;
        border:2px solid black;
        padding: 5px;
        margin: 0 8px;
        cursor: pointer;
      }
    }
  }
`
export const LabelChecked = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 3rem;
`;
export const Switch = styled.span`
position: relative;
width: 60px;
height: 32px;
background: #b3b3b3;
border-radius: 32px;
transition: 300ms all;
cursor:pointer;
&:before {
    transition: 300ms all;
  content: "";
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 35px;
  top: 50%;
  left: 4px;
  background: white;
  transform: translate(0, -50%);
}
`;
export const InputChecked = styled.input`
  display: none;
  opacity: 0;
  position: absolute;
  &:checked + ${Switch} {
    background: green;
    
    &:before {
      transform: translate(32px, -50%);
    }
  }
`;
export const PreviewMessage = styled.div`
  display:flex;
  justify-content:center;
  height:20vh;
  width:100%;
  max-width:40rem;
`;
export const ButtonCloseModal = styled.div`
  display: flex;
  justify-content:start;
  height:100dvh;
  width:90%;
  max-height:3rem;
  button{
    display: flex;
    align-items:center;
    justify-content:center;
    margin: 0 10px;
    height:100dvh;
    width:100%;
    max-height:3rem;
    /* max-width:3rem; */
    font-size:18px;
    cursor:pointer;
  }:hover{
    background-color:red;
    color:#fff;
    border: 2px solid #fff;
  }
`;
