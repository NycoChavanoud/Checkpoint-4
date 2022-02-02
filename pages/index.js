import Layout from "../components/Layout";
import style from "../styles/Home.module.css";
import Image from "next/image";
import accueil from "../public/landscape.jpg";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <Layout pageTitle="Le Royaume de la démocratie">
      <div className={style.textHomeContainer}></div>
      <Slider />
    </Layout>
  );
}
