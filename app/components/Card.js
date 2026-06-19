import Image from "next/image";
import styles from "./Card.module.css";

export default function Card({ name, blurb, rating, emoji,image }) {
  return (
    <article className={styles.card}>
       {image && image.startsWith('/') || image && image.startsWith('http') ? (
  <Image src={image} alt={""} width={400} height={240} />
) : (
  <div className={styles.emoji}>{emoji}</div>
)}

      <h2>{name}</h2>
      <p>{blurb}</p>
      <p className="stars">{"⭐".repeat(rating)}</p>
    </article>
  );
}