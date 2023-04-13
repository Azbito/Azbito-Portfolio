import { useRouter } from 'next/router'
import styles from '../../../styles/repository.module.scss'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NextApiRequest } from 'next';
import { RepositoryProps } from '@/@types/repositoryProps';
import repositoriesData from '@/utils/repositoriesData';
import Image from 'next/image';

interface RepoProps {
  data: RepositoryProps
}

export default function Repository({ data }: RepoProps) {
  const router = useRouter()
  const { repository } = router.query

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>{data.title}</h1>
        {repository == "league_habilities" ?
          <p className={styles.description}>{data.infos?.description.substring(0, 94)} <strong onClick={() => router.push(`${data.infos?.descriptionLink}`)}>{data.infos?.description.substring(94, 106)}</strong>{data.infos?.description.substring(106, data.infos?.description.length)}</p>
          :
          <p className={styles.description}>{data.infos?.description}</p>
        }

      </div>

      {repository != "moontempo" ?
        <p className={styles.screenshotstitle}>Screenshots</p>
        :
        <></>
      }

      <center>

        <div className={repository == 'find_me_mobile' ? styles.carouselFindMeMobile : styles.carousel} >
          <Carousel autoPlay interval={2000} axis="horizontal" showIndicators={false} showArrows={true} stopOnHover >
            {data.infos?.screenshots?.map((item) => (
              <div key={item?.id}>
                <Image src={item?.image} alt={item?.alt} layout="responsive" width={1280} height={720} />

              </div>
            ))}
          </Carousel>

          {
            repository == "moontempo" ?
              <div className={styles.moontempoButtons}>
                <div className={styles.moontempoButtonDiv}>
                  <p className={styles.moontempoButtonTitle}>Javascript Library</p>
                  <div className={styles.moontempoButton} onClick={() => router.push(`${data.repositoryLink}`)}>
                    <Image src="/images/github.png" alt="Repository link" width={50} height={50} />
                    <p>Go to repository</p>
                  </div>
                  <div className={styles.moontempoNpmButton} onClick={() => router.push(`${data.npmLink}`)}>
                    <Image src="/images/npm.png" alt="Npm link" width={50} height={50} />
                    <p>Go to repository</p>
                  </div>
                </div>
                <div className={styles.moontempoButtonDiv}>
                  <p className={styles.moontempoButtonTitle}>Lua Library</p>
                  <div className={styles.moontempoButton} onClick={() => router.push(`${data.repositoryOtherLink}`)}>
                    <Image src="/images/github.png" alt="Repository link" width={50} height={50} />
                    <p>Go to repository</p>
                  </div>
                  <div className={styles.moontempoLuaRocksButton} onClick={() => router.push(`${data.luaRocksLink}`)}>
                    <Image src="/images/luarocks.png" alt="Package link" width={50} height={50} />
                    <p>Go to package</p>
                  </div>
                </div>
              </div>

              :
              <div className={styles.repositoryButton} onClick={() => router.push(`${data.repositoryLink}`)}>
                <Image src="/images/github.png" alt="Repository link" width={50} height={50} />
                <p>Go to repository</p>
              </div>
          }
        </div>

      </center>

    </div >
  )
}

export async function getServerSideProps(req: NextApiRequest) {
  const name: any = req.query.repository
  const data: any = repositoriesData.find(
    (item: RepositoryProps) => item.path == name.toLowerCase()
  )

  return {
    notFound: !data,
    props: {
      data
    }
  }
}