/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { FaArrowRightLong } from "react-icons/fa6"
import { BsFilm } from "react-icons/bs"
import Image from "next/image"
import { IoIosMusicalNote } from "react-icons/io"
import { FiCamera } from "react-icons/fi"
import { SiMaterialdesignicons } from "react-icons/si"
import { useLocalization } from "@/hooks/useLocalization"

const projectContent = [
  {
    id: "1",
    img: "/images/design2.svg",
    titleAr: "اعمال الموشن جرافيك",
    titleEn: "Motion Graphics Work",
    subTitleAr:
      "نرسم الخطط والشخصيات بنا ًء لعميل لفكرة ا ونقوم بعمل موشن جرافيك اعلانات او شروحات او مسلسلات يومية قصيرة لأصحاب الأعمال الأهلية والقطاعات الحكومية",
    subTitleEn:
      "We design plans and characters based on the client's idea and create motion graphics for advertisements, tutorials, or short daily series for private businesses and government sectors.",
    icon: SiMaterialdesignicons,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/sound.svg",
    titleAr: "الأعمال الصوتية",
    titleEn: "Audio Production",
    subTitleAr:
      "في الأعمال الصوتية نهتم في دقة الهندسة الصوتية ونقدم اعمال التسجيلات الصوتية بشكل عام من اغاني وقصائد واعمال صوتية تجارية للتسويق عن الخدمات واالعمال",
    subTitleEn:
      "In audio production, we focus on precise audio engineering and offer a variety of audio recording services, including songs, poems, and commercial audio work for marketing services and products.",
    icon: IoIosMusicalNote,
    arrow: FaArrowRightLong,
  },
  {
    id: "3",
    img: "/images/viedo.svg",
    titleAr: "تصوير الفيديو",
    titleEn: "Video Shooting",
    subTitleAr:
      "نوفر فريق متكامل لتصوير الأعلانات والبرامج والمسلسلات والأعمال التلفزيونية واعمال اليوتيوب ومختصون في تصوير اللقاءات التي تبين اعمال ومهام اصحاب الأعمال ونغطي حسابات السوشيال ميديا بتصوير العمال والخدمات",
    subTitleEn:
      "We provide a comprehensive team for shooting advertisements, programs, series, TV shows, and YouTube content. We specialize in filming interviews that showcase the work and tasks of business owners, and we cover social media accounts by filming their activities and services.",
    icon: BsFilm,
    arrow: FaArrowRightLong,
  },
  {
    id: "4",
    img: "/images/photo.svg",
    titleAr: "التصوير الفوتوغرافي",
    titleEn: "Photography",
    subTitleAr:
      "في القسم الفتوتوغرافي نقوم باخراج الصور باحترافية عالية ونقدم خدماتنا للعميل لتصوير المنتجات والتصوير الشخصي وتصوير المنشآت والمناسبات ومشاركتها فالسوشيال ميديا",
    subTitleEn:
      "In the photography department, we produce high-quality, professional images. We offer our services for product photography, personal photography, as well as photographing establishments and events, and sharing them on social media.",
    icon: FiCamera,
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
