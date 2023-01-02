import { BiSearch } from "react-icons/bi";
import styles from "styles/Header.module.scss";

export const HeaderMid = () => {
  return (
    <div className={styles["mid"]}>
      <div className={styles["mid-container"]}>
        <button>Anywhere</button>
        <button>Any week</button>
        <button>Add guests</button>
        <div>
          <BiSearch />
        </div>
      </div>
    </div>
  );
};
