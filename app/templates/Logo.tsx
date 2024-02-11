import { AppConfig } from "../components/utils/AppConfig";
import Image from "next/image";
type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? "44" : "32";
  const fontStyle = props.xl
    ? "font-semibold text-3xl"
    : "font-semibold text-xl";

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <Image
        src={"/images/logo.svg"}
        height={95}
        width={95}
        alt=""
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
