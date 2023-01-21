import { FC, PropsWithChildren } from "react";
import styles from "./MainLayouts.module.css";

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <div className={styles.main}>
        <h3>Dark layout</h3>
        {children}
      </div>
    </div>
  );
};
