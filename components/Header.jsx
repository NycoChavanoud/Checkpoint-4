import Link from "next/link";
import style from "../styles/Header.module.css";
import Logo from "./logo";

export default function Header() {
  return (
    <header className={style.globalHeader}>
      <Link passHref href="/">
        <div className={style.logo}>
          <Logo />
        </div>
      </Link>
      <div className={style.containerHead}>
        <div className={style.titleGlobal}>Kingdom of Colchies Démocratia </div>
        <div className={style.navContainer}>
          <Link passHref href="/famille-royale">
            <div className={style.linkTitle}>La cour du roi</div>
          </Link>
          <Link passHref href="/billet-du-roi">
            <div className={style.linkTitle}>
              Le Billet d&apos;humeur du roi
            </div>
          </Link>
          <Link passHref href="/contact">
            <div className={style.linkTitle}>Contact</div>
          </Link>
        </div>
      </div>

      {/* <nav className={style.menu}></nav> */}
    </header>
  );
}
