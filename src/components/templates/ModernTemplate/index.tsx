// components/templates/ModernTemplate.tsx (SERVER)
import type { Metadata } from 'next';
import { HeaderTabsModern } from './HeaderTabsModern';
import LeftSection from './LeftSection';
import ResumeSection from './ResumeSection';
import PortfolioSection from './PortfolioSection';
import ContactSection from './ContactSection';
import AboutSection from './AboutSection';
import TemplateDataWrapper from '../TemplateDataWrapper';

export const metadata: Metadata = { title: 'Portfolio' };

export default async function ModernTemplate({ slug }: { slug: string }) {
    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-950 to-black text-neutral-200">
            <div className="mx-auto w-full max-w-6xl px-4 py-8 md:py-12">
                <HeaderTabsModern />

                <main className="min-h-dvh bg-neutral-950 text-neutral-200">
                    <div className="mx-auto max-w-6xl px-4">
                        {/* ⬇️ wrap BOTH columns so LeftSection can use the context */}
                        <TemplateDataWrapper
                            slug={slug}
                            withUser
                            withEducations
                            withProjects
                            withExperiences
                        >
                            <div className="mt-10 flex gap-8">
                                <aside className="hidden md:block md:sticky md:top-6 md:basis-[340px] md:shrink-0 h-fit self-start">
                                    <LeftSection />{' '}
                                    {/* can call useTemplateData() now */}
                                </aside>

                                <section className="flex-1 pr-2 space-y-8">
                                    <section
                                        id="about"
                                        className="scroll-mt-28"
                                    >
                                        <AboutSection />
                                    </section>
                                    <section
                                        id="resume"
                                        className="scroll-mt-28"
                                    >
                                        <ResumeSection />
                                    </section>
                                    <section
                                        id="portfolio"
                                        className="scroll-mt-28"
                                    >
                                        <PortfolioSection />
                                    </section>
                                    <section
                                        id="contact"
                                        className="scroll-mt-28"
                                    >
                                        <ContactSection />
                                    </section>
                                </section>
                            </div>
                        </TemplateDataWrapper>
                    </div>
                </main>
            </div>
        </div>
    );
}
