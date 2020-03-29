import React from "react"
import AppHeader from "./AppHeader"
import { UserAvatar } from "../components/Avatar/UserAvatar"
import * as User from "../models/User"

type Props = {
  children: React.ReactNode
  user: User.Model
}

export const Authenticated: React.FC<Props> = (props) => (
  <AppHeader component={<UserAvatar name={props.user.name} />}>
    {props.children}
  </AppHeader>
)
