import Formulario from "./components/Formulario";
import Lista from "./components/Lista";

import "./App.css";
import Cronometro from "./components/Cronometro";
import { useState } from "react";
import { ITarefa } from "./types/ITarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.map((tarefa) => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false,
      }))
    );
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);
      setTarefas((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true,
            };
          }
          return tarefa;
        })
      );
    }
  }
  return (
    <main className="App">
      <section className="left">
        <Formulario setTarefas={setTarefas} />

        <Cronometro
          selecionado={selecionado}
          finalizarTarefa={finalizarTarefa}
        />
      </section>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
    </main>
  );
}

export default App;
