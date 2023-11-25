import Svg, { SvgProps, Path } from "react-native-svg";

const IonCard = (props: SvgProps) => (
  <Svg width={128} height={128} viewBox="0 0 512 512" {...props}>
    <Path
      fill="currentColor"
      d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56Z"
    />
  </Svg>
);

export { IonCard };
