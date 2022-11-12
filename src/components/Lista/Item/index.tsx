import { ITarefa } from "../../../types/ITarefa";
import style from "./style.module.css";

interface IProps extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Item = ({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionaTarefa,
}: IProps) => {
  return (
    <li
      onClick={() =>
        !completado &&
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
      className={`${style.card} ${selecionado ? style.cardSelecionado : ""} ${
        completado ? style.cardCompletado : ""
      }`}
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
};

export default Item;
