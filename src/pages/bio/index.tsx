import Image from 'next/image'
import styles from '../../styles/bio.module.scss'

export default function Bio() {
  const technologiesRow = [{
    id: 1,
    image: "images/javascript.svg",
    alt: "Javascript",
    width: 50,
    height: 50
  },
  {
    id: 2,
    image: "images/typescript.svg",
    alt: "Typescript",
    width: 50,
    height: 50
  },
  {
    id: 3,
    image: "images/react.svg",
    alt: "React",
    width: 50,
    height: 50
  },
  {
    id: 4,
    image: "images/nextjs.svg",
    alt: "Next.JS",
    width: 50,
    height: 50
  }, {
    id: 5,
    image: "images/html.svg",
    alt: "HTML",
    width: 50,
    height: 50
  }, {
    id: 6,
    image: "images/sass.svg",
    alt: "SASS",
    width: 50,
    height: 50
  },
  {
    id: 7,
    image: "images/css.svg",
    alt: "CSS",
    width: 50,
    height: 50
  },
  {
    id: 8,
    image: "images/styledcomponents.svg",
    alt: "Styled Components",
    width: 50,
    height: 50
  },
  {
    id: 9,
    image: "images/axios.svg",
    alt: "Axios",
    width: 45,
    height: 50
  },
  {
    id: 10,
    image: "images/lua.svg",
    alt: "Lua",
    width: 50,
    height: 50
  }, {
    id: 11,
    image: "images/love2d.svg",
    alt: "LÖVE",
    width: 50,
    height: 50
  }]

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Image src="images/book.svg" alt="Book" width={80} height={80} />
        <h1>About me</h1>
        <div className={styles.description}>
          <p>My name is Thiago and my nickname is Azbito. I'm 18, brazilian, front-end developer and artist. I'm able to talk in Portuguese, English and French. I speak English since my 10 years old and French since my 16 years old. Studying coding since november, 2022, I decided to deepen in this branch.</p>
        </div>
        <h1>Technologies</h1>

        <div className={styles.skills}>
          {technologiesRow.map((item) => (
            <div key={item.id}>
              <Image src={item?.image} alt={item?.alt} width={item?.width} height={item?.height} />
            </div>
          ))}
        </div>
        <div>
          <h1>Tools</h1>
          <div className={styles.tools}>
            <Image src="images/vscode.svg" alt="VSCode" width={50} height={50} />
            <Image src="images/windows.svg" alt="Windows" width={50} height={50} />
            <Image src="images/linux.svg" alt="Linux" width={50} height={50} />
          </div>
        </div>
      </div>
    </div>
  )
}