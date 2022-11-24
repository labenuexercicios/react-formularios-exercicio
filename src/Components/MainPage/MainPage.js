import React from 'react';
import {useForm} from "../../hooks/useForm";
import { MainContainer, Form, Input } from './styles';

function MainPage() {
 const [form, onChangeForm] = useForm({
  nome: "",
  modulos: "",
  tecnologias: "",
  responsavel: ""
 });

 const handleClick = (event) =>{
  event.preventDefault();
  console.log(form);
  console.log(
    `nome:${form.nome},  modulos: ${form.modulos}, tecnologias:${form.tecnologias}, responsavel: ${form.responsavel}`
  );
 };

 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label for="nome">Nome do Curso:</label>
        <Input 
        // pattern='[A-Z-z]{3,]'
        // title='É preciso que o nome tenha pela menos 3 letras'
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label for="modulos">Número de Módulos: </label>
        <Input 
        pattern="[0-9]{2,}"
         type="number"
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChangeForm}
          required
        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name='tecnologias'
          value={form.tecnologias}
          onChange={onChangeForm}
          required
        />
        
        <label for="responsavel">Responsável: </label>
        <Input 
         pattern="[A-Za-z\s]{5,}"
          id="responsavel"
          name='responsavel'
          value={form.responsavel}
          onChange={onChangeForm}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage