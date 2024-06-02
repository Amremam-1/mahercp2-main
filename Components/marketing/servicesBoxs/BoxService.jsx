/* eslint-disable react/jsx-key */
import styles from "./styles.module.scss"
import { FaArrowRightLong } from "react-icons/fa6"
import { FaWhatsapp } from "react-icons/fa"
import { FiMessageCircle } from "react-icons/fi"
import { PiPresentation } from "react-icons/pi"
import { IoLogoGoogle } from "react-icons/io5"
import { useLocalization } from "@/hooks/useLocalization"

import Image from "next/image"

const projectContent = [
  {
    id: "1",
    img: "/images/chat.svg",
    titleAr: "تسويق واتس اب",
    titleEn: "WhatsApp Marketing",
    subTitle:
      "في ظل التطور الملحوظ في برنامج المراسلات الشهير واتساب اثبتت الدراسات بان برنامج واتساب من البرامج التي يهتم لها العمي ب الرسائل ولذلك قمنا بربط اعلانتنا ببرنامج واتساب لسهولة وظمان الوصول للرسائل بشكل ايجابي وخدمة المنشآت والخدمات المعلنة بإرسالها ألكبر عدد يصل إلى اكثر من 000.000.1 مليون مستخدم .",
    subTitleEn:
      "With the noticeable evolution of the famous messaging program WhatsApp, studies have shown that WhatsApp is one of the programs that users pay attention to messages. Therefore, we have linked our advertisements to WhatsApp for ease and to ensure positive message delivery. This service serves establishments and advertised services by sending them to the largest number possible, reaching over 1 million users.",
    icon: FaWhatsapp,
    arrow: FaArrowRightLong,
  },
  {
    id: "2",
    img: "/images/message.svg",
    titleAr: "ارسال رسائل اس ام اس",
    titleEn: "Sending SMS Messages",
    subTitle:
      "قوم بإرسال خدمات ونشاط العميل للعملاء كرسالة اس ام اس بشكل عشوائي او بحسب الفئات المستهدفة من قبل العميل",
    subTitleEn:
      "Send client services and activities to customers via SMS randomly or based on targeted categories chosen by the client.",
    icon: FiMessageCircle,
    arrow: FaArrowRightLong,
  },
  {
    id: "3",
    img: "/images/social.svg",
    titleAr: "خدمات تسويق السوشيال",
    titleEn: "Social Media Marketing",
    subTitle:
      "نقدم خدمات تسويق السوشيال ميديا بعد دراسة دقيقة للنشاط واستهداف الحسابات التي يكون مرتاديها من مهتمين هذا النشاط كما اننا نقوم بنشر اعلانك في السوشيال ميديا : إعالن مدفوع يظهر بحسب المنطقة او المدينة التي تختارها",
    subTitleEn:
      "We offer social media marketing services after conducting a thorough study of the business activity and targeting accounts frequented by individuals interested in this activity. Additionally, we publish your advertisement on social media: a paid advertisement that appears according to the region or city you choose.",
    icon: PiPresentation,
    arrow: FaArrowRightLong,
  },
  {
    id: "4",
    img: "/images/google.svg",
    titleAr: "اعلانات جوجل آد ورد",
    titleEn: "Google Ads",
    subTitle:
      "تقدم مجموعة جوجل العالمية خدمات اعلانات جوجل اد وورد للاعلانات على محركات البحث بحيث يحتل اسم نشاطك المرتبة الأولي في المحركات بحسب الكلمات التي يتم اختيارها من قبل العميل كما ان اننا نقوم ايضا بعرض اعلان العميل على اعلانات يوتيوب .",
    subTitleEn:
      "The global Google Group offers Google Ads and Word services for advertising on search engines, ensuring that your business name ranks first in search engines according to keywords selected by the client. Additionally, we also display the client's advertisement on YouTube ads.",
    icon: IoLogoGoogle,
    arrow: FaArrowRightLong,
  },
]

const BoxService = () => {
  const { t, locale } = useLocalization()
  return (
    <div className="secContainer bg-white dark:bg-black">
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
      <div className={styles.br_line}></div>
    </div>
  )
}

export default BoxService
