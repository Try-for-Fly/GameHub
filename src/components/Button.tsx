import { ReactNode } from "react";

interface Props {
  children: string;
  color?: 'primary' |'secondary'| 'success';
  onclick: ()=>void;
}

const Button = ({ children, color="secondary" , onclick}: Props) => {
  return (
    <>
      <button className={"btn btn-" + color} onClick={onclick} >
        {children}
      </button>
    </>
  );
};

export default Button;
