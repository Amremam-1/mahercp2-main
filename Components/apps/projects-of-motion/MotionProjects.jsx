/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"

import { useLocalization } from "@/hooks/useLocalization"

const projects = [
  {
    image: "/images/project1.png",
    titleAr: "متجر نص | Half",
    titleEn: "Half",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://noo9.net/",
  },
  {
    image: "/images/project2.png",
    titleAr: "D2020  موقع",
    titleEn: "D2020",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "http://d2020.net/",
  },
  {
    image: "/images/project3.png",
    titleAr: "تطبيق sasty",
    titleEn: "Sasty",
    subtitleAr: "تطبيق اندرويد و ios",
    subtitleEn: "Android and iOS application",
    link: "https://apps.apple.com/sa/app/mokolo-store/id1639348915?l=ar",
  },
  {
    image: "/images/project4.PNG",
    titleAr: "نموذج لشرطة منطقة مكة",
    titleEn: "Mecca region police model",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "",
  },
  {
    image: "/images/project5.png",
    titleAr: "العربي للنشر والتوزيع",
    titleEn: "Arabic Publishing & Distribution",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://alarabipublishing.com.eg/",
  },
  {
    image: "/images/project6.png",
    titleAr: "بي ستيم",
    titleEn: "Bay Steam",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://be-steam.com/",
  },
  {
    image: "/images/project7.png",
    titleAr: "TIA",
    titleEn: "TIA",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://tiawikiride.com/web-app",
  },
  {
    image: "/images/project8.png",
    titleAr: "متجر نص | Half",
    titleEn: "Half",
    subtitleAr: "تطبيق اندرويد و ios",
    subtitleEn: "Android and iOS application",
    link: "https://play.google.com/store/apps/details?id=com.yosefmoq.half",
  },
  {
    image: "/images/project9.PNG",
    titleAr: "تطبيق سيارتك",
    titleEn: "Your Car App",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "",
  },
  {
    image: "/images/project10.PNG",
    titleAr: "تطبيق مطبخي",
    titleEn: "My Kitchen App",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "",
  },
  {
    image: "/images/project11.PNG",
    titleAr: "تطوير تطبيق بقالة",
    titleEn: "Grocery App Development",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "",
  },
  {
    image: "/images/project12.png",
    titleAr: "BE-STEAM Parent",
    titleEn: "BE-STEAM Parent",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://play.google.com/store/apps/details?id=com.besteam.parentapp",
  },
  {
    image: "/images/project13.PNG",
    titleAr: "تطبيق الاتحاد السعودي للجودو",
    titleEn: "Saudi Judo Federation",
    subtitleAr: "تطبيق اندرويد و ios",
    subtitleEn: "Android and iOS application",
    link: "https://apps.apple.com/sa/app/%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D9%84%D9%84%D8%AC%D9%88%D8%AF%D9%88/id1540464201?l=ar",
  },
  {
    image: "/images/project14.PNG",
    titleAr: "تطبيق مياه تالا",
    titleEn: "Tala Water",
    subtitleAr: "تطبيق اندرويد و ios",
    subtitleEn: "Android and iOS application",
    link: "",
  },
  {
    image: "/images/project15.PNG",
    titleAr: "موقع الاتحاد السعودي للملاكمة",
    titleEn: "Saudi Boxing Federation",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://apps.apple.com/sa/app/%D8%A7%D9%84%D8%A7%D8%AA%D8%AD%D8%A7%D8%AF-%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A-%D9%84%D9%84%D8%AC%D9%88%D8%AF%D9%88/id1540464201?l=ar",
  },
  {
    image: "/images/project16.PNG",
    titleAr: "تطبيق دليل 2020",
    titleEn: "Guide 2020",
    subtitleAr: "تطبيق اندرويد و ios",
    subtitleEn: "Android and iOS application",
    link: "https://apps.apple.com/sa/app/%D8%AF%D9%84%D9%8A%D9%84-2020/id1628257046?l=ar",
  },
  {
    image: "/images/project17.PNG",
    titleAr: " موقع M11",
    titleEn: "Website M11",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://m11.tv/",
  },
  {
    image: "/images/project18.PNG",
    titleAr: "منيو ومتجر حلبي",
    titleEn: "A Syrian menu and store",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://alrawaq.net/",
  },
  {
    image: "/images/project19.png",
    titleAr: "tarboush",
    titleEn: "tarboush",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://play.google.com/store/apps/details?id=com.tarboush",
  },
  {
    image: "/images/project20.png",
    titleAr: "حج وعمرة البدل",
    titleEn: "Pilgrimage and Umrah as a substitute.",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",

    link: "https://play.google.com/store/apps/details?id=com.greencodet.badal_umrah_and_hajj_user",
  },
  {
    image: "/images/project21.png",
    titleAr: "Nafud",
    titleEn: "Nafud",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://apps.apple.com/us/app/nafud/id1548203737",
  },
  {
    image: "/images/project22.png",
    titleAr: "Fast son!c",
    titleEn: "Fast son!c",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://apps.apple.com/us/app/fast-son-c/id1611183041",
  },
  {
    image: "/images/project23.png",
    titleAr: "Pwell",
    titleEn: "Pwell",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://apps.apple.com/us/app/pwell/id1495054131",
  },
  {
    image: "/images/project24.png",
    titleAr: "Ilya Tours",
    titleEn: "Ilya Tours",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://play.google.com/store/apps/details?id=com.greencodet.ilya_tours",
  },
  {
    image: "/images/project25.png",
    titleAr: "Ryalto",
    titleEn: "Ryalto",
    subtitleAr: "موقع الكتروني",
    subtitleEn: "Website",
    link: "https://play.google.com/store/apps/details?id=com.ryaltoapp.rightnurse&hl=ar&gl=US",
  },
  {
    image: "/images/project26.jpg",
    titleAr: "سيتم الرفع قريبا",
    titleEn: "The launch will happen soon",
    subtitleAr: "الموقع قيد التطوير",
    subtitleEn: "The website is under development.",
    link: "",
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
                    <Link target="_blank" href={item.link}>
                      {locale === "en" ? item.titleEn : item.titleAr}
                    </Link>
                  </h3>
                  <ul>
                    <li className="color84  dark:text-white">
                      {locale === "en" ? item.subtitleEn : item.subtitleArAr}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.br_line}></div>
    </div>
  )
}

export default MotionProjects
