import Image from "next/image";
import { FC } from "react";

interface HeaderLeft {
  longLogo: boolean;
}

export const HeaderLeft: FC<HeaderLeft> = ({ longLogo }) => {
  return (
    <>
      {longLogo ? (
        <Image src="/airbnb.svg" alt="logo" width="102" height="42" />
      ) : (
        <Image src="/airbnbsmall.svg" alt="logo" width="122" height="42" />
      )}
    </>
  );
};
