import { RepositoryProps } from '@/@types/repositoryProps'
import repositoriesData from '@/utils/repositoriesData'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '../../styles/repositories.module.scss'


export default function Repositories() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Repositories</h1>
        <div className={styles.repositories}>
          {repositoriesData.map((item: RepositoryProps) => (
            <div className={styles.thumbnails}>
              <img onClick={() => router.push(`repositories/${item.path}`)} src={item?.image} alt={item?.alt} />
              <strong>{item?.title}</strong>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}
