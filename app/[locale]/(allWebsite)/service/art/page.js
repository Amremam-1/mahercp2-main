import MotionProjects from "@/Components/Art/projects-of-motion/MotionProjects"
import ServiceDetail from "@/Components/Art/serviceDetails/ServiceDetail"
import BoxService from "@/Components/Art/servicesBoxs/BoxService"
import BarLine from "@/Components/Home/barLine/BarLine"

import PageHead from "@/Components/utils/PageHead/PageHead"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function Art(params) {
  unstable_setRequestLocale(params.locale)
  const messages = useMessages()

  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية/",
      titleEn: "main /",
    },
    {
      id: "02",
      link: "/",
      titleAr: "خدمات التصوير واالنتاج الفني",
      titleEn: "Photography and Video Production Services",
    },
  ]

  const pageTitle = [
    {
      titleAr: "خدمات التصوير واالنتاج الفني",
      titleEn: "Photography and Video Production Services",
    },
  ]

  return (
    <main>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <PageHead pageTitle={pageTitle} links={linksList} />
        <ServiceDetail />
        <BarLine />
        <BoxService />
        <MotionProjects />
      </NextIntlClientProvider>
    </main>
  )
}
