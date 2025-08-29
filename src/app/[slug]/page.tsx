import type { ComponentType } from 'react';
import { notFound } from 'next/navigation';
import { getSettingsBySlug } from '@/lib/fetchSettings';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type TemplateProps = { slug: string };
type TemplateComp = ComponentType<TemplateProps>;

async function loadTemplate(name: string): Promise<TemplateComp> {
    switch (name.toLowerCase()) {
        case 'theme2':
            return (await import('@/components/templates/TemplateTwo'))
                .default as TemplateComp;
        case 'default':
        case 'modern':
        default:
            return (await import('@/components/templates/Template3'))
                .default as TemplateComp;
    }
}

export default async function PortfolioPage({
    params,
}: {
    // ⬇️ Note the Promise here
    params: Promise<{ slug: string }>;
}) {
    // ⬇️ Always await params to satisfy Next’s generated types
    const { slug } = await params;
    if (!slug) notFound();

    const settings = await getSettingsBySlug(slug);
    const templateName = (settings?.template ?? 'default').toLowerCase();

    const Template = await loadTemplate(templateName);
    return <Template slug={slug} />;
}
