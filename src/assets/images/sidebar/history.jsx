import * as React from "react"
import Svg, { Path } from "react-native-svg"

const History = (props) => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M9.167 11.436a1.653 1.653 0 0 1 0-2.872v-2.73a.833.833 0 1 1 1.666 0v2.73a1.654 1.654 0 0 1 0 2.872v1.897a.834.834 0 0 1-1.666 0v-1.897ZM10 0a.833.833 0 0 0 0 1.667 8.334 8.334 0 0 1 0 16.666A.833.833 0 1 0 10 20a10 10 0 0 0 0-20ZM1.523 5.653a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667ZM1.667 10A.833.833 0 1 0 0 10a.833.833 0 0 0 1.667 0Zm1.85-7.328a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667ZM6.484.701a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.667ZM1.522 12.68a.834.834 0 1 0 0 1.668.834.834 0 0 0 0-1.668Zm1.995 2.98a.833.833 0 1 0 0 1.667.833.833 0 0 0 0-1.666Zm2.965 1.973a.834.834 0 1 0 0 1.667.834.834 0 0 0 0-1.668Z"
      fill="currentColor"
    />
  </Svg>
)

export default History
