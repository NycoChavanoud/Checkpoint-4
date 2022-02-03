import style from "../styles/MemberCard.module.css";

export default function MemberCard({
  name,
  role,
  baseLine,
  description,
  imageUrl,
}) {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardName}>{name}</div>
        <div className={style.cardBaseline}>{baseLine}</div>
        <div className={style.cardRole}>{role}</div>
        <div className={style.cardDescription}>{description}</div>

        <img className={style.photoCard} src={`/${imageUrl}`} alt={imageUrl} />
      </div>
    </>
  );
}
