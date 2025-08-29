import { Experience } from './dataConstant';

function ExperienceSectionTemplate3({ items }: { items: Experience[] }) {
    return (
        <section id="experience" className="mx-auto max-w-6xl py-14">
            <h2 className="mb-3 text-3xl font-extrabold text-white">
                Experience
            </h2>
            <p className="mb-8 max-w-2xl text-slate-400">
                Roles I&apos;ve held and the impact I delivered.
            </p>

            <ol className="relative border-s border-slate-800 pl-6">
                {items.map((x, i) => (
                    <li key={i} className="mb-10">
                        <span className="absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full bg-sky-500 ring-4 ring-slate-900" />
                        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                            <div className="flex flex-wrap items-baseline justify-between gap-2">
                                <div className="text-white">
                                    <span className="font-semibold">
                                        {x.role}
                                    </span>{' '}
                                    <span className="text-slate-400">
                                        • {x.company}
                                    </span>
                                </div>
                                <div className="text-sm text-sky-300">
                                    {x.start} {x.end && `— ${x.end}`}
                                </div>
                            </div>
                            <div className="mt-1 text-sm italic text-slate-400">
                                {x.location}
                            </div>
                            <ul className="mt-3 list-disc pl-5 text-slate-300">
                                {x.bullets.map((b, j) => (
                                    <li key={j}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}

export default ExperienceSectionTemplate3;
