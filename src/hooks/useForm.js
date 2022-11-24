import { useState } from "react";

export const useForm = () => {
    const [form, setForm] = useState({nome: "", modulos: "", tecnologias: "", responsavel:""});

    const onChangeForm = (event) => {
        const { name, value } = event.target;
        const novoForm = {
          ...form,
          [name]: value
        };
        setForm(novoForm);
      };
      return [form, onChangeForm];
    };
    