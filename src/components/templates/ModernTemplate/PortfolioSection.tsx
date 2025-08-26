'use client';

import * as React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Link as LinkIcon, ChevronRight } from 'lucide-react';

// ---- Types ----
type Project = {
    name: string;
    description: string;
    github?: string;
    demo?: string;
    images: string[]; // first image used as cover
};

// ---- Hard-coded data (use your admin values) ----
const projects: Project[] = [
    {
        name: 'SHCDN UI Extra',
        description: 'All time my Best Library and enjoy my best lib section.',
        github: 'https://www.github.com',
        demo: 'https://www.pagalworld.com',
        images: [
            'https://res.cloudinary.com/demo/image/upload/w_1200,q_85/sample.jpg',
        ],
    },
    {
        name: 'Nagarik App',
        description: 'Citizen services application.',
        github: 'https://github.com/example/nagarik',
        demo: 'https://example.com/nagarik',
        images: [
            'https://res.cloudinary.com/demo/image/upload/w_1200,q_85/couple.jpg',
        ],
    },
    {
        name: 'Ambition Guru',
        description: 'Learning & goal tracking app.',
        github: 'https://github.com/example/ambition-guru',
        demo: 'https://example.com/ambition',
        images: [
            'https://res.cloudinary.com/demo/image/upload/w_1200,q_85/balloons.jpg',
        ],
    },
    {
        name: 'SociAir',
        description: 'Social media utilities.',
        github: 'https://github.com/example/sociair',
        demo: 'https://example.com/sociair',
        images: [
            'https://res.cloudinary.com/demo/image/upload/w_1200,q_85/beach.jpg',
        ],
    },
    {
        name: 'Tokma',
        description: 'Internal tools suite.',
        github: 'https://github.com/example/tokma',
        demo: 'https://example.com/tokma',
        images: [
            'https://res.cloudinary.com/demo/image/upload/w_1200,q_85/motorbike.jpg',
        ],
    },
    {
        name: 'Saara',
        description: 'Commerce utilities and dashboards.',
        github: 'https://github.com/example/saara',
        demo: 'https://example.com/saara',
        images: [
            'https://res.cloudinary.com/demo/image/upload/w_1200,q_85/puppy.jpg',
        ],
    },
];

// ---- UI ----
export default function PortfolioSection() {
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
    const cover = project.images[0];

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
                    {project.github && (
                        <Button
                            asChild
                            size="sm"
                            variant="secondary"
                            className="bg-neutral-800 text-neutral-200 hover:bg-neutral-700"
                        >
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </a>
                        </Button>
                    )}
                    {project.demo && (
                        <Button
                            asChild
                            size="sm"
                            className="bg-amber-500 text-black hover:bg-amber-400"
                        >
                            <a
                                href={project.demo}
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
