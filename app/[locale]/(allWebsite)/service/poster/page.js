import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import ServiceDetail from "@/Components/poster/serviceDetails/ServiceDetail"
import MotionProjects from "@/Components/poster/projects-of-motion/MotionProjects"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function Poster(params) {
  unstable_setRequestLocale(params.locale)
  const messages = useMessages()
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية/",
      titleEn: "Main /",
    },
    {
      id: "02",
      link: "/",
      titleAr: "تصميم بوسترات اعلانيه",
      titleEn: "Designing advertising posters",
    },
  ]

  const pageTitle = [
    {
      titleAr: "تصميم بوسترات اعلانيه",
      titleEn: "Designing advertising posters",
    },
  ]
  return (
    <main>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <PageHead pageTitle={pageTitle} links={linksList} />
        <ServiceDetail />
        <BarLine />
        <MotionProjects />
      </NextIntlClientProvider>
    </main>
  )
}
