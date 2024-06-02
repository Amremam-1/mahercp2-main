import ServiceDetail from "@/Components/motion/serviceDetails/ServiceDetail"
import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import BoxService from "@/Components/motion/servicesBoxs/BoxService"
import MotionProjects from "@/Components/motion/projects-of-motion/MotionProjects"
import Pricing from "@/Components/motion/pricing/Pricing"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function Technique(params) {
  unstable_setRequestLocale(params.locale)
  const messages = useMessages()

  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "Main  /",
    },
    {
      id: "02",
      link: "/",
      titleAr: "موشن جرافيك",
      titleEn: "Motion graphics",
    },
  ]
  const pageTitle = [
    {
      titleAr: "موشن جرافيك",
      titleEn: "Motion graphics",
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
        <BarLine />
        <Pricing />
      </NextIntlClientProvider>
    </main>
  )
}
