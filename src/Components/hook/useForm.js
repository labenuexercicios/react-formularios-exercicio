import { useState } from "react"

export default function useForm(estadoInicial){
    
    //* Criar estados que recebem o estado inicial via parâmetro;

    const [form, setForm] = useState(estadoInicial)

    //* Criar função que recebe event como parâmetro controlado pelo value;

    //* Criar variável que recebe o valor do name="" dos inputs;

    //* Alterar estado com objeto recebendo spread do estado inicial e adicionando a propriedade name em array com o valor de value;

    //* Retorne o estado inicial e a função;

    const controlaEstado = (event) => {
        const value = event.target.value
        const name = event.target.name
        setForm({...form, [name]:value})
    }

    return { form, controlaEstado }
}