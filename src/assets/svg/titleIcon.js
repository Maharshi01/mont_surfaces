import * as React from "react"
import Svg, { Path } from "react-native-svg"

const TitleIcon = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={35} height={30} {...props}>
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#d9d9d9",
        fillOpacity: 1,
      }}
      d="m5.762 17.648 2.781 5.04L17.258.262l16.797 20.914-4.672 8.691H.207Zm0 0"
    />
    <Path
      style={{
        stroke: "none",
        fillRule: "evenodd",
        fill: "#000",
        fillOpacity: 1,
      }}
      d="m17.219 0 16.996 21.16L29.46 30H0l5.754-12.648 2.77 5.023Zm.043.621 11.922 29.113H.414l5.36-11.793L8.561 23ZM29.398 29.56l4.5-8.372L17.727 1.06Zm0 0"
    />
    <Path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#000",
        fillOpacity: 1,
      }}
      d="M29.508 29.992 17.383.262l16.8 20.914Zm0 0"
    />
  </Svg>
)

export default TitleIcon
