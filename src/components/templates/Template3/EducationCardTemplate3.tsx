'use client';
import { useTemplateData } from '../TemplateDataWrapper';

function EducationCardTemplate3() {
    const {
        data: { educations },
    } = useTemplateData();
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="mb-4 flex items-center gap-2 font-semibold text-white">
                <span className="rounded-md bg-slate-800 px-2 py-1 text-xs text-sky-300">
                    Education
                </span>
            </div>
            <ul className="space-y-5">
                {educations.map((e, i) => (
                    <li key={i} className="text-slate-300">
                        <div className="font-semibold text-white">
                            {e.degree}
                        </div>
                        <div className="text-slate-400">{e.institution}</div>
                        <div className="text-sky-300 text-sm">
                            {e.startDate} – {e.endDate}
                        </div>
                        {/* {e.note && <div className="text-slate-400 text-sm mt-1">{e.note}</div>} */}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EducationCardTemplate3;
