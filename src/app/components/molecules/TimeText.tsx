import React from "react"
import { Text, BoxProps } from "@chakra-ui/core"
import { secToTime } from "../../ui-domain/Time"

type Props = {
  sec: number
} & BoxProps

export const TimeText = ({ sec, ...props }: Props) => (
  <Text {...props}>{secToTime(sec)}</Text>
)
