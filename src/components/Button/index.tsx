import { ButtonHTMLAttributes } from "react"
import styles from './button.module.scss'

export type ButtonProps = {
  title?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ title, ...props }: ButtonProps) {
  return <button className={styles.button} {...props}>{title}</button>
}