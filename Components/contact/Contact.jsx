import Link from "next/link"
import styles from "./styles.module.scss"
import { HiOutlineMail } from "react-icons/hi"
import { IoIosPhonePortrait } from "react-icons/io"
import { IoLocationOutline } from "react-icons/io5"
import Image from "next/image"
import classNames from "classnames"
import { useLocalization } from "@/hooks/useLocalization"

const Contact = () => {
  const { t, locale } = useLocalization()
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>{t("contact-01")}</span>
          <h2 className="dark:text-white">{t("contact-02")}</h2>
        </div>

        <div className={styles.uk_grid}>
          <div className={styles.right_contact}>
            <div className={styles.contact_box}>
              <h2 className={styles.title}>{t("contact-03")}</h2>

              <div className={styles.address_box}>
                <div className={styles.address_icon}>
                  <HiOutlineMail className={styles.icon} />
                </div>
                <div className={styles.address_text}>
                  <span>{t("contact-04")}</span>
                  <Link href="">INFO@MAHERCP.NET</Link>
                </div>
              </div>
              <div className={styles.address_box}>
                <div className={styles.address_icon}>
                  <IoIosPhonePortrait className={styles.icon} />
                </div>
                <div className={styles.address_text}>
                  <span>{t("contact-05")}</span>
                  <Link href="tel:+920006942">+920006942</Link>
                </div>
              </div>
              <div className={styles.address_box}>
                <div className={styles.address_icon}>
                  <IoLocationOutline className={styles.icon} />
                </div>
                <div className={styles.address_text}>
                  <span>{t("contact-06")}</span>
                  <p className={styles.desc}>{t("footer-03")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.left_contact}>
            <Image
              className={styles.img_email}
              src={"/images/mail.gif"}
              alt=""
              width={158}
              height={158}
              loading="lazy"
              sizes="100vw"
            />

            <form id="contactForm" className={styles.form}>
              <div className={styles.item}>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder={t("placeholder-name")}
                />
              </div>
              <div className={styles.item}>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder={t("contact-04")}
                />
              </div>
              <div className={styles.item}>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder={t("contact-05")}
                />
              </div>
              <div className={styles.item}>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className={`${styles.uk_input} color87 dark:bg-card`}
                  placeholder={t("placeholder-subject")}
                />
              </div>
              <div className={styles.item_mes}>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  className={`${styles.uk_textarea} color87 dark:bg-card`}
                  placeholder={t("placeholder-message")}
                ></textarea>
              </div>
              <button className={`btn ${styles.contact}`} type="sumbit">
                {t("contact-07")}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.br_line}></div>
    </div>
  )
}

export default Contact
