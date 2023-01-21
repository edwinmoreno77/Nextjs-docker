import Link from 'next/link'
import { MainLayouts } from '../components/layouts/MainLayouts'

export default function About() {
    return (
        <MainLayouts>
            <h1>
                CONTACT
            </h1>

            <h1>
                <Link href="/">ir al home</Link>
            </h1>
        </MainLayouts>
    )
}