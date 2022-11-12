import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/ITarefa";
import Botao from "../Button";
import Relogio from "./Relogio";
import style from "./style.module.css";

interface IProps {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void;
}

const Cronometro = ({ selecionado, finalizarTarefa }: IProps) => {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  function regressiva(contador: number = 0) {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      }
      finalizarTarefa();
    }, 1000);
  }

  return (
    <section className={style.cron}>
      <p>Escolha um card e inicie o cronômetro </p>
      <Relogio tempo={tempo} />
      <Botao onClick={() => regressiva(tempo)} type="button">
        Começar!
      </Botao>
    </section>
  );
};

export default Cronometro;
