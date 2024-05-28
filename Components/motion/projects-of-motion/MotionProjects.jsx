/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
import { useLocalization } from "@/hooks/useLocalization"
const projects = [
  {
    image: "/images/motion1.jpg",
    titleAr: "اعلان تطبيق 2020",
    titleEn: "2020 App Advertisement",
    link: "https://www.youtube.com/watch?v=YL8ir86yyOs",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/motion2.jpg",
    titleAr: "اعلان منتجات رمضان",
    titleEn: "Ramadan Products Advertisement",
    link: "https://www.youtube.com/watch?v=iYFABXiv5bU",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/motion3.jpg",
    titleAr: "اعلان متجر نص",
    titleEn: "Nass Store Advertisement",
    link: "https://www.youtube.com/watch?v=VttKqczs4m8",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/motion4.jpg",
    titleAr: "اعلان MBN",
    titleEn: "MBN Advertisement",
    link: "https://www.youtube.com/watch?v=XtYkhjTSgDk",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/motion5.jpg",
    titleAr: "اعلان التجار متجر نص",
    titleEn: "Al-Tajir Store Advertisement",
    link: "https://www.youtube.com/watch?v=VGyQWBR8fvU",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/motion6.jpg",
    titleAr: "اعلان بيت الاستثمار",
    titleEn: "Beit Al-Istithmar Advertisement",
    link: "https://www.youtube.com/watch?v=58QJVC08Nzw",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/motion7.jpg",
    titleAr: "اعلان التاجر الدليل",
    titleEn: "Al Tajer Al Dalil Advertisement",
    link: "https://www.youtube.com/watch?v=fE2j7T7ddlU",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },

  {
    image: "/images/غلاف موشن جرافيك/اماطة.png",
    titleAr: "اعلان إماطه",
    titleEn: "Ematah Advertisement",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/غلاف موشن جرافيك/مركز حمد لضايفة الاطفال.png",
    titleAr: "اعلان مركز حمد لضيافة الاطفال",
    titleEn: "Hamad Child Hospitality Center Advertisement",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/غلاف موشن جرافيك/الجامعة السعودية الالكترونية.png",
    titleAr: "اعلان الجامعة السعودية الالكترونية",
    titleEn: "Saudi Electronic University Advertisement",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
  {
    image: "/images/غلاف موشن جرافيك/اثار.png",
    titleAr: "اعلان اثار",
    titleEn: "Thrilling Advertisement",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك /",
    subtitle1En: "Motion Graphics",

    subtitle2Ar: "تطبيقات",
    subtitle2En: "Applications",
  },
]

const MotionProjects = () => {
  const { t, locale } = useLocalization()
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>{t("details-02")}</span>
          <h2 className="dark:text-white">{t("home-h04")}</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.services_box}>
                <div className={styles.project_image}>
                  <Image
                    src={item.image}
                    className={styles.img}
                    width={0}
                    height={0}
                    alt=""
                    sizes="100vw"
                  />
                </div>

                <div
                  className={`${styles.project_content} color89 dark:bg-card`}
                >
                  <h3 className="dark:text-white">
                    <Link href={item.link}>
                      {locale === "en" ? item.titleEn : item.titleAr}
                    </Link>
                  </h3>
                  <ul>
                    <li
                      className={`${styles.line} color84 dark:opacity-70 dark:text-white`}
                    >
                      {locale === "en" ? item.subtitle1En : item.subtitle1Ar}
                    </li>
                    <li className="dark:text-white dark:opacity-70 color84">
                      {locale === "en" ? item.subtitle2En : item.subtitle2Ar}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MotionProjects
