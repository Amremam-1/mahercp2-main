import ServiceDetail from "@/Components/marketing/serviceDetails/ServiceDetail"
import PageHead from "@/Components/utils/PageHead/PageHead"
import BarLine from "@/Components/Home/barLine/BarLine"
import BoxService from "@/Components/marketing/servicesBoxs/BoxService"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function Marketing(params) {
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
      titleAr: "خدمات التسويق لالكتروني",
      titleEn: "Electronic Marketing Services",
    },
  ]

  const pageTitle = [
    {
      titleAr: "خدمات التسويق لالكتروني",
      titleEn: "Electronic Marketing Services",
    },
  ]

  return (
    <main>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <PageHead pageTitle={pageTitle} links={linksList} />
        <ServiceDetail />
        <BarLine />
        <BoxService />
      </NextIntlClientProvider>
    </main>
  )
}
