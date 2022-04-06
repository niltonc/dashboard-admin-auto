import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Logo = (props) => (
  <Svg
    width={46}
    height={50}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.74 19.043h-.004c-.654-.002-1.207-.471-1.23-1.08-.015-.39.025-.783.03-1.175.042-2.906-.703-5.597-2.312-8.017-2.327-3.5-5.596-5.575-9.737-6.288-.355-.06-.734-.146-1.035-.33-.436-.266-.558-.828-.391-1.328.171-.51.508-.825 1.017-.825l.09.003c.63.044 1.264.143 1.881.286 2.798.646 5.27 1.94 7.409 3.852.645.577 1.226 1.227 1.647 1.653 2.894 3.723 4.176 7.672 3.837 12.121-.054.708-.51 1.128-1.202 1.128Z"
      fill="#196FA9"
      opacity="0.5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.307 19.057c-.03 0-.06 0-.09-.002-.694-.037-1.156-.528-1.123-1.237.064-1.38-.072-2.74-.576-4.028-1.416-3.618-4.082-5.693-7.908-6.288-.52-.081-1.005-.167-1.245-.719-.381-.873.189-1.759 1.1-1.759.048 0 .097.003.147.008 2.539.259 4.781 1.223 6.717 2.884.481.413.924.87 1.214 1.146 2.205 2.732 3.182 5.63 2.98 8.91-.04.66-.532 1.085-1.216 1.085Z"
      fill="#196FA9"
      opacity="0.8"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M26.188 19.169c-.04 0-.082-.002-.124-.005-.721-.057-1.168-.581-1.108-1.35.125-1.588-.336-2.966-1.447-4.113-.817-.842-1.821-1.313-2.976-1.503-.31-.05-.65-.158-.89-.348-.434-.346-.495-.905-.248-1.417.223-.464.565-.698 1.049-.698.058 0 .119.003.182.01 2.078.228 3.766 1.183 5.11 2.748 1.265 1.642 1.85 3.47 1.654 5.528-.068.715-.539 1.148-1.202 1.148ZM11.57 14.563c-3.949 0-7.943 1.056-10.652 2.984L3.49 22.55c1.79-1.423 4.5-2.296 7.116-2.296 3.856 0 5.693 1.79 5.693 4.867h-5.693C3.075 25.122 0 28.152 0 32.513c0 4.27 3.443 7.483 9.228 7.483 3.626 0 6.198-1.193 7.529-3.443v3.076h6.702V25.535c0-7.483-4.36-10.972-11.89-10.972Zm-.552 20.613c-2.525 0-4.04-1.194-4.04-2.984 0-1.653 1.056-2.893 4.407-2.893h4.913v2.525c-.827 2.25-2.892 3.352-5.28 3.352Z"
      fill="#196FA9"
      
    />
  </Svg>
)

export default Logo