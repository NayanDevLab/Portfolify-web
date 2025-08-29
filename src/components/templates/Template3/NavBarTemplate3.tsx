import { DATA } from './dataConstant';

function NavBarTemplate3() {
    return (
        <nav className="mx-auto flex max-w-6xl items-center justify-between py-6 text-sm text-slate-200">
            <div className="font-semibold tracking-wide text-sky-400">AZ.</div>
            <ul className="hidden gap-8 md:flex">
                {[
                    'Home',
                    'About',
                    'Projects',
                    'Skills',
                    'Achievements',
                    'Contact',
                ].map((l) => (
                    <li key={l} className="text-slate-300 hover:text-white">
                        <a href={`#${l.toLowerCase()}`}>{l}</a>
                    </li>
                ))}
            </ul>
            <a
                href={DATA.professional.resumeUrl}
                className="rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-500"
            >
                Resume
            </a>
        </nav>
    );
}

export default NavBarTemplate3;
