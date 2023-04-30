import { RepositoryProps } from '@/@types/repositoryProps'
import repositoriesData from '@/utils/repositoriesData'
import { useRouter } from 'next/router'
import styles from '../../styles/repositories.module.scss'
import AmountRepositories from '@/components/AmountRepositories'


export default function Repositories() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <b>Repositories</b>
        <AmountRepositories />
        <div className={styles.repositories}>
          {repositoriesData.map((item: RepositoryProps) => (
            <div className={styles.thumbnails}>
              <img onClick={() => router.push(`repositories/${item.path}`)} src={item?.image} alt={item?.alt} />
              <p>{item?.title}</p>
            </div>
          ))
          }
        </div>
      </div>
    </div>
  )
}
