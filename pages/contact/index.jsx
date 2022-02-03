import { useState } from "react";
import Image from "next/image";
import avatar from "../../public/avatar.jpeg";

// import emailjs from "@emailjs/browser";
import Layout from "../../components/Layout";

import style from "../../styles/Contact.module.css";

export default function Contact() {
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       process.env.REACT_APP_EMAILJS_SERVICEID,
  //       process.env.REACT_APP_EMAILJS_TEMPLATEID,
  //       form.current,
  //       process.env.REACT_APP_EMAILJS_KEYID
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setName("");
  //         setMessage("");
  //         setPhone("");
  //         setEmail("");
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  // };
  return (
    <Layout pageTitle="êtes-vous certain?">
      <div>
        <div className={style.formHeaderContainer}>
          <div className={style.txtHeaderContact}>
            Formulaire designé par le neveu du roi, chef du PHP Crew du palais
          </div>
          <div className={style.avatarContainer}>
            <Image src={avatar} width="200px" height="200px" alt="avatar" />
          </div>
        </div>
        <form className={style.formContactStyle}>
          <label htmlFor="name" className={style.labelContactMembers}>
            <h3 className={style.titleInput}>Nom</h3>
            <input
              required
              className={style.inputForm}
              maxLength={70}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              disabled={processing}
            />
          </label>

          <label htmlFor="phone" className={style.labelContactMembers}>
            <h3 className={style.titleInput}>Téléphone</h3>
            <input
              required
              className={style.inputForm}
              maxLength={70}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              disabled={processing}
            />
          </label>

          <label htmlFor="email" className={style.labelContactMembers}>
            <h3 className={style.titleInput}>Email</h3>
            <input
              required
              className={style.inputForm}
              maxLength={70}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              disabled={processing}
            />
          </label>

          <label htmlFor="message" className={style.labelContactMembers}>
            <h3 className={style.titleInput}>Message</h3>
            <textarea
              required
              className={style.inputForm}
              maxLength={70}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              disabled={processing}
            />
          </label>
          <div className={style.btnContainer}>
            <button className={style.sendBtn}>Envoyer</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
