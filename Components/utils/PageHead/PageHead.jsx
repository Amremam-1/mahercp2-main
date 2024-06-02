
import styles from "./styles.module.scss"
import Link from "next/link"
import { useLocalization } from "@/hooks/useLocalization"

const PageHead = ({ pageTitle, links }) => {
  const { locale } = useLocalization()
  return (
    <section className={styles.pageHead}>
      <div className={styles.container}>
        <div className={styles.pageInfo}>
          {pageTitle.map((item, index) => (
            <h1 className={styles.title} key={index}>
              {locale === "en" ? item.titleEn : item.titleAr}
            </h1>
          ))}
          <ul className={styles.linksList}>
            {links?.map((item, index) => (
              <li
                className={
                  links.length === index + 1
                    ? styles.linkItemActive
                    : styles.linkItem
                }
                key={index}
              >
                <Link className={styles.link} href={item.link}>
                  {locale === "en" ? item.titleEn : item.titleAr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default PageHead
