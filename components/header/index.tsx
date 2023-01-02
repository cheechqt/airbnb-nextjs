import { HeaderLeft } from "./HeaderLeft";
import { HeaderMid } from "./HeaderMid";
import { HeaderRight } from "./HeaderRight";
import { LearnMore } from "./LearnMore";
import { useWindowSize } from "utils/useWindowSize";
import styles from "styles/Header.module.scss";

export const Header = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width > 750 ? (
        <>
          <LearnMore />
          <div className={styles.container}>
            <HeaderLeft longLogo={width > 950} />
            <HeaderMid />
            <HeaderRight />
          </div>
        </>
      ) : (
        <div>123</div>
      )}
    </>
  );
};
