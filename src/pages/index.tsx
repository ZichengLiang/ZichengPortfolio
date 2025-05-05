import SideBar from "@/components/SideBar";
import Main from "@/components/Main"
import Link from "next/link";

export default function Home() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
                <SideBar />
                <Main />
            </div>
        </div>
    );
}