import React from "react"
import { Text } from "@chakra-ui/core"
import { secToTime } from "../../ui-domain/Time"

type Props = {
  sec: number
}

const TimeText = ({ sec }: Props) => <Text>{secToTime(sec)}</Text>

export default TimeText
