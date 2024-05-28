/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { CiMobile2 } from "react-icons/ci"
import { FaArrowRightLong } from "react-icons/fa6"
import { GiPuzzle } from "react-icons/gi"
import { HiOutlineLightBulb } from "react-icons/hi"

import Image from "next/image"
import { useLocalization } from "@/hooks/useLocalization"

const projectContent = [
  {
    id: "1",
    img: "/images/android.svg",
    titleAr: "شركة تصميم تطبيقات اندرويد",
    titleEn: "A company that designs Android applications.",
    subTitleAr:
      "يستخدم نظام اندرويد من قبل العديد من الشركات المصممة للهواتف الذكية مثل سامسونج والعديد من العالمات التجارية األخرى. لذلك يجب عليك الحرص على امتالك تطبيق خاص بشركتك بنظام اندرويد",
    subTitleEn:
      "Android is used by many smartphone manufacturers such as Samsung and many other brands. Therefore, you should ensure that your company has its own Android application.",
    icon: CiMobile2,
    icon2: GiPuzzle,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/ios.svg",
    titleAr: "شركة تصميم تطبيقات آي او اس",
    titleEn: "A company that designs iOS applications.",
    subTitleAr:
      "الحصول على تطبيق بنظام آي او اس للعمل على هواتف ايفون من االشياء الهامة لزيادة فرص التواصل بين تطبيقك والعالم الخارجي بسبب التزايد المستمر ألفراد المستخدمين لاليفون و اآليباد",
    subTitleEn:
      "Obtaining an iOS application for iPhones is essential to increase opportunities for communication between your application and the outside world due to the continuous growth in the number of iPhone and iPad users.",
    icon: CiMobile2,
    icon2: HiOutlineLightBulb,
    arrow: FaArrowRightLong,
  },
]

const BoxService = () => {
  const { t, locale } = useLocalization()

  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <h2 className="dark:text-white">{t("box-02")}</h2>
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
                          <item.icon2 className={styles.icon_service} />
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
