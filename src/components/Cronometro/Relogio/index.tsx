import style from "./style.module.css";

interface IProps {
  tempo: number | undefined;
}

const Relogio = ({ tempo = 0 }: IProps) => {
  const minutos = Math.floor(tempo / 60);
  const minutoDezena = Math.floor(minutos / 10);
  const minutoUnidade = minutos % 10;

  const segundos = tempo % 60;
  const segundosDezena = Math.floor(segundos / 10);
  const segundosUnidade = segundos % 10;

  return (
    <div className={style.watch}>
      <span className={style.number}>{minutoDezena}</span>
      <span className={style.number}>{minutoUnidade}</span>
      <span>:</span>
      <span className={style.number}>{segundosDezena}</span>
      <span className={style.number}>{segundosUnidade}</span>
    </div>
  );
};

export default Relogio;
