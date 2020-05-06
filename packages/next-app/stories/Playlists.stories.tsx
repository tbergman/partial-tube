import React from "react"
import { UserDecorator } from "./Decorators"
import { Playlists } from "../src/layouts/Playlists"
import { playlistsMock } from "../__mocks__/PlaylistCollection"

export const playlists = () => (
  <Playlists onClickCard={(id) => console.log(id)} playlists={playlistsMock} />
)

export default {
  title: "Layouts",
  decorators: [UserDecorator],
}