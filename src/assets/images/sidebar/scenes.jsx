import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Scenes = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.833 0H4.167A4.172 4.172 0 0 0 0 4.167v11.666A4.172 4.172 0 0 0 4.167 20h11.666A4.172 4.172 0 0 0 20 15.833V4.167A4.172 4.172 0 0 0 15.833 0ZM4.167 1.667h11.666a2.5 2.5 0 0 1 2.5 2.5v11.666a2.459 2.459 0 0 1-.25 1.071l-7.635-7.636a4.166 4.166 0 0 0-5.894 0l-2.887 2.887V4.167a2.5 2.5 0 0 1 2.5-2.5Zm0 16.666a2.5 2.5 0 0 1-2.5-2.5v-1.321l4.065-4.065a2.5 2.5 0 0 1 3.536 0l7.636 7.636c-.333.163-.7.249-1.07.25H4.166Z"
      fill="currentColor"
    />
    <Path
      opacity={0.6}
      d="M13.333 8.75a2.916 2.916 0 1 0 0-5.833 2.916 2.916 0 0 0 0 5.833Zm0-4.167a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z"
      fill="currentColor"
    />
  </Svg>
)

export default Scenes
