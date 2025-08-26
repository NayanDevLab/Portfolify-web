'use client';

import React from 'react';
import {
    Briefcase,
    Building2,
    MapPin,
    Clock3,
    Quote,
    Link as LinkIcon,
    FileText,
} from 'lucide-react';
import { useTemplateData } from '../TemplateDataWrapper';

export default function AboutSection() {
    const {
        data: { user },
    } = useTemplateData();

    return (
        <section
            className="rounded-[28px] border border-neutral-800 bg-[#161616] text-neutral-100 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]"
            id="about"
        >
            {/* Header */}
            <div className="px-6 pt-6 pb-2 md:px-10">
                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                    About Me
                </h2>
                <div className="mt-3 h-1.5 w-12 rounded-full bg-amber-400" />
            </div>

            {/* Main copy */}
            <div className="px-6 pb-2 md:px-10">
                {/* Headline */}
                {user?.headLine && (
                    <p className="mt-3 text-lg font-semibold text-white/90">
                        {user?.headLine}
                    </p>
                )}

                {/* Subtitle under role */}
                {user?.subTitle && (
                    <p className="mt-1 text-sm text-neutral-300">
                        {user?.subTitle}
                    </p>
                )}

                {/* About paragraphs */}
                <div className="prose prose-invert max-w-none text-[15px] leading-7 text-neutral-300">
                    <p className="mt-6">{user?.about}</p>
                </div>
            </div>

            <div className="px-6 md:px-10 pb-6">
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <Highlight
                        icon={<Briefcase className="h-5 w-5" />}
                        text={user?.title || ''}
                    />
                    <Highlight
                        icon={<Building2 className="h-5 w-5" />}
                        text={user?.currentCompany || ''}
                    />
                    <Highlight
                        icon={<MapPin className="h-5 w-5" />}
                        text={user?.location || ''}
                    />
                    <Highlight
                        icon={<Clock3 className="h-5 w-5" />}
                        text={`${user?.yearsOfExperience} years experience`}
                    />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {user?.resumeUrl && (
                        <a
                            href={user?.resumeUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-4 py-2 text-sm font-semibold text-black hover:bg-amber-400 transition"
                        >
                            <FileText className="h-4 w-4" />
                            View Resume
                        </a>
                    )}
                    {user?.websiteUrl && (
                        <a
                            href={user?.websiteUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-neutral-700 bg-transparent px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition"
                        >
                            <LinkIcon className="h-4 w-4" />
                            Visit Website
                        </a>
                    )}
                    {user?.callToActionMessage && (
                        <span className="text-sm text-neutral-300">
                            {user?.callToActionMessage}
                        </span>
                    )}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {user?.quote && (
                        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
                            <div className="mb-2 flex items-center gap-2 text-amber-300">
                                <Quote className="h-4 w-4" />
                                <span className="text-xs uppercase tracking-wider">
                                    Quote
                                </span>
                            </div>
                            <p className="italic text-neutral-200">
                                “{user?.quote}”
                            </p>
                        </div>
                    )}
                    {user?.funFact && (
                        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4">
                            <div className="mb-2 text-xs uppercase tracking-wider text-emerald-300">
                                Fun Fact
                            </div>
                            <p className="text-neutral-200">{user?.funFact}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

function Highlight({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-3 rounded-2xl border border-neutral-800 bg-neutral-900/60 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-[#1b1b1b] text-amber-300">
                {icon}
            </div>
            <span className="text-sm font-medium text-neutral-100">{text}</span>
        </div>
    );
}
