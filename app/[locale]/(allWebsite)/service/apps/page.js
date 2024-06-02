import ServiceDetail from "@/Components/apps/serviceDetails/ServiceDetail"
import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import MotionProjects from "@/Components/apps/projects-of-motion/MotionProjects"
import BoxService from "@/Components/apps/servicesBoxs/BoxService"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function Apps(params) {
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
      titleAr: "تطبيقات ومواقع",
      titleEn: "Applications and websites",
    },
  ]

  const pageTitle = [
    {
      titleAr: "تطبيقات ومواقع",
      titleEn: "Applications and websites",
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
