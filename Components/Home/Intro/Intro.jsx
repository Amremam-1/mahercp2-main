import { useLocale, useTranslations } from "next-intl"
import styles from "./styles.module.scss"
import Link from "next/link"
import classNames from "classnames"
// import classNames from "classnames"
const Intro = () => {
  const t = useTranslations("HomePage")
  const locale = useLocale()

  return (
    <>
      <div className="dark:bg-dark secContainer">
        <div className={styles.container}>
          <div
            className={classNames(styles.intro, {
              [styles.arabic]: locale === "ar",
              [styles.english]: locale === "en",
            })}
          >
            <div className={styles.main_banner}>
              <h1 className="dark:text-white">{t("home-i01")}</h1>
              <p className="color84 dark:text-white">{t("home-i02")}</p>

              <Link href={""}>
                <button className={`btn ${styles.contact}`}>
                  {t("home-i03")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro
