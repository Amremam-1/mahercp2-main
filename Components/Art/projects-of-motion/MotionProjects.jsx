/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
import { useLocalization } from "@/hooks/useLocalization"

const projects = [
  {
    image: "/images/art1.jpg",
    titleAr: "مثال اعلان فندق",
    titleEn: "Hotel Advertisement Example",
    link: "https://www.youtube.com/watch?v=vXWF9F4AWv0",
    subtitle1Ar: "اعلان فندق",
    subtitle1En: "Hotel Advertisement",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art2.jpg",
    titleAr: "صمم اعلانك",
    titleEn: "Design Your Advertisement",
    link: "https://www.youtube.com/watch?v=2Iw2Lmp3C2c",
    subtitle1Ar: "امثلة مختلفة",
    subtitle1En: "Various Examples",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art3.jpg",
    titleAr: "صمم بوستر",
    titleEn: "Design a Poster",
    link: "https://www.youtube.com/watch?v=b_PxieiZkLU",
    subtitle1Ar: "بوسترات للميديا",
    subtitle1En: "Media Posters",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art4.jpg",
    titleAr: "اعلان متجر بوست",
    titleEn: "Store Ad Poster",
    link: "https://www.youtube.com/shorts/Mlo3zC7El_g",
    subtitle1Ar: "بوسترات للميديا",
    subtitle1En: "Media Posters",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art5.jpg",
    titleAr: "اعلان المذاق المغربي",
    titleEn: "Moroccan Taste Ad",
    link: "https://www.youtube.com/watch?v=HRVtFk0QZZU",
    subtitle1Ar: "اعلان تشويقي",
    subtitle1En: "Teaser Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "",
    titleAr: "اعلان منتجات رمضان متجر نص",
    titleEn: "Ramadan Store Ads",
    link: "https://www.youtube.com/watch?v=FbllP3JHLU8",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art6.jpg",
    titleAr: "مستشفى سليمان فقيه",
    titleEn: "Sulaiman Faqih Hospital",
    link: "https://www.youtube.com/watch?v=FbllP3JHLU8",
    subtitle1Ar: "تصميم مقدمة للشعار ",
    subtitle1En: "Logo Introduction Design",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art7.jpg",
    titleAr: "اعلان العماري للذهب",
    titleEn: "Al-Amari Gold Ad",
    link: "https://www.youtube.com/watch?v=m2Agqk-KdXU",
    subtitle1Ar: "اعلان بسيط بطلب العميل",
    subtitle1En: "Client-Requested Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art8.jpg",
    titleAr: "اعلان لقناة فضائية",
    titleEn: "Satellite Channel Ad",
    link: "https://www.youtube.com/watch?v=RdAYeshXCLg",
    subtitle1Ar: "برومو تشويقي للبرامج",
    subtitle1En: "Program Teaser Promo",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art9.jpg",
    titleAr: "كليب ما نوفيه",
    titleEn: "Ma Noufi Music Video",
    link: "https://www.youtube.com/watch?v=qxBbafuvwco",
    subtitle1Ar: "من اعمالنا الحصرية",
    subtitle1En: "From Our Exclusive Works",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art10.jpg",
    titleAr: "برنامج لقناة فضائية",
    titleEn: "Satellite Channel Program",
    link: "https://www.youtube.com/watch?v=ELpjDRjxVc8&t=3s",
    subtitle1Ar: "برنامج أفضل معلم سياحي",
    subtitle1En: "The Best Tourist Guide Program",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art11.jpg",
    titleAr: "بطاقة تهنئة",
    titleEn: "Greeting card.",
    link: "https://www.youtube.com/watch?v=5sqqkB7vW_c",
    subtitle1Ar: " مثال لبطائق التهنئة ",
    subtitle1En: "An example of greeting cards",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/art12.jpg",
    titleAr: "كيف تكون قدوة",
    titleEn: "How to be an example",
    link: "https://www.youtube.com/watch?v=8AlTrJv2BQ4",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/motion1.jpg",
    titleAr: "اعلان تطبيق 2020",
    titleEn: "Application Ad 2020",
    link: "https://www.youtube.com/watch?v=YL8ir86yyOs",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/motion3.jpg",
    titleAr: "اعلان متجر نص",
    titleEn: "Helf Ad ",
    link: "https://www.youtube.com/watch?v=VttKqczs4m8",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/motion4.jpg",
    titleAr: " اعلان MBN",
    titleEn: "MBN",
    link: "https://www.youtube.com/watch?v=XtYkhjTSgDk",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/motion5.jpg",
    titleAr: "اعلان التجار متجر نص",
    titleEn: "Merchants Ad a text store",
    link: "https://www.youtube.com/watch?v=VGyQWBR8fvU",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2En: "اعمال M11 للانتاج الفني",
  },
  {
    image: "",
    titleAr: "اعلان بيت الاستثمار",
    titleEn: "Investment House Ad",
    link: "https://www.youtube.com/watch?v=58QJVC08Nzw",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "",
    titleAr: "اعلان التاجر الدليل",
    titleEn: "Dealer Ad guide",
    link: "https://www.youtube.com/watch?v=fE2j7T7ddlU",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  // {
  //   image: "/images/project26.jpg",
  //   titleAr: "سيتم اضافة المزيد قريبا ",
  //   titleEn: "سيتم اضافة المزيد قريبا ",
  //   link: "",
  //   subtitle1Ar: "الموقع قيد التطوير soon ",
  //   subtitle1En: "The site is under development soon",

  //   subtitle2Ar: "اعمال M11 للانتاج الفني",
  //   subtitle2En: "M11 Artistic Productions",
  // },

  {
    image: "/images/غلاف فديو/v1.png",
    titleAr: "اعلان يوم التأسيس",
    titleEn: "Foundation Day",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/d2.png",
    titleAr: "اعلان متجر D2",
    titleEn: "D2 Store",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/four.png",
    titleAr: "اعلان متجر Four",
    titleEn: "Four Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/just.png",
    titleAr: " اعلان متجر Just_Chill",
    titleEn: "Just_Chill Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/kim.png",
    titleAr: "اعلان متجر كيمس",
    titleEn: "Kims Store Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",
    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/poplar.png",
    titleAr: "اعلان متجر Poplar",
    titleEn: "Poplar Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/queez.png",
    titleAr: "اعلان متجر queez",
    titleEn: "queez Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/saya5.png",
    titleAr: "اعلان متجر SAYA5",
    titleEn: "SAYA5 Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/shrimp.png",
    titleAr: "اعلان متجر SHRIMP_ANATOMY",
    titleEn: "SHRIMP_ANATOMY",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/tols.png",
    titleAr: "اعلان متجر Tols",
    titleEn: "Tols Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/عالم السكوتر.png",
    titleAr: "عالم السكوتر",
    titleEn: "The world of the scooter",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/المذاق المغربي.png",
    titleAr: "المذاق المغربي",
    titleEn: "Moroccan taste",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/mbn.png",
    titleAr: "MBN",
    titleEn: "MBN",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/فرغلي.png",
    titleAr: "اعلان متجر فرغلي",
    titleEn: "Fragley store advertisement",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/ملحمة.png",
    titleAr: "ملحمه",
    titleEn: "Epic",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/منتج منفذ.png",
    titleAr: "اعلان متجر VINI",
    titleEn: "VINI Advertisement",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/costa.png",
    titleAr: "اعلان متجر Costa",
    titleEn: "Costa",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/مبهر.png",
    titleAr: "اعلان متجر مبهر",
    titleEn: "Dazzling Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/مدارس كواكب.png",
    titleAr: "مدارس كواكب",
    titleEn: "Kawakab schools",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/منيو.png",
    titleAr: "اعلان متجر منيو",
    titleEn: "Menu Store Ad",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/نخبة.png",
    titleAr: "اعلان متجر نخبه",
    titleEn: "Elite Store",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
  {
    image: "/images/غلاف فديو/ورد الرياض.png",
    titleAr: "اعلام متجر ورد الرياض",
    titleEn: "Riyadh flower shop media",
    link: "",
    subtitle1Ar: "اعلان موشن جرافيك",
    subtitle1En: "Motion Graphics Ad",

    subtitle2Ar: "اعمال M11 للانتاج الفني",
    subtitle2En: "M11 Artistic Productions",
  },
]

const MotionProjects = () => {
  const { t, locale } = useLocalization()
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>{t("box-03")}</span>
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
                    <li className="color84 dark:text-white">
                      {locale === "en" ? item.subtitle1En : item.subtitle1Ar}
                    </li>
                    <li
                      className={`${styles.line} color84 dark:opacity-70 dark:text-white`}
                    >
                      {locale === "en" ? item.subtitle2En : item.subtitle2Ar}
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
