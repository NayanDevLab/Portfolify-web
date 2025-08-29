'use client';
import { Github } from 'lucide-react';
import Image from 'next/image';
import { useTemplateData } from '../TemplateDataWrapper';

function ProjectSectionTemplate3() {
    const {
        data: { projects },
    } = useTemplateData();
    return (
        <section id="projects" className="mx-auto max-w-6xl py-14">
            <h2 className="mb-3 text-3xl font-extrabold text-white">
                Projects
            </h2>
            <p className="mb-8 max-w-2xl text-slate-400">
                Here are some of the projects I&apos;ve worked on, showcasing my
                skills in various technologies and problem domains.
            </p>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((p) => (
                    <article
                        key={p._id}
                        className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-lg"
                    >
                        {/* header image */}
                        <div className="relative h-44 w-full bg-gradient-to-tr from-sky-700 to-indigo-600">
                            <Image
                                src={p.mediaUrls[0] || ''}
                                alt={p.name}
                                fill
                                className="object-cover mix-blend-luminosity opacity-90"
                                unoptimized
                            />
                        </div>

                        {/* body */}
                        <div className="space-y-3 p-5">
                            <h3 className="text-lg font-semibold text-white">
                                {p.name}
                            </h3>
                            <p className="text-sm leading-6 text-slate-300">
                                {p.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-1">
                                {['React', 'Node.js', 'Express', 'MongoDB'].map(
                                    (t) => (
                                        <span
                                            key={t}
                                            className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                                        >
                                            {t}
                                        </span>
                                    ),
                                )}
                            </div>

                            <div className="pt-3">
                                {p.githubLink && (
                                    <a
                                        href={p.githubLink}
                                        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-3 py-2 text-sm text-slate-200 hover:border-slate-500"
                                    >
                                        <Github className="h-4 w-4" />
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ProjectSectionTemplate3;
