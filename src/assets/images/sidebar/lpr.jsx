import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Lpr = (props) => (
  <Svg
    width={19}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M15.042 2.375H3.958A3.963 3.963 0 0 0 0 6.333v4.75a3.963 3.963 0 0 0 3.958 3.959h4.75v.791H6.333a.792.792 0 1 0 0 1.584h6.334a.792.792 0 0 0 0-1.584h-2.375v-.791h4.75A3.963 3.963 0 0 0 19 11.083v-4.75a3.963 3.963 0 0 0-3.958-3.958Zm2.375 8.708a2.375 2.375 0 0 1-2.375 2.375H3.958a2.375 2.375 0 0 1-2.375-2.375v-4.75a2.375 2.375 0 0 1 2.375-2.375h11.084a2.375 2.375 0 0 1 2.375 2.375v4.75Z"
      fill="currentColor"
    />
  </Svg>
)

export default Lpr
