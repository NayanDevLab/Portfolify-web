'use client';

import * as React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SECTIONS = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
];

export function HeaderTabsModern() {
    const [active, setActive] = React.useState(SECTIONS[0].id);

    const scrollTo = React.useCallback((id: string) => {
        const el = document.getElementById(id);
        if (!el) return;
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, []);

    React.useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        if (id) setActive(id);
                    }
                }
            },
            { root: null, rootMargin: '0px 0px -55% 0px', threshold: 0.15 },
        );

        SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) io.observe(el);
        });

        return () => io.disconnect();
    }, []);

    return (
        <div
            className="
        sticky top-0 z-50               /* <-- makes it stick */
        rounded-2xl border border-neutral-800
        bg-neutral-900/70
        supports-[backdrop-filter]:bg-neutral-900/50
        backdrop-blur
        px-4 py-2
      "
        >
            <Tabs
                value={active}
                onValueChange={(v) => {
                    setActive(v);
                    scrollTo(v);
                }}
                className="w-full"
            >
                <TabsList className="grid w-full grid-cols-4 bg-transparent">
                    {SECTIONS.map(({ id, label }) => (
                        <TabsTrigger
                            key={id}
                            value={id}
                            className="data-[state=active]:bg-neutral-800 data-[state=active]:text-white rounded-xl text-neutral-300"
                        >
                            {label}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs>
        </div>
    );
}
