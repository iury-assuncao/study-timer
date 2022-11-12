import style from "./style.module.css";
import Item from "./Item";
import { ITarefa } from "../../types/ITarefa";

interface IProps {
  tarefas: ITarefa[];
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

const Lista = ({ tarefas, selecionaTarefa }: IProps) => {
  return (
    <aside className={style.list}>
      <h2 className={style.title}>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item selecionaTarefa={selecionaTarefa} key={item.id} {...item} />
        ))}
      </ul>
    </aside>
  );
};

export default Lista;
