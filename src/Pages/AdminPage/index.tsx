import { useState } from "react";
import GlobalStyles from '../../GlobalStyles/GlobalStyles'

import {
  Container,
  ContainerForm,
  Field,
  Form,
  InputText,
  Label,
  Select,
  ButtonSection,
  ModalSection,
  LabelChecked, 
  InputChecked, 
  Switch,
  PreviewMessage,
} from "./styles";
import Navbar from "../../Components/Navbar";
import React from 'react';

export const AdminPage: React.FC = () => {
  const [change, setChange] = useState(true);  
  const [equipments, setEquipments] = useState("");
  const [situation, setSituation] = useState({});
  const [equipmentsModal, setEquipmentsModal] = useState([]);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = () =>{
    setChange(change => !change)
  }

  return (
    <>
      <GlobalStyles />
      <Container>
        <Navbar />
        <LabelChecked>
          <span> Selecionado {change ? 'Equipamentos' : 'Email'}</span>
          <InputChecked 
          type='checkbox' 
          onChange={handleChange}
          />
          <Switch />
      </LabelChecked>
        { change == true ? 
        <ContainerForm>
          <Form >
            <Field>
              <Label>Equipamentos</Label>
              {equipments.length < 45 
              ? 
              (<>
              <InputText
                type="text"
                name="equipments"
                id="equipments"
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
                required
              />
              </>) 
              : 
              (<>
              <InputText
                type="text"
                name="equipments"
                id="equipments"
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
                required
                style={{
                height: "100vh", 
                maxHeight: "40px",
                width:"100%",
                maxWidth:"80%"
              }}
              />
              
              </>)}
            </Field>
            <Field>
              <Label>Situação</Label>
              <Select
                id="equipments"
              >
                <div className="checkbox">
                  <input
                   className="check1"
                    type="checkbox"
                    value="Liberado"
                    id="1"
                    checked={situation === "Liberado"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="1">Liberado</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="em-liberação"
                    id="2"
                    checked={situation === "em-liberação"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="2">Em Liberação</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="não-liberado"
                    id="3"
                    checked={situation === "não-liberado"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="3">Não Liberado</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="reserva"
                    id="4"
                    checked={situation === "reserva"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="4">Reserva</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="proximo-dia"
                    id="5"
                    checked={situation === "proximo-dia"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="5">Proximo Dia</label>
                </div>

                <div className="checkbox">
                  <input
                    className="checkbox"
                    type="checkbox"
                    value="data"
                    id="6"
                    checked={situation === "data"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="6">Data</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="Apoio"
                    id="7"
                    checked={situation === "Apoio"}
                    onChange={(e) => setSituation(e.target.value)}
                  />
                  <label htmlFor="7">Apoio</label>
                </div>

              </Select>
            </Field>
            <ButtonSection>
              <button type="submit">Enviar</button>
            </ButtonSection>
            
          </Form>
          {equipmentsModal.length > 0 ? (
            <ModalSection>
              <div className="modal-div">
                {equipmentsModal.map((item, index) => {
                  const toggleColor = (item) => {
                    switch(item.situation){
                      case"Liberado": return "green";
                      case "em-liberação": return "yellow";
                      case "não-liberado": return "red";
                      case "reserva": return "blue";
                      case "proximo-dia": return "white";
                    }
                  }
                  return(
                    <>
                      <div 
                      key={index}
                      style={{borderColor: toggleColor(item)}}
                      >
                        <p></p>
                        <button>X</button>
                      </div>
                    </>
                  )
                })}
              </div>
            </ModalSection>
          ) : (
            <></>
          )}
        </ContainerForm> 
        : <ContainerForm>
          <Form >
            <Field>
              <Label>Email</Label>
              <InputText
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
                required
                placeholder="Não funcional, fase de testes"
              />
            </Field>
            <Field>
              <Label>Mensagem</Label> 
              <PreviewMessage>
                <InputText 
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="Não funcional, fase de testes"
                disabled
                style={{
                  height: "100vh", 
                  maxHeight: "100px",
                  width:"100%",
                  maxWidth:"80%"
                }}/>
              </PreviewMessage>
            </Field>
          </Form>
        </ContainerForm>
        }
          
       
      </Container>
    </>
  );
}
