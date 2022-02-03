import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import style from "../../styles/Joke.module.css";

const API_URL = "https://api.blablagues.net/?rub=blagues";

export default function RoyalMessage() {
  const [textHead, setTextHead] = useState("");
  const [text, setText] = useState("");
  const [textHidden, setTextHidden] = useState("");

  const fectchJoke = () => {
    axios
      .get(API_URL)
      .then((res) => res.data)
      .then((data) => {
        setTextHead(data.data.content.text_head);
        setText(data.data.content.text);
        setTextHidden(data.data.content.text_hidden);
      });
  };

  useEffect(() => {
    fectchJoke();
  }, []);

  return (
    <Layout pageTitle="Les humeurs de SAS">
      <div className={style.titlePageJoke}>
        Billet d&apos;humeur de votre bon roi
      </div>
      <div className={style.textPageJoke}>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut pariatur
        itaque sit modi tenetur rerum, asperiores repellendus beatae qui
        corrupti ratione a vel alias esse et explicabo harum accusamus iusto
        fugit perferendis tempore? At iste error voluptatibus adipisci, facilis
        numquam, hic vel dolores ullam, ea earum sed iusto quia nobis!{" "}
      </div>

      <div className={style.jokeContainer}>
        <div className={style.titleJoke}>
          {!textHead ? "" : <span> {textHead} </span>}
        </div>
        <div className={style.contentJoke}>
          {!text ? "" : <span> {text} </span>}
        </div>
        <div className={style.responseJoke}>
          {!textHidden ? (
            ""
          ) : (
            <div className={style.textResponse}>
              {" "}
              Voir réponse
              <span className={style.textHidden}>{textHidden} </span>{" "}
            </div>
          )}
        </div>
        <div className={style.btnContainer}>
          <button onClick={fectchJoke} className={style.btnFetch}>
            Vous en voulez encore?
          </button>
          <button className={style.fakeBtn}>Une réclammation?</button>
        </div>
      </div>
    </Layout>
  );
}
