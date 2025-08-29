'use client';
import { Github, Globe, Linkedin, Send } from 'lucide-react';
import { UserPortfolio } from './dataConstant';
import { useTemplateData } from '../TemplateDataWrapper';

function HeroSectionTemplate3({ data }: { data: UserPortfolio }) {
    const {
        data: { user },
    } = useTemplateData();
    return (
        <section
            id="home"
            className="mx-auto grid max-w-6xl grid-cols-1 gap-10 py-16 md:grid-cols-2"
        >
            <div className="space-y-6">
                <p className="text-sky-400">{user?.greetingText}</p>
                <h1 className="text-5xl font-extrabold text-white md:text-6xl">
                    {user?.fullName}{' '}
                    <span className="underline decoration-sky-600 underline-offset-8">
                        {'Radadaoy'}
                    </span>
                </h1>
                <p className="max-w-xl text-lg text-slate-300">
                    {user?.title} &mdash; {user?.subTitle}
                </p>
                <p className="max-w-xl text-slate-400">{user?.about}</p>

                <div className="flex flex-wrap gap-3">
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-500"
                    >
                        <Send className="h-4 w-4" />
                        Contact Me
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-200 hover:border-slate-500"
                    >
                        View Projects
                    </a>
                    <div className="ml-2 flex items-center gap-4 text-slate-400">
                        <a
                            href={data.socials.github ?? '#'}
                            aria-label="github"
                            className="hover:text-white"
                        >
                            <Github className="h-5 w-5" />
                        </a>
                        <a
                            href={data.socials.linkedin ?? '#'}
                            aria-label="linkedin"
                            className="hover:text-white"
                        >
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                            href={data.socials.website ?? data.personal.website}
                            aria-label="site"
                            className="hover:text-white"
                        >
                            <Globe className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Code-like preview card (right) */}
            <div className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-4 shadow-xl">
                <div className="mb-3 flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                </div>
                <pre className="overflow-x-auto rounded-xl bg-slate-950/60 p-4 text-[13px] leading-relaxed text-sky-200">
                    {`// Software Engineer
const developer = {
  name: "${user?.fullName}",
  skills: ["React", "Node.js", "UI/UX"],
  focus:  ["Full-Stack", "Performance"],
  learning: "Always"
};`}
                </pre>
            </div>
        </section>
    );
}

export default HeroSectionTemplate3;
