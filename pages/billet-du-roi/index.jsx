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
        Dans sa grandeur, Son altesse Sereinissime fait par à l&apos;ensemble de
        ces travaux à l&apos;ensemble de ces sujets. Comme la démocratie est un
        principe fondamental de notre belle cité, vos réactions sont les
        bienvenues.
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
            Pensée royale suivante...
          </button>
          <button className={style.fakeBtn}>Une réclammation?</button>
        </div>
      </div>
    </Layout>
  );
}
