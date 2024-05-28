/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { TbMicrophone } from "react-icons/tb"
import { LiaPenAltSolid } from "react-icons/lia"
import { FaArrowRightLong } from "react-icons/fa6"

import { PiPresentation } from "react-icons/pi"
import { IoColorPaletteOutline } from "react-icons/io5"
import Image from "next/image"

import { useLocalization } from "@/hooks/useLocalization"

const projectContent = [
  {
    id: "1",
    img: "/images/design1.svg",
    titleAr: "التسجيل الصوتي",
    titleEn: "Voice Recording",
    subTitle: "يتوفر لدينا معلقين بجميع اللهجات العربية صوت رجالي نسائي",
    subTitleEn: "We offer voice-over artists in all Arabic dialect",
    icon: TbMicrophone,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/design2.svg",
    titleAr: "كتابة السيناريو",
    titleEn: "Scriptwriting",
    subTitleAr: "يكتب السيناريو في بداية المشروع من فريق متخصص",
    subTitleEn:
      "The script is written at the beginning of the project by a specialized team.",
    icon: LiaPenAltSolid,
    arrow: FaArrowRightLong,
  },
  {
    id: "3",
    img: "/images/design1.svg",
    titleAr: "تحريك الشخصية",
    titleEn: "Character Animation",
    subTitleAr:
      "لدينا فريق متخصص في تحريك الخصيات بما يتناسب مع السيناريو والتسجيل الصوتي والتفاعل الموسيقي",
    subTitleEn:
      "We have a specialized team for animating characters in accordance with the script, voice recording, and musical interaction.",
    icon: PiPresentation,
    arrow: FaArrowRightLong,
  },
  {
    id: "4",
    img: "/images/design2.svg",
    titleAr: "رسم",
    titleEn: "Drawing",
    subTitleAr: "يتم رسم السيناريو باحدث التقنيات",
    subTitleEn: "The script is illustrated using the latest technologies.",
    icon: IoColorPaletteOutline,
    arrow: FaArrowRightLong,
  },
]

const BoxService = () => {
  const { t, locale } = useLocalization()

  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <h2 className="dark:text-white">{t("box-01")}</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.wrapper}>
          {projectContent.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.services_box}>
                <div className={styles.services_img}>
                  <Image
                    src={item.img}
                    className={styles.img}
                    alt=""
                    width={0}
                    height={0}
                    loading="lazy"
                    sizes="100vw"
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.icon}>
                    <item.icon className={styles.icon_service} />
                  </div>
                  <h3>{locale === "en" ? item.titleEn : item.titleAr}</h3>
                </div>

                <div className={styles.content_hover}>
                  <div className={styles.d_table}>
                    <div className={styles.d_table_cell}>
                      <div className={styles.inner}>
                        <div className={styles.icon}>
                          <item.icon className={styles.icon_service} />
                        </div>

                        <h3>{locale === "en" ? item.titleEn : item.titleAr}</h3>
                        <p>
                          {locale === "en" ? item.subTitleEn : item.subTitleAr}
                        </p>
                        <item.arrow className={styles.arrow} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BoxService
