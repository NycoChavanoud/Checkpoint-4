import Layout from "../components/Layout";
import style from "../styles/Home.module.css";
import Slider from "../components/Slider";
import Link from "next/link";

export default function Home() {
  return (
    <Layout pageTitle="Le Royaume de la démocratie">
      <div className={style.contentHomePageContainer}>
        <Slider />
        <div className={style.cardsLinkContainer}>
          <Link passHref href="/famille-royale">
            <div className={style.cardsLink}>LE ROI (et les autres...)</div>
          </Link>
          <Link passHref href="/billet-du-roi">
            <div className={style.cardsLink}>INFORMATION ROYALES</div>
          </Link>
          <Link passHref href="/contact">
            <div className={style.cardsLinkLast}>LE ROI A VOTRE ECOUTE</div>
          </Link>
        </div>
      </div>
      <div className={style.textHomeContainer}>
        <div className={style.titleTextHome}>
          Bienvenue dans notre belle démocratie.
        </div>
        <div className={style.textHome}>
          Ici, chaque citoyen est libre et égal en droit, dès lors qu&apos;il
          est en total accord avec Son Altesse Sérénissime. Il est le meilleur
          des roi, beau, bon, humble... Chaque jour il se nourrit de
          l&apos;amour de ses sujets pour écrire son histoire à la plume de son
          âme.
          <div className={style.signRoyal}> Votre bon roi : Nycos Premier</div>
        </div>
      </div>
    </Layout>
  );
}
