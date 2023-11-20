
import { Burguer } from '../../Components/Burguer';
import {Image, SectionOne, SectionTwo, SituationOfEquipments, BackupOfEquipments, Title, EquipmentsList,SectionThree,Main, SupportEquipaments,Footer} from './styles';
import React from 'react';


export const PreviewPage: React.FC = () => {
  
  return (
    <>
    <Image>
      <Main> 
        <Burguer/>
        <SectionOne>
          <SituationOfEquipments style={{
                borderColor:"green"
              }}>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
              {/* //MAP  */}
            </EquipmentsList>
          </SituationOfEquipments>

          <SupportEquipaments>
            <Title> 
              <h1 style={{
                fontSize:"24px"
              }}> Equipamentos de Apoio </h1> 
            </Title>
            <EquipmentsList>
            {/* MAP */}
            </EquipmentsList>

          </SupportEquipaments>
        </SectionOne>

        <SectionTwo>
              <SituationOfEquipments 
              style={{
                borderColor:"yellow"
              }}>
            <Title>
              <h1>Em Liberação</h1>
            </Title>
            <EquipmentsList>
             
            </EquipmentsList>
          </SituationOfEquipments>
           
           <BackupOfEquipments>
            <Title>
              <h1>Spreader's Reservas</h1>
              </Title>
            <EquipmentsList >
            
            </EquipmentsList>
          </BackupOfEquipments> 

           <BackupOfEquipments>
            <Title>
              <h1>Programação do Dia &rarr; </h1>
             
            </Title>
            <EquipmentsList>
               
            </EquipmentsList>
          </BackupOfEquipments> 
        </SectionTwo>

        <SectionThree>
              <SituationOfEquipments style={{
                borderColor:"red"
              }}>
            <Title>
              <h1>Não Liberados</h1>
            </Title>
            <EquipmentsList>
            
            </EquipmentsList>
          </SituationOfEquipments>
        </SectionThree>
       <Footer>
          <p>Developed by Vitor Amon-Rá Fernandes</p>   
       </Footer>
        </Main>
      </Image>
    </>
  );

}


export default PreviewPage;


