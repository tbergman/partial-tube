import React from "react"
import { StackList } from "../atoms/StackList"
import { PartialVideoCard, Props as PVProps } from "../molecules/PartialVideoCard"

export type Props = {
  partialVideoList: ReadonlyArray<PVProps>
}

export const PartialVideoCardList: React.FC<Props> = ({ partialVideoList }) => (
  <StackList
    spacing={8}
    list={partialVideoList}
    component={p => <PartialVideoCard {...p} />}
  />
)
