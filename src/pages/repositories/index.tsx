import { RepositoryProps } from '@/@types/repositoryProps'
import axios from 'axios'
import { useRouter } from 'next/router'
import styles from '../../styles/repositories.module.scss'

type RepositoriesProps = {
  data: RepositoryProps[]
}

export default function Repositories({ data }: RepositoriesProps) {
  const router = useRouter()


  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Repositories</h1>
        <div className={styles.repositories}>
          {data.map((item: RepositoryProps) => (
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

export async function getServerSideProps() {
  try {
    const { data } = await axios.get('https://azbito.vercel.app/repositories/api/repositories')
    return {
      props: {
        data
      }
    }
  } catch (error) {
    return {
      props: {
        data: null
      }
    }
  }
}
