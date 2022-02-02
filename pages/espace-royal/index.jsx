import axios from "axios";
import { useState } from "react";
import Layout from "../../components/Layout";
import style from "../../styles/RoyalSpace.module.css";

export default function RoyalAdmin() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [baseLine, setBaseLine] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handlePostMember = (e) => {
    e.preventDefault();
    axios
      .post(`api/royalCourt`, {
        name,
        role,
        baseLine,
        description,
        imageUrl,
      })
      .then(() => alert("Document successfully added"));
  };

  return (
    <Layout pageTitle="Pas roi? T mort">
      <div>ROYAL ADMIN</div>
      <div className={style.formContainer}>
        <form onSubmit={handlePostMember} className={style.formStyle}>
          <label htmlFor="name" className={style.labelInfoMembers}>
            <h3 className={style.titleInput}>Nom</h3>
            <input
              className={style.inputForm}
              maxLength={70}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>

          <label htmlFor="role" className={style.labelInfoMembers}>
            <h3 className={style.titleInput}>Role</h3>
            <input
              className={style.inputForm}
              maxLength={70}
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </label>

          <label htmlFor="baseline" className={style.labelInfoMembers}>
            <h3 className={style.titleInput}>Baseline</h3>
            <input
              className={style.inputForm}
              maxLength={70}
              value={baseLine}
              onChange={(e) => {
                setBaseLine(e.target.value);
              }}
            />
          </label>

          <label htmlFor="description" className={style.labelInfoMembers}>
            <h3 className={style.titleInput}>Description</h3>
            <input
              className={style.inputForm}
              maxLength={70}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </label>

          <label htmlFor="url" className={style.labelInfoMembers}>
            <h3 className={style.titleInput}>Url de photo</h3>
            <input
              className={style.inputForm}
              maxLength={70}
              value={imageUrl}
              onChange={(e) => {
                setImageUrl(e.target.value);
              }}
            />
          </label>

          <button className={style.sendBtn}>Valider les modifications</button>
        </form>
      </div>
    </Layout>
  );
}
