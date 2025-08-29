'use client';
import { useTemplateData } from '../TemplateDataWrapper';

function ExperienceCardTemplate3() {
    const {
        data: { experiences },
    } = useTemplateData();
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-center gap-2 font-semibold text-white">
                <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-sky-300">
                    Experience
                </span>
            </div>
            <ul className="space-y-6">
                {experiences.map((x, i) => (
                    <li key={i} className="text-slate-300">
                        <div className="font-semibold text-white">
                            {x.title}
                        </div>
                        <div className="text-slate-400">{x.company}</div>
                        <div className="text-sky-300 text-sm">
                            {x.startDate} {x.endDate && `— ${x.endDate}`}
                        </div>
                        <div className="italic text-slate-400 text-sm">
                            {x.location}
                        </div>
                        <ul className="mt-2 list-disc pl-5 text-slate-400">
                            {/* {x.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))} */}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCardTemplate3;
