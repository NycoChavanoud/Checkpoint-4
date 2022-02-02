import Link from "next/link";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.globalFooter}>
      <div className={style.containerFooter}>
        <div>créé par @RoyalDistrict</div>
        <Link passHref href="/espace-royal">
          <div className={style.linkRoyalAdmin}>Espace ROYAL</div>
        </Link>
      </div>
    </footer>
  );
}
