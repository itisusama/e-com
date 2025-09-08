import { footerData } from "../data/footer";
import { DribbbleIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="flex flex-wrap justify-around overflow-hidden gap-10 md:gap-20 mt-40 py-6 px-6 md:px-16 lg:px-24 xl:px-32 text-xs text-gray-500">
            <div className="flex flex-wrap items-start gap-10 md:gap-30"
                initial={{ x: -150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <h2>E-Com</h2>
                {footerData.map((section, index) => (
                    <div key={index}>
                        <p className="text-slate-100 font-semibold">{section.title}</p>
                        <ul className="mt-2 space-y-2">
                            {section.links.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="hover:text-blue-600 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end"
                initial={{ x: 150, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
            >
                <p className="max-w-60">Making every customer feel valued—no matter the size of your audience.</p>
                <div className="flex items-center gap-4 mt-3">
                    <a href="https://dribbble.com/prebuiltui" target="_blank" rel="noreferrer">
                        <DribbbleIcon className="size-5 hover:text-blue-500" />
                    </a>
                    <a href="https://www.linkedin.com/company/prebuiltui" target="_blank" rel="noreferrer">
                        <LinkedinIcon className="size-5 hover:text-blue-500" />
                    </a>
                    <a href="https://x.com/prebuiltui" target="_blank" rel="noreferrer">
                        <TwitterIcon className="size-5 hover:text-blue-500" />
                    </a>
                    <a href="https://www.youtube.com/@prebuiltui" target="_blank" rel="noreferrer">
                        <YoutubeIcon className="size-6 hover:text-blue-500" />
                    </a>
                </div>
                <p className="mt-3 text-center">&copy; {new Date().getFullYear()} <a href="https://prebuiltui.com">PrebuiltUI</a></p>
            </div>
        </footer>
    );
}