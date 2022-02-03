import style from "../styles/MemberCard.module.css";
import Image from "next/image";

export default function MemberCard({
  name,
  role,
  baseline,
  description,
  imageUrl,
}) {
  return (
    <>
      <div className={style.cardContainer}>
        <div className={style.cardName}>{name}</div>
        <div className={style.cardBaseline}>{baseline}</div>
        <div className={style.cardRole}>{role}</div>
        <div className={style.cardDescription}>{description}</div>
        <Image
          key={imageUrl}
          src={imageUrl}
          className={style.photoCard}
          alt=""
          layout="intrinsic"
        />
      </div>
    </>
  );
}
