import styled from "styled-components";

export const Container = styled.main`
 display: flex;
 justify-content:center;
 align-content:center;
 width:100%;
 height:92.5vh;
 max-width:100%;
 max-height:100%;
 background-color:blue;
`
export const FormArticle = styled.article`
 display: flex;
 justify-content:space-evenly;
 align-content:center;
 flex-direction:row;
 width:100%;
 height:100vh;
 max-width:90rem;
 max-height:50rem;
 margin:2rem 0;
 background-color:red;
`;

export const CheckBoxSection = styled.section`
 display: flex;
 justify-content:space-around;
 align-content:center;
 flex-wrap:wrap;
 margin:4rem 5px;
 gap:2rem;
 width:100%;
 height:100vh;
 max-width:25rem;
 max-height:30rem;
 background-color:yellow;
`;



export const InputSection = styled.section`
 display: flex;
 justify-content:center;
 align-content:center;
 margin:4rem 5px;
 width:100%;
 height:100vh;
 max-width:40rem;
 max-height:20rem;
 background-color:yellow;
`;
