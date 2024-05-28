import About from "@/Components/About/about/About"
import Service from "@/Components/About/service/Service"
import BarLine from "@/Components/Home/barLine/BarLine"
import PageHead from "@/Components/utils/PageHead/PageHead"

import { unstable_setRequestLocale } from "next-intl/server"
import { NextIntlClientProvider, useMessages } from "next-intl"
import pick from "lodash/pick"

export default function AboutPage(params) {
  unstable_setRequestLocale(params.locale)
  const messages = useMessages()

  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية  /",
      titleEn: "main   /",
    },
    {
      id: "02",
      link: "/",
      titleAr: "من نحن",
      titleEn: "Who we are",
    },
  ]

  const pageTitle = [
    {
      titleAr: "من نحن",
      titleEn: "Who we are",
    },
  ]

  return (
    <main>
      <NextIntlClientProvider messages={pick(messages, "HomePage")}>
        <PageHead pageTitle={pageTitle} links={linksList} />
        <About />
        <BarLine />
        <Service />
      </NextIntlClientProvider>
    </main>
  )
}
