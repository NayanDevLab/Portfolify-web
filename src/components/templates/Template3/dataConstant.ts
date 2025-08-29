export type UserPortfolio = {
    personal: PersonalInfo;
    professional: ProfessionalInfo;
    hero: HeroInfo;
    skills: string[]; // not in admin form, added for the look
    education: Education[];
    experience: Experience[];
    socials: {
        github?: string;
        linkedin?: string;
        website?: string;
    };
};

type PersonalInfo = {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    dateOfBirth: string;
    website: string;
    profilePic: string;
};

type ProfessionalInfo = {
    title: string;
    subtitle: string;
    currentCompany: string;
    yearsOfExperience: number;
    resumeUrl: string;
};

type HeroInfo = {
    about: string;
    greetingText: string;
    headline: string;
    callToAction: string;
    quote: string;
    funFact: string;
};

export type Education = {
    school: string;
    degree: string;
    start: string; // "2017"
    end: string; // "2021"
    note?: string; // e.g., Dean's list
};

export type Experience = {
    role: string;
    company: string;
    start: string; // "Aug, 2024"
    end: string; // "Feb, 2025" or "Present"
    location: string;
    bullets: string[];
};

export const DATA: UserPortfolio = {
    personal: {
        fullName: 'Daya Radadiya',
        email: 'daya@gmail.com',
        phone: '8877990066',
        location: 'Gujarat, Jasdan',
        dateOfBirth: '23-05-1997',
        website: 'https://www.google.com',
        profilePic:
            'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop', // demo
    },
    professional: {
        title: 'Backend Developer',
        subtitle: 'I build all time best Web App',
        currentCompany: 'MicroSoft',
        yearsOfExperience: 2,
        resumeUrl: 'https://www.google.drive.com',
    },
    hero: {
        about: "I'm Software developer and happy to Share my Skills. I focus on building elegant, fast experiences with modern tooling.",
        greetingText: "Hi, I'm Nayan",
        headline: 'All time best Developer',
        callToAction: "Let's connect and feel free to connect",
        quote: 'I like Code and build Awesome Products',
        funFact: 'I built my Product 2X times',
    },
    skills: ['React', 'Node', 'UI/UX', 'Full Stack'],
    education: [
        {
            school: 'Nihaareeka College Of Management And Information Technology',
            degree: 'Bachelor of Science in Computer Science and Information Technology (B.Sc. CSIT)',
            start: '2017',
            end: '2021',
        },
        {
            school: 'Greenland International College',
            degree: '+2 Science',
            start: '2015',
            end: '2017',
        },
    ],
    experience: [
        {
            role: 'Full Stack Developer Intern',
            company: 'Twist Digital',
            start: 'Mar, 2025',
            end: 'Present',
            location: 'Kathmandu, Nepal',
            bullets: [
                'Built features and implemented UI designs.',
                'Shipped e-form modules with scrolling/data-entry.',
                'Integrated Google/Facebook sign-in.',
                'Used BLoC and component patterns for state.',
            ],
        },
        {
            role: 'Graphic Designer',
            company: 'SLIIT Media Unit',
            start: 'Freelance',
            end: '',
            location: 'Remote',
            bullets: ['Brand & visual assets.', 'Social media creatives.'],
        },
    ],
    socials: {
        github: 'https://github.com/you',
        linkedin: 'https://linkedin.com/in/you',
        website: 'https://your-site.dev',
    },
};
