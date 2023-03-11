import Divider from '@/components/Divider'
import landscapes from '@/utils/landscapesData'
import tiles from '@/utils/tilesData'
import styles from '../../styles/gallery.module.scss'
import sprites from '../../utils/spritesData'
export default function Gallery() {


  return (
    <div className={styles.container}>
      <h1 className={styles.landscapestitle}>Landscapes</h1>
      <div className={styles.landscapes}>
        {landscapes.map((item) => (
          <div className={styles.frames} key={item.id}>
            <img src={item?.image} alt={item?.alt} width={item?.width} height={item?.height} />
          </div>
        ))}
      </div>
      <h1 className={styles.spritestitle}>Sprites</h1>
      <div className={styles.sprites}>
        {sprites.map((item) => (
          <div className={styles.frames} key={item.id}>
            <img src={item?.image} alt={item?.alt} width={150} height={150} />
          </div>
        ))}
      </div>
      <h1 className={styles.tilestitle}>Tiles</h1>
      <div className={styles.tiles}>
        {tiles.map((item) => (
          <div className={styles.frames} key={item.id}>
            <img src={item?.image} alt={item?.alt} width={item?.width} height={item?.height} />
          </div>
        ))}
      </div>
    </div>
  )
}