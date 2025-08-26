// types/portfolio.ts
export type PersonalInfo = {
    fullName: string; // REQUIRED
    email: string; // REQUIRED
    phoneNumber?: string;
    location: string; // REQUIRED
    dateOfBirth?: string; // ISO string or dd-mm-yyyy
    website?: string;
    profilePictureUrl?: string;
    social?: {
        linkedin?: string;
        github?: string;
        twitter?: string;
        dribbble?: string;
        website?: string;
    };
};

export type ProfessionalInfo = {
    title: string; // REQUIRED
    subtitle?: string;
    currentCompany?: string;
    yearsOfExperience?: number | string;
    resumeUrl?: string;
};

export type HeroInfo = {
    about: string; // REQUIRED
    greetingText: string; // REQUIRED (e.g., "Hi, I'm Nayan")
    headline: string; // REQUIRED
    callToAction?: string;
    quote?: string;
    funFact?: string;
};

export type UserProfile = {
    personal: PersonalInfo;
    professional: ProfessionalInfo;
    hero: HeroInfo;
};
