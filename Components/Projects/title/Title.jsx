"use client"

import { useState } from "react"
import styles from "./styles.module.scss"
import BarLine from "@/Components/Home/barLine/BarLine"
import Image from "next/image"
import { useLocalization } from "@/hooks/useLocalization"

const projectContent = [
  {
    id: "1",
    img: "/images/p8.jpg",
    titleAr: "أعمال موشن جرافيك",
    titleEn: "Motion Graphics Work",
    subTitleAr: "موشن جرافيك",
    subTitleEn: "Motion Graphics",
  },
  {
    id: "2",
    img: "/images/p9.jpg",
    titleAr: "أعمال المواقع والتطبيقات",
    titleEn: "Web and App Development",
    subTitleAr: "تطبيقات ومواقع",
    subTitleEn: "Apps and Websites",
  },
  {
    id: "3",
    img: "/images/p10.jpg",
    titleAr: "أعمال وخدمات التسويق",
    titleEn: "Marketing Services",
    subTitleAr: "تسويق ومشاهير",
    subTitleEn: "Marketing and Influencers",
  },
  {
    id: "4",
    img: "/images/p11.jpg",
    titleAr: "أعمال وخدمات الانتاج الفني",
    titleEn: "Artistic Production Services",
    subTitleAr: "الانتاج الفني",
    subTitleEn: "Artistic Production",
  },
]

const bar = [
  {
    id: "0",
    btnbarAr: "الكل",
    btnbarEn: "All",
  },
  {
    id: "1",
    btnbarAr: "موشن جرافيك",
    btnbarEn: "Motion Graphics",
  },
  {
    id: "2",
    btnbarAr: "تطبيقات ومواقع",
    btnbarEn: "Apps and Websites",
  },
  {
    id: "3",
    btnbarAr: "تسويق الكتروني",
    btnbarEn: "Digital Marketing",
  },
  {
    id: "4",
    btnbarAr: "خدمات الانتاج الفني",
    btnbarEn: "Artistic Production Services",
  },
]

const GridItem = ({ img, locale }) => (
  <>
    <Image
      className={styles.img}
      src={img.img}
      alt={img.title}
      width={0}
      height={0}
      sizes="100vw"
      loading="lazy"
    />
    <div className={`${styles.content} color86 dark:bg-card`}>
      <h3 className="dark:text-white">
        {locale === "en" ? img.titleEn : img.titleAr}
      </h3>
      <span className="color84 dark:text-white">
        {locale === "en" ? img.subTitleEn : img.subTitleAr}
      </span>
    </div>
  </>
)

const Title = () => {
  const [activeBtn, setActiveBtn] = useState("0")

  const handleBtn = (buttonId) => {
    setActiveBtn(activeBtn === buttonId ? "" : buttonId)
  }

  const { t, locale } = useLocalization()
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <h2 className=" dark:text-white">{t("info-06")}</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.filtering_btns}>
            <div className={styles.toolbar}>
              {bar.map((item) => (
                <button
                  onClick={() => handleBtn(item.id)}
                  className={`${styles.navigation} ${
                    activeBtn === item.id ? styles.active : ""
                  } dark:bg-card color86`}
                  key={item.btnbarAr}
                >
                  <span className="dark:text-white">
                    {locale === "en" ? item.btnbarEn : item.btnbarAr}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.uk_grid}>
            {projectContent
              .filter((item) => activeBtn === "0" || item.id === activeBtn)
              .map((item) => (
                <div key={item.titleAr} className={styles.main}>
                  <GridItem img={item} locale={locale} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Title
