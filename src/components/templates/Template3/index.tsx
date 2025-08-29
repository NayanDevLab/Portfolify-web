import { Linkedin, Send } from 'lucide-react';
import ProjectSectionTemplate3 from './ProejctSectionTemplate3';
import NavBarTemplate3 from './NavBarTemplate3';
import { DATA } from './dataConstant';
import ProfileRightTemplate3 from './ProfileRightTemplate3';
import ExperienceCardTemplate3 from './ExperienceCardTemplate3';
import HeroSectionTemplate3 from './HeroSectionTemplate3';
import ExperienceSectionTemplate3 from './ExperienceSectionTemplate3';
import EducationCardTemplate3 from './EducationCardTemplate3';
import SectionTitleTemplate3 from './SectionTitleTemplate3';
import BioCardTemplate3 from './BioCardTemplate3';
import TemplateDataWrapper from '../TemplateDataWrapper';

export default function Template3({ slug }: { slug: string }) {
    const d = DATA;

    return (
        <div className="min-h-screen bg-[#0a0f1a] text-slate-200">
            <TemplateDataWrapper
                slug={slug}
                withUser
                withEducations
                withProjects
                withExperiences
            >
                <NavBarTemplate3 />
                <HeroSectionTemplate3 data={d} />

                <section id="about" className="mx-auto max-w-6xl py-8">
                    <SectionTitleTemplate3>About Me</SectionTitleTemplate3>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="space-y-6 md:col-span-2">
                            <BioCardTemplate3 />
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <EducationCardTemplate3 />
                                <ExperienceCardTemplate3 />
                            </div>
                        </div>
                        <ProfileRightTemplate3 data={d} />
                    </div>
                </section>

                <ProjectSectionTemplate3 />
                <ExperienceSectionTemplate3 items={d.experience} />
                <section id="contact" className="mx-auto max-w-6xl py-12">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center">
                        <h3 className="mb-3 text-xl font-semibold text-white">
                            Let’s build something great
                        </h3>
                        <p className="text-slate-400">{d.hero.callToAction}</p>
                        <div className="mt-5 flex justify-center gap-3">
                            <a
                                href={`mailto:${d.personal.email}`}
                                className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-500"
                            >
                                <Send className="h-4 w-4" />
                                Send a Message
                            </a>
                            <a
                                href={d.socials.linkedin ?? '#'}
                                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-slate-200 hover:border-slate-500"
                            >
                                <Linkedin className="h-4 w-4" />
                                Connect
                            </a>
                        </div>
                    </div>
                </section>

                <footer className="py-10 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} {d.personal.fullName}. All
                    rights reserved.
                </footer>
            </TemplateDataWrapper>
        </div>
    );
}
