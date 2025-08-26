'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon, ChevronRight } from 'lucide-react';
import { useTemplateData } from '../TemplateDataWrapper';

type Project = {
    name: string;
    description: string;
    githubLink?: string;
    demoLink?: string;
    mediaUrls: string[];
};

// ---- UI ----
export default function PortfolioSection() {
    const {
        data: { projects },
    } = useTemplateData();
    return (
        <section className="rounded-[28px] border border-neutral-800 bg-[#161616] text-neutral-100 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]">
            <header className="px-6 pt-6 md:px-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Portfolio
                </h2>
                <div className="mt-3 h-1.5 w-12 rounded-full bg-amber-400" />
            </header>

            <div className="px-6 pb-8 md:px-10">
                <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p.name} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const cover = project.mediaUrls[0];

    return (
        <Card className="group overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 transition-transform hover:-translate-y-1">
            <div className="relative aspect-[16/9]">
                <Image
                    src={cover}
                    alt={project.name}
                    fill
                    className="object-cover"
                    unoptimized
                />
            </div>

            <CardContent className="p-5">
                <h3 className="text-lg font-semibold text-white">
                    {project.name}
                </h3>
                {project.description && (
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-300">
                        {project.description}
                    </p>
                )}

                <div className="mt-4 flex items-center gap-2">
                    {project.githubLink && (
                        <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
                        >
                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </Button>
                    )}
                    {project.demoLink && (
                        <Button
                            asChild
                            size="sm"
                            className="bg-amber-500 text-black hover:bg-amber-400"
                        >
                            <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <LinkIcon className="mr-2 h-4 w-4" />
                                Live Demo
                            </a>
                        </Button>
                    )}

                    <span className="ml-auto inline-flex items-center text-xs text-neutral-400">
                        View <ChevronRight className="ml-1 h-4 w-4" />
                    </span>
                </div>
            </CardContent>
        </Card>
    );
}
