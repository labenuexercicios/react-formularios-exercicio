import React from 'react'
import { MainContainer, Form, Input } from './styles'
import useForm from '../../useForm/useForm'

function MainPage() {
 
  const {form, onChangeInputs, cleanInputs} = useForm({curso:"", modulos:"", tecnologias: "", responsavel:""}) // recebi do useform as funcoes e estado form, e passei os parametros necessarios.

   
  const createCourse = (e) => {
 e.preventDefault() // prevencao para que a pagina nao recarregue automaticamente (comportamento padrao)
 console.log(form)
 cleanInputs()
 
  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={createCourse}>
        <label htmlFor="nome">Nome do Curso:</label>
        <Input
        onChange={onChangeInputs}
          name='curso'
          id="nome"
          value={form.curso}
          required
        />

        <label htmlFor="modulos">Número de Módulos: </label>
        <Input
          onChange={onChangeInputs}
          name='modulos'
          id="modulos"
          value={form.modulos}
          title="Digite pelo menos 2 modulos"
          pattern='^(?:[2-9]|[1-9]\d|100)$'
          required
        />

        <label htmlFor="tecnologias">Tecnologias abordadas: </label>
        <Input 
        onChange={onChangeInputs}
          name='tecnologias'
          id="tecnologias"
          value={form.tecnologias}
          required
        />
        
        <label htmlFor="responsavel">Responsável: </label>
        <Input
        onChange={onChangeInputs}
          name='responsavel'
          id="responsavel"
          value={form.responsavel}
          title='Digite pelo menos 5 caracteres'
          pattern='^[a-zA-Z]{5,}$'
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage
