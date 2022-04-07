import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Infrared = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M10 3.333A6.674 6.674 0 0 0 3.333 10c.314 8.823 13.022 8.82 13.334 0A6.674 6.674 0 0 0 10 3.333ZM10 15c-6.607-.21-6.607-9.79 0-10 6.608.21 6.607 9.79 0 10Zm.833-7.5V10a.833.833 0 1 1-1.666 0V7.5a.833.833 0 0 1 1.666 0ZM20 10a10.022 10.022 0 0 1-2.286 6.364.833.833 0 1 1-1.286-1.062 8.377 8.377 0 0 0 0-10.605.834.834 0 0 1 1.286-1.061A10.021 10.021 0 0 1 20 10ZM3.572 15.303a.833.833 0 1 1-1.285 1.061 10.054 10.054 0 0 1 0-12.728.833.833 0 0 1 1.285 1.061 8.377 8.377 0 0 0 0 10.605Zm7.261-2.803a.833.833 0 1 1-1.666 0 .833.833 0 0 1 1.666 0Z"
      fill="currentColor"
    />
  </Svg>
)

export default Infrared