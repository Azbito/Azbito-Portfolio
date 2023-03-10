import Image from "next/image";
import styles from './card.module.scss'
type CardsProps = {
  image: string,
  alt: string,
  title: string,
  description: string,
  iconSizeX: number,
  iconSizeY: number,
  buttonTitle: string
}

export default function Card({ image, alt, title, description, iconSizeX, iconSizeY, buttonTitle }: CardsProps) {
  return (
    <div className={styles.card}>
      <Image src={image} alt={alt} width={iconSizeX} height={iconSizeY} />
      <h1>{title}</h1>
      <p>{description}</p>
      <button>{buttonTitle}</button>
    </div>
  )
}