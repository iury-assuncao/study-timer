import React from "react";
import style from "./style.module.css";

interface IProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Botao = (props: IProps) => {
  return (
    <button onClick={props.onClick} type={props.type} className={style.button}>
      {props.children}
    </button>
  );
};

export default Botao;
