import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Action = (props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M16.748 2.59 14.939.723A2.391 2.391 0 0 0 13.234 0H9.5a3.965 3.965 0 0 0-3.88 3.167h-.078a3.963 3.963 0 0 0-3.959 3.958v7.917A3.963 3.963 0 0 0 5.542 19h4.75a3.963 3.963 0 0 0 3.958-3.958v-.08a3.965 3.965 0 0 0 3.167-3.879v-6.84a2.365 2.365 0 0 0-.67-1.653Zm-6.456 14.827h-4.75a2.375 2.375 0 0 1-2.375-2.375V7.125A2.375 2.375 0 0 1 5.542 4.75v6.333A3.963 3.963 0 0 0 9.5 15.042h3.167a2.375 2.375 0 0 1-2.375 2.375Zm3.166-3.959H9.5a2.375 2.375 0 0 1-2.375-2.375V3.958A2.375 2.375 0 0 1 9.5 1.583h3.167v1.584A1.583 1.583 0 0 0 14.25 4.75h1.583v6.333a2.375 2.375 0 0 1-2.375 2.375Z"
      fill="currentColor"
    />
  </Svg>
)

export default Action
