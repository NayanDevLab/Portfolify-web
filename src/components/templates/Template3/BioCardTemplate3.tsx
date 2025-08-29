'use client';
import { useTemplateData } from '../TemplateDataWrapper';

function BioCardTemplate3() {
    const {
        data: { user },
    } = useTemplateData();
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-300">
            <div className="mb-2 font-semibold text-white">Bio</div>
            <p>{user?.about || ''}</p>
        </div>
    );
}

export default BioCardTemplate3;
