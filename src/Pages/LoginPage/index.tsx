import { useState} from 'react';
import {useNavigate } from 'react-router-dom';
import { 
  Container,
  Form,
  Field
} from './styles';
import React from 'react';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassoword] = useState("")
  const navigate = useNavigate();
  
const handleLogin = () =>{

}
  const handleSwitchPreview = () => {
    navigate("/PreviewPage", {replace:true})
  }

  return(
    <Container>
      <Form onSubmit={handleLogin}>
        <h1>Faça seu login aqui</h1>
        <Field>
          <label htmlFor="email"> Email </label>
          <input 
          type="email" 
          name="email" 
          id="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </Field>
        <Field>
          <label htmlFor="password"> Password </label>
          <input 
          type="password" 
          name="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassoword(e.target.value)}
          />
        </Field>
        <div className='button-div'>
          <button type="submit" > Entrar </button>
          <button type="button" onClick={handleSwitchPreview}> Preview </button>
        </div>
      </Form>
    </Container>
  )
}    



