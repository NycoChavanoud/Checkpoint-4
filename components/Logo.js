import style from "../styles/Logo.module.css";
import Image from "next/image";
import logo from "../public/casque2.png";

export default function Logo() {
  return (
    <div className={style.logoContainer}>
      <Image src={logo} width={40} height={40} alt="logo-city" />
      <div className={style.txtLogo}>KCD</div>
    </div>
  );
}
