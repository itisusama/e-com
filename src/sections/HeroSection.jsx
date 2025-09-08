import { ChevronRightIcon } from "lucide-react";

export default function HeroSection() {

    return (
        <div className="relative flex flex-col items-center justify-center px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="absolute top-30 -z-10 left-1/4 size-72 bg-blue-600 blur-[300px]"></div>
            <a href="https://prebuiltui.com" className="group flex items-center gap-2 rounded-full p-1 pr-3 mt-44 text-black-100 bg-blue-200/15">
                <span className="bg-blue-800 text-white text-xs px-3.5 py-1 rounded-full">
                    NEW
                </span>
                <p className="flex items-center gap-1">
                    <span>See our new releases </span>
                    <ChevronRightIcon size={16} className="group-hover:translate-x-0.5 transition duration-300" />
                </p>
            </a>
            <h1 className="text-5xl/17 md:text-6xl/21 font-medium max-w-2xl text-center">
                A Store where you find best{" "}
                <span className="move-gradient px-3 rounded-xl text-nowrap">Products</span>
            </h1>
            <p className="text-base text-center text-black max-w-lg mt-6">
                Just simple and durable products you will find nowhere else</p>
            <div className="flex items-center gap-4 mt-8">
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-7 h-11">
                    Shop Now
                </button>
            </div>
        </div>
    );
}