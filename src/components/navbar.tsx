
import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <header className="sticky top-0 z-50 w-full">
            <div className="flex h-16 w-full items-center justify-center">
                <Link href="#" className="flex items-center gap-2" prefetch={false}>
                    <Image src="./logo.svg" width={100} height={40} alt="Logo" />
                </Link>
            </div>
        </header>
    )
}
