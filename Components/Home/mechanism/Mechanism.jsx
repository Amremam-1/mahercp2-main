"use client"

import styles from "./styles.module.scss"

import { MdCall } from "react-icons/md"
import { IoSettingsSharp } from "react-icons/io5"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { FaFileContract } from "react-icons/fa6"
import Image from "next/image"
import { useLocalization } from "@/hooks/useLocalization"
import classNames from "classnames"

const mechanism_work = [
  {
    icon: MdCall,
    titleAr: "تواصل معنا",
    titleEn: "Get in touch with us.",
    subtitleAr: "قدم لنا أفكارك ونساعدك بأفكارنا",
    subtitleEn: "Share your ideas with us and we'll help you with ours",
    color:
      "linear-gradient(to bottom, #d89287, #e08071, #e66c5a, #ea5743, #ec3d2a)",
  },
  {
    icon: IoSettingsSharp,
    titleAr: "نقدم لك الدراسة",
    titleEn: "We present to you the study.",
    subtitleAr: "نقدم لك الدراسة المجانية المبسطة لفكرتك",
    subtitleEn: "We offer you the simplified free study of your idea.",
    color:
      "linear-gradient(to bottom, #78cfc6, #66c8c0, #51c1ba, #37bab4, #00b3af);",
  },
  {
    icon: AiOutlineShoppingCart,
    titleAr: "تسليمها لك",
    titleEn: "Handing it over to you.",
    subtitleAr: "نسلمك الدراسة المجانية ومن ثم عمل اجتماع لمناقشتها",
    subtitleEn:
      "We deliver the free study to you, followed by a meeting to discuss it.",
    color:
      "linear-gradient(to top, #ee3e0c, #f25e00, #f57900, #f79100, #f8a815);",
  },
  {
    icon: FaFileContract,
    titleAr: "توقيع العقد",
    titleEn: "Signing the contract.",
    subtitleAr:
      "خطوة التنفيذ هي الإطلاع على العقد ومن ثم يتم توقيعه والبدء في تنفيذ المشروع",
    subtitleEn: "Review the contract, sign it, start the project.",
    color:
      "linear-gradient(to top, #a830f1, #b02ef3, #b82cf5, #bf2af7, #c727f9);",
  },
]

const Mechanism = () => {
  const { t, locale } = useLocalization()

  return (
    <div className="dark:bg-dark secContainer fixed">
      <div className={styles.shape_circle}>
        <Image
          className={`${styles.image} dark:opacity-10`}
          src={"/images/shape-img2.png"}
          width={305}
          height={600}
          alt=""
          sizes="100vw"
        />
      </div>
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>{t("mechanism-01")}</span>
          <h2 className="dark:text-white">{t("mechanism-02")}</h2>
          <div className="bar"></div>
        </div>

        <div
          className={classNames(styles.arrow, {
            [styles.right]: locale === "ar",
            [styles.left]: locale === "en",
          })}
        >
          <Image
            src={"/images/arrow_ar.png"}
            alt=""
            width={0}
            height={0}
            className={styles.arrowImg}
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className={styles.uk_grid}>
          {mechanism_work.map((item, index) => (
            <div
              className={`${styles.item} ${
                index === 0 || index === 2 ? styles.itemWithMargin : ""
              }`}
              key={index}
            >
              <div className={styles.single_process}>
                <div className={styles.icon} style={{ background: item.color }}>
                  <item.icon className={styles.uk_icon} />
                </div>

                <div className={styles.content_process}>
                  <h3 className="dark:text-white">
                    {locale === "en" ? item.titleEn : item.titleAr}
                  </h3>
                  <span className=" dark:text-white color:84">
                    {locale === "en" ? item.subtitleEn : item.subtitleAr}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Mechanism
