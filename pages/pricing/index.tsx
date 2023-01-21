import Link from "next/link";
import { MainLayouts } from "../../components/layouts/MainLayouts";

export default function Home() {
  return (
    <MainLayouts>
      <h1>PRICING</h1>

      <h1>
        ir al about <Link href="/about">about!!</Link>
      </h1>
    </MainLayouts>
  );
}
