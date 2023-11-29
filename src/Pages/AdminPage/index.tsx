
import { useState,useEffect,FormEvent} from "react";
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
  ButtonCloseModal,
} from "./styles";
import Navbar from "../../Components/Navbar";
import React from 'react';
import { api } from "../../Services/services";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export interface EquipmentsProps {
  id:string;
  name:string;
  status: string;
  
}

export const AdminPage: React.FC = () => {
  const [equipmentsModal, setEquipmentsModal] = useState<EquipmentsProps[]>([]);
  const [equipments, setEquipments] = useState("");
  const [status, setStatus] = useState("");
  const [change, setChange] = useState(true);
  const [openModal, setOpenModal] = useState(false);

 useEffect(() => {
   loadEquipments()
  },[])

 
  async function loadEquipments() {
    const response = await api.get("/allequipments")     
    setEquipmentsModal(response.data)
  }

  async function handleSubmit(event:FormEvent) {
    event.preventDefault();
    try {
      const response = await api.post("/equipments", {
        name: equipments,
        status: status
      })
      setEquipmentsModal(allEquipments => [...allEquipments,response.data])
      setEquipments("");
      if (status == "data"){
        toast.success("Data registrada com sucesso");
      }else{
        toast.success("Equipamento registrado ")
      }
      
    } catch (error) {
      console.log("Erro ao cadatrar" + error);
        toast.error("Error");
    }

  }

  async function handleDelete(id : string) {
    try {
      await api.delete("/equipment", {
        params:{
          id:id
        }
      })
      toast.success("Equipamento deletado com sucesso");

      const allEquipments = equipmentsModal.filter((equipments) => equipments.id !== id)
      setEquipmentsModal(allEquipments)
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleChange = () =>{
    setChange(change => !change)
  }
  console.log(openModal)

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
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>Equipamentos</Label>
              <InputText
                type="text"
                name="equipments"
                id="equipments"
                value={equipments}
                onChange={(e) => setEquipments(e.target.value)}
                required
              />
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
                    checked={status === "Liberado"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label htmlFor="1">Liberado</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="em-liberação"
                    id="2"
                    checked={status === "em-liberação"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label htmlFor="2">Em Liberação</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="não-liberado"
                    id="3"
                    checked={status === "não-liberado"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label htmlFor="3">Não Liberado</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="reserva"
                    id="4"
                    checked={status === "reserva"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label htmlFor="4">Reserva</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="proximo-dia"
                    id="5"
                    checked={status === "proximo-dia"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label htmlFor="5">Proximo Dia</label>
                </div>

                <div className="checkbox">
                  <input
                    className="checkbox"
                    type="checkbox"
                    value="data"
                    id="6"
                    checked={status === "data"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label htmlFor="6">Data</label>
                </div>

                <div className="checkbox">
                  <input
                    type="checkbox"
                    value="Apoio"
                    id="7"
                    checked={status === "Apoio"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <label htmlFor="7">Apoio</label>
                </div>

              </Select>
            </Field>
            <ButtonSection>
              <button type="submit">Enviar</button>
              <button type="button"onClick={() => setOpenModal(true)}>Modal</button>
            </ButtonSection>
            
          </Form>
          {openModal ? (
            <ModalSection>
              <ButtonCloseModal>
                <button onClick={() => setOpenModal(!openModal)}>Sair</button>
              </ButtonCloseModal>
              <article className="modal-article">
                {equipmentsModal.map((item) => {
                  const toggleColor = (item: EquipmentsProps) => {
                    switch(item.status){
                      case"Liberado": return "green";
                      case "em-liberação": return "yellow";
                      case "não-liberado": return "red";
                      case "reserva": return "blue";
                      case "proximo-dia": return "white";
                    }
                  }
                  return(
                    <>
                      <section 
                      key={item.id}
                      style={{borderColor: toggleColor(item)}}
                      >
                        <p>{item.name}</p>
                        <button onClick={() => handleDelete(item.id)}>X</button>
                      </section>
                    </>
                  )
                })}
              </article>
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
                disabled
                required
                placeholder="Não funcional, fase de testes"
              />
            </Field>
            <Field>
              <Label>Mensagem</Label> 
              <PreviewMessage>
                <InputText 
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