import Image from "next/image";

export const HeaderLeft = () => {
  return (
    <>
      <Image src="/airbnb.svg" alt="logo" width="122" height="42" />
      <Image src="/airbnbmobile.svg" alt="logo" width="102" height="42" />
    </>
  );
};
