import React from "react"
import DateText from "../src/app/components/molecules/DateText"

const date = new Date("Mon Feb 24 2020 21:49:11 GMT+0900 (Japan Standard Time)")

export const dateText = () => <DateText date={date} />

export default {
  title: "Text/Date",
}
