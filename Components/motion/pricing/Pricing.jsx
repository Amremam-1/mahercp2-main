import styles from "./styles.module.scss"
import Link from "next/link"
import { useLocalization } from "@/hooks/useLocalization"

const Pricing = () => {
  const { t } = useLocalization()
  
  return (
    <section className={`${styles.section} color89  dark:bg-dark bg-white`}>
      <div className="secContainer">
        <div className={styles.container}>
          <div className={`${styles.Title} conTitle`}>
            <h2 className="dark:text-white">{t("pricing-01")}</h2>
            <span>{t("pricing-02")}</span>
            <div className={`${styles.barbro} bar`}></div>
          </div>

          <div className={styles.uk_grid}>
            <div className={styles.item}>
              <div
                className={`${styles.single_pricing_box} dark:bg-card dark:shadow-none shadow11`}
              >
                <div className={styles.pricing_header}>
                  <h3 className="dark:text-white">{t("pricing-03")}</h3>
                </div>
                <div className={styles.price}>
                  $10
                  <span>{t("pricing-04")}</span>
                </div>
                <div className={styles.pricing_des}>
                  <p>{t("pricing-05")}</p>
                </div>
                <div className={styles.pricing_features}>
                  <ul>
                    <li>{t("pricing-06")}</li>
                    <li>{t("pricing-07")}</li>
                    <li>{t("pricing-08")}</li>
                    <li>{t("pricing-09")}</li>
                    <li>{t("pricing-010")}</li>
                  </ul>
                </div>

                <Link href={""}>
                  <button className={`btn ${styles.contact}`}>
                    {t("pricing-011")}
                  </button>
                </Link>
              </div>
            </div>

            <div className={styles.item}>
              <div
                className={`${styles.single_pricing_box} ${styles.single_pricing_box_active}`}
              >
                <ul className={styles.circles}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>

                <div className={styles.pricing_header}>
                  <h3>{t("pricing-012")}</h3>
                </div>
                <div className={styles.price}>
                  $15
                  <span>{t("pricing-04")}</span>
                </div>
                <div className={styles.pricing_des}>
                  <p>{t("pricing-013")}</p>
                </div>
                <div className={styles.pricing_features}>
                  <ul>
                    <li>{t("pricing-06")}</li>
                    <li>{t("pricing-07")}</li>
                    <li>{t("pricing-08")}</li>
                    <li>{t("pricing-09")}</li>
                    <li>{t("pricing-010")}</li>
                  </ul>
                </div>

                <Link href={""}>
                  <button className={styles.contact}>{t("pricing-011")}</button>
                </Link>
              </div>
            </div>

            <div className={styles.item}>
              <div
                className={`${styles.single_pricing_box} dark:bg-card dark:shadow-none shadow11`}
              >
                <div className={styles.pricing_header}>
                  <h3 className="dark:text-white">{t("pricing-014")}</h3>
                </div>
                <div className={styles.price}>
                  $13
                  <span>{t("pricing-015")}</span>
                </div>
                <div className={styles.pricing_des}>
                  <p>{t("pricing-016")}</p>
                </div>
                <div className={styles.pricing_features}>
                  <ul>
                    <li>{t("pricing-06")}</li>
                    <li>{t("pricing-07")}</li>
                    <li>{t("pricing-08")}</li>
                    <li>{t("pricing-09")}</li>
                    <li>{t("pricing-010")}</li>
                  </ul>
                </div>

                <Link href={""}>
                  <button className={`btn ${styles.contact} dark:btnDark`}>
                    {t("pricing-011")}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.br_line}></div>
      </div>
    </section>
  )
}

export default Pricing
