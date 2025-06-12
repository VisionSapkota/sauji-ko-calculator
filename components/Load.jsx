import styles from '@/styles/styles.module.css'

const Load = () => {
  return (
    <span className={`block w-5 h-5 border-2 border-white border-t-transparent rounded-full ${styles.animateLoad}`}></span>
  )
}

export default Load