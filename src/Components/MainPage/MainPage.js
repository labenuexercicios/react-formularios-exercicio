import React from 'react'
import { MainContainer, Form, Input, Button } from './styles'

function MainPage() {
 
  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit="">
        <label htmlFor="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          placeholder="Digite o nome do curso"
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input 
          id="modulos"
          placeholder="Digite o número de módulos"
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          placeholder="Digite as tecnologias abordadas"
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input 
          id="responsavel"
          placeholder="Digite o nome do responsável"
        />
      <Button type="submit">Criar curso</Button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
