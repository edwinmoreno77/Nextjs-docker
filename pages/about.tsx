import Link from "next/link";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { MainLayouts } from "../components/layouts/MainLayouts";

export default function About() {
  return (
    <>
      <h1>ABOUT</h1>

      <h1 className={"title"}>
        <Link href="/">ir al home</Link>
      </h1>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element | JSX.Element[]) {
  return (
    <MainLayouts>
      <DarkLayout>{page}</DarkLayout>
    </MainLayouts>
  );
};
