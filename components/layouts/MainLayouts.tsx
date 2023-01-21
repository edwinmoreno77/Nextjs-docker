import Head from "next/head";
import { FC, PropsWithChildren } from "react";
import { NavBar } from "../NavBar";
import styles from "./MainLayouts.module.css";

export const MainLayouts: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home-Edwin</title>
        <meta name="description" content="Home Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
