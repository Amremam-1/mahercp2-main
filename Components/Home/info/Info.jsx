import styles from "./styles.module.scss"
import { PiMedalLight } from "react-icons/pi"
import Link from "next/link"
import Image from "next/image"
import { useLocalization } from "@/hooks/useLocalization"
import classNames from "classnames"

const Info = () => {
  const { t, locale } = useLocalization()
  return (
    <div className="dark:bg-dark secContainer bg-white">
      <div className={styles.container}>
        <div className={styles.left_info}>
          <div className={styles.title}>
            <span>{t("info-01")}</span>
            <h3 className={`${styles.sub} dark:text-white`}>{t("info-02")}</h3>
            <div className="bar"></div>
          </div>

          <div className={`${styles.about_text}`}>
            <PiMedalLight className={styles.icon} />

            <div className={styles.text}>
              <h3 className="dark:text-white">{t("info-03")}</h3>
              <p className="color84 dark:text-white">{t("info-04")}</p>
            </div>
          </div>
        </div>
        <div className={styles.right_info}>
          <Image
            src={"/images/bg.jpg"}
            alt=""
            className={styles.img_main}
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
          />
          <Image
            src={"/images/1.png"}
            alt=""
            className={styles.img_three}
            width={0}
            height={0}
            sizes="100vw"
          />
          <div
            className={classNames(styles.img_two, {
              [styles.right]: locale === "ar",
              [styles.left]: locale === "en",
            })}
          >
            <Link href={""}>
              <Image
                src={"/images/about1.jpg"}
                alt=""
                className={styles.image}
                width={0}
                height={0}
                sizes="100vw"
              />
              <button className={`btn ${styles.contact}`}>
                {t("info-05")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Info
