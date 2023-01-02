import { HeaderLeft } from "./HeaderLeft";
import { HeaderMid } from "./HeaderMid";
import { HeaderRight } from "./HeaderRight";
import { LearnMore } from "./LearnMore";
import styles from "styles/Header.module.scss";

export const Header = () => {
  return (
    <>
      <LearnMore />
      <div className={styles.container}>
        <HeaderLeft />
        <HeaderMid />
        <HeaderRight />
      </div>
    </>
  );
};
