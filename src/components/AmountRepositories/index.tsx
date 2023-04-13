import repositoriesData from '@/utils/repositoriesData';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import styles from './amountrepositories.module.scss'

export default function AmountRepositories() {
  return (
    <div className={styles.container}>
      <HistoryEduIcon className={styles.icon} />
      <strong>{repositoriesData.length}</strong>
    </div>
  )
}