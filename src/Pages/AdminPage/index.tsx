import React from 'react';
import Navbar from '../../Components/Navbar';
import GlobalStyles from '../../GlobalStyles/GlobalStyles'
import { Container,FormArticle,CheckBoxSection,InputSection } from './style' 
import { CheckBoxButton } from '../../Components/CheckBoxButton/index'

const AdminPage: React.FC = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Container>
        <FormArticle>
          <CheckBoxSection>
            <CheckBoxButton 
            color= "black" 
            children= " Liberado" 
            height = "200px"
            width = "200px"
            onClick={ () => console.log("clicou")}
            />
             <CheckBoxButton 
            color= "black" 
            children= " Liberado" 
            height = "200px"
            width = "200px"
            onClick={ () => console.log("clicou")}
            />
             <CheckBoxButton 
            color= "black" 
            children= " Liberado" 
            height = "200px"
            width = "200px"
            onClick={ () => console.log("clicou")}
            />
             <CheckBoxButton 
            color= "black" 
            children= " Liberado" 
            height = "200px"
            width = "200px"
            onClick={ () => console.log("clicou")}
            />
          </CheckBoxSection>
          <InputSection>
          
          
          </InputSection>
        </FormArticle>
      </Container>
    </>
  );
}

export default AdminPage;