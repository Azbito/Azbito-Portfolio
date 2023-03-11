import Image from "next/image";
import { ButtonHTMLAttributes } from "react";
import Button, { ButtonProps } from "../Button";
import styles from './card.module.scss'

type CardsProps = {
  image: string,
  alt: string,
  title: string,
  description: string,
  iconSizeX: number,
  iconSizeY: number,
  backgroundColor?: string,
  buttonProps?: ButtonProps
}

export default function Card({ image, alt, title, description, iconSizeX, iconSizeY, buttonProps, backgroundColor }: CardsProps) {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <Image src={image} alt={alt} width={iconSizeX} height={iconSizeY} />
      <h1>{title}</h1>
      <p>{description}</p>
      {buttonProps && <Button {...buttonProps} />}
    </div>
  )
}