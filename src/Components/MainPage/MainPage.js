import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../hook/useForm'

function MainPage() {
  
 const handleClick = (event) =>{
  event.preventDefault()
 }

 const {form, controlaEstado} = useForm({
  nome: "",
  modulos:"",
  tecnologias:"",
  responsavel:""
 });

  return (
    <MainContainer>
      {form.tecnologias.value <2 && alert('Escolha mais que 2 módulos')}
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
          value={form.nome}
          name="nome"
          id="nome"
          onChange={controlaEstado}
        required/>

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          value={form.modulos}
          name="modulos"
          id="modulos"
          onChange={controlaEstado}
          pattern="[2-9]"
          title='O número de módulos não pode ser menor que 2'
          required/>

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input
          value={form.tecnologias}
          name="tecnologias"
          id="tecnologias"
          onChange={controlaEstado}
          required/>
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input
          value={form.responsavel}
          name="responsavel"
          id="responsavel"
          onChange={controlaEstado}
          pattern="[a-zA-Z]{5,15}"
          title='O nome do responsável não pode ter menos de 5 caracteres'
          required/>
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage