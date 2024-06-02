import styles from "./styles.module.scss"

const BarLine = () => {
  return (
    <div className="dark:bg-black bg-white">
      <div className={`${styles.br_line}`}></div>
    </div>
  )
}

export default BarLine
