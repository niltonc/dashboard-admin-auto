import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const HomeIcon = (props) => (
  <Svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        d="M38.535 15.115 25.893 2.472a8.347 8.347 0 0 0-11.786 0L1.465 15.115A4.964 4.964 0 0 0 0 18.65v16.362a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5V18.65a4.964 4.964 0 0 0-1.465-3.535ZM25 36.678H15v-6.556a5 5 0 0 1 10 0v6.556Zm11.667-1.666A1.667 1.667 0 0 1 35 36.678h-6.667v-6.556a8.333 8.333 0 1 0-16.666 0v6.556H5a1.667 1.667 0 0 1-1.667-1.666V18.65a1.68 1.68 0 0 1 .489-1.178L16.463 4.833a5.014 5.014 0 0 1 7.074 0l12.641 12.644c.31.312.486.733.489 1.173v16.362Z"
        fill="#196FA9"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h40v40H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default HomeIcon