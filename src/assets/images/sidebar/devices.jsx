import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Devices = (props) => (
  <Svg
    width={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.4}
      d="M16.076 2h3.386A2.549 2.549 0 0 1 22 4.56v3.415a2.549 2.549 0 0 1-2.538 2.56h-3.386a2.549 2.549 0 0 1-2.539-2.56V4.56A2.549 2.549 0 0 1 16.076 2Z"
      fill="currentColor"
    />
    <Path
      d="M4.539 2h3.385a2.549 2.549 0 0 1 2.539 2.56v3.415a2.549 2.549 0 0 1-2.539 2.56H4.54A2.549 2.549 0 0 1 2 7.974V4.56A2.549 2.549 0 0 1 4.539 2Zm0 11.466h3.385a2.549 2.549 0 0 1 2.539 2.56v3.414A2.55 2.55 0 0 1 7.924 22H4.54A2.55 2.55 0 0 1 2 19.44v-3.415a2.549 2.549 0 0 1 2.539-2.56Zm14.923 0h-3.386a2.549 2.549 0 0 0-2.539 2.56v3.414A2.55 2.55 0 0 0 16.076 22h3.386A2.55 2.55 0 0 0 22 19.44v-3.415a2.549 2.549 0 0 0-2.538-2.56Z"
      fill="currentColor"
    />
  </Svg>
)

export default Devices