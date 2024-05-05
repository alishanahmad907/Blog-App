import CardList from '@/components/cardList/CardList'
import styles from './blogpage.module.css'
import Menu from '@/components/Menu/Menu'

const page = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Style Blog</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
        </div>
    </div>
  )
}

export default page