import Link from "next/link";
// Link is the frontend router component offered by Next.js, it will not refresh all page

export default function Navbar() {
    return (
        <nav className="w-full p-4 bg-white border-b shadow-sm flex justify-between">
            <div className="font-bold text-black text-xl">Zicheng&#39;s Space</div>
            <div className="space-x-4">
                <Link href="/" className="text-gray-700 hover:text-blue-500">
                Homepage
                </Link>

                <Link href="/projects" className="text-gray-700 hover:text-blue-500">
                Portfolio 
                </Link>
            </div>
        </nav>
    )
}