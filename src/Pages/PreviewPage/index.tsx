
import { Burguer } from '../../Components/Burguer';
import { api } from '../../Services/services';
import {Image, SectionOne, SectionTwo, SituationOfEquipments, BackupOfEquipments, Title, EquipmentsList,SectionThree,Main, SupportEquipaments,Footer} from './styles';
import React, { useEffect, useState } from 'react';
interface EquipmentsProps {
  id:string;
  name:string;
  status: string;
}

export const PreviewPage: React.FC = () => {
  const [equipments, setEquipments] = useState<EquipmentsProps[]>([]);
  
  
  useEffect(() => {
    async function loadEquipments() {
      const response = await api.get("/allequipments")
      setEquipments(response.data)
  }
    loadEquipments()
  },[])

  const equipamentoLiberado = equipments.filter(equipments => equipments.status == "Liberado")

  const equipamentosNãoLiberados = equipments.filter(equipments => equipments.status == "não-liberado")
  
  const equipamentosEmLiberação = equipments.filter(equipments => equipments.status == "em-liberação")
 
  const equipamentosReservas = equipments.filter(equipments => equipments.status == "reserva")
  
  const equipamentosProximoDia = equipments.filter(equipments => equipments.status == "proximo-dia")
  
  const equipamentosDateTime = equipments.filter(equipments => equipments.status == "data")

  const equipamentosDeApoio = equipments.filter(equipments => equipments.status == "Apoio")

  return (
    <>
    <Image>
      <Main> 
     {/*    <Burguer/> */}
        <SectionOne>
          <SituationOfEquipments style={{
                borderColor:"green"
              }}>
            <Title>
              <h1>Liberados</h1>
            </Title>
            <EquipmentsList>
            {equipamentoLiberado.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </SituationOfEquipments>

          <SupportEquipaments>
            <Title> 
              <h1 style={{
                fontSize:"24px"
              }}> Equipamentos de Apoio </h1> 
            </Title>
            <EquipmentsList>
            {equipamentosDeApoio.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
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
            {equipamentosEmLiberação.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </SituationOfEquipments>
           
           <BackupOfEquipments>
            <Title>
              <h1>Spreader's Reservas</h1>
              </Title>
            <EquipmentsList >
            {equipamentosReservas.map((item,index) => (
                 <>  
                  <li key={index}>
                    <p>{item.name}</p>
                  </li>
                 </>
              ))}
            </EquipmentsList>
          </BackupOfEquipments> 

           <BackupOfEquipments>
            <Title>
              <h1>Programação do Dia &rarr; </h1>
              {equipamentosDateTime.map((item,index) => (
                 <> 
                 <div key={index}>
                    <span>{item.name}</span>
                 </div>
                 </>
              ))}
            </Title>
            <EquipmentsList>
            {equipamentosProximoDia.map((item,index) => (
                 <> 
                 <div>
                  <li key={index}>
                    <p>{item.name}</p>
                  </li>
                 </div>
                 </>
              ))}
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
            {equipamentosNãoLiberados.map((item,index) => (
                 <>  
                  <li key={index}>
                    {item.name}
                  </li>
                 </>
              ))}
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


