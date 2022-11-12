import React, { useState } from "react";
import style from "./style.module.css";
import Botao from "../Button";
import { ITarefa } from "../../types/ITarefa";
import { v4 as uuiv4 } from "uuid";

interface IProps {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

const Formulario = ({ setTarefas }: IProps) => {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");

  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, completado: false, selecionado: false, id: uuiv4() },
    ]);

    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label>Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          placeholder="o que você quer estudar?"
          onChange={(evento) => setTarefa(evento.target.value)}
          value={tarefa}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label> Tempo</label>
        <input
          type="time"
          name="tempo"
          id="tempo"
          value={tempo}
          onChange={(evento) => setTempo(evento.target.value)}
          min="00:01:00"
          max="05:30:00"
          required
        />
      </div>
      <Botao type="submit"> Adicionar</Botao>
    </form>
  );
};

export default Formulario;
