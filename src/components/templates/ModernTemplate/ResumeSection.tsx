'use client';

import { GraduationCap, BriefcaseBusiness, MapPin } from 'lucide-react';
import { useTemplateData } from '../TemplateDataWrapper';
import { formatDate } from '@/lib/dateUtils';

export default function ResumeSection() {
    const {
        data: { experiences, educations },
    } = useTemplateData();

    return (
        <section
            className="rounded-[28px] border border-neutral-800 bg-[#161616] text-neutral-100 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]"
            id="resume"
        >
            {/* Header */}
            <div className="px-6 pt-6 md:px-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Resume
                </h2>
                <div className="mt-3 h-1.5 w-12 rounded-full bg-amber-400" />
            </div>

            <div className="px-6 pb-8 md:px-10">
                {/* Education */}
                <TimelineBlock
                    title="Education"
                    icon={<GraduationCap className="h-5 w-5" />}
                >
                    {educations.map((ed, i) => (
                        <TimelineItem key={i}>
                            <div className="space-y-1">
                                <h4 className="text-white font-semibold">
                                    {ed.institution}
                                </h4>
                                <p className="text-neutral-300">{ed.degree}</p>
                                <p className="text-amber-300 font-medium">
                                    {formatDate(ed.startDate)} —{' '}
                                    {ed.endDate && formatDate(ed.endDate)}
                                </p>
                            </div>
                        </TimelineItem>
                    ))}
                </TimelineBlock>

                {/* Experience */}
                <TimelineBlock
                    title="Experience"
                    icon={<BriefcaseBusiness className="h-5 w-5" />}
                >
                    {experiences.map((ex, i) => (
                        <TimelineItem key={i}>
                            <div className="space-y-1">
                                <h4 className="text-white font-semibold">
                                    {ex.title}
                                </h4>
                                <p className="text-neutral-300">{ex.company}</p>
                                <p className="text-amber-300 font-medium">
                                    {formatDate(ex.startDate)} —{' '}
                                    {ex.endDate && formatDate(ex.endDate)}{' '}
                                    <span className="mx-1">•</span> 7 months
                                </p>
                                {ex.location && (
                                    <p className="italic text-neutral-300 flex items-center gap-1">
                                        <MapPin className="h-4 w-4 text-amber-300" />
                                        {ex.location}
                                    </p>
                                )}
                            </div>

                            <ul className="mt-3 list-disc pl-5 marker:text-amber-400 text-neutral-300 space-y-1.5">
                                {ex.description}
                                {/* {ex.bullets.map((b, idx) => (
                                    <li key={idx}>{b}</li>
                                ))} */}
                            </ul>
                        </TimelineItem>
                    ))}
                </TimelineBlock>
            </div>
        </section>
    );
}

/* -------------------------- Subcomponents -------------------------- */

function TimelineBlock({
    title,
    icon,
    children,
}: {
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}) {
    return (
        <div className="relative mt-8">
            {/* Left icon in pill */}
            <div className="absolute -left-3 top-0">
                <div className="rounded-2xl border border-neutral-800 bg-[#1b1b1b] p-3 text-amber-300 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]">
                    {icon}
                </div>
            </div>

            <h3 className="pl-10 text-2xl font-extrabold text-white">
                {title}
            </h3>

            {/* Vertical rail */}
            <div className="relative mt-4 pl-10">
                <div className="absolute left-[22px] top-0 bottom-0 w-px bg-neutral-800" />
                <div className="space-y-8">{children}</div>
            </div>
        </div>
    );
}

function TimelineItem({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative pl-8">
            {/* Dot */}
            <span className="absolute left-[-2px] top-1.5 h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_0_3px_rgba(27,27,27,1)]" />
            <div className="rounded-xl">{children}</div>
        </div>
    );
}
