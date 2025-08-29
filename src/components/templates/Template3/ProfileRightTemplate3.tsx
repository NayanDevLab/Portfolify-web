'use client';
import { FileDown, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import InfoRowTemplate3 from './InfoRowTemplate3';
import { UserPortfolio } from './dataConstant';
import { useTemplateData } from '../TemplateDataWrapper';

function ProfileRightTemplate3({ data }: { data: UserPortfolio }) {
    const {
        data: { user },
    } = useTemplateData();
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <div className="flex items-center gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-slate-700">
                    <Image
                        src={user?.profilePictureUrl || ''}
                        alt={user?.fullName || ''}
                        fill
                        className="object-cover"
                        unoptimized
                    />
                </div>
                <div>
                    <div className="text-lg font-semibold text-white">
                        {user?.fullName}
                    </div>
                    <div className="text-slate-400">{user?.title}</div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-300">
                <InfoRowTemplate3
                    icon={<MapPin className="h-4 w-4" />}
                    text={user?.location || ''}
                />
                <InfoRowTemplate3
                    icon={<Globe className="h-4 w-4" />}
                    text={user?.websiteUrl || ''}
                />
                <InfoRowTemplate3
                    icon={<Mail className="h-4 w-4" />}
                    text={user?.email || ''}
                />
                <InfoRowTemplate3
                    icon={<Phone className="h-4 w-4" />}
                    text={user?.phoneNumber || ''}
                />
                <div className="mt-1 text-slate-400">
                    {user?.yearsOfExperience} yrs experience •{' '}
                    {user?.currentCompany}
                </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
                {data.skills.map((s) => (
                    <span
                        key={s}
                        className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200"
                    >
                        {s}
                    </span>
                ))}
            </div>

            <a
                href={data.professional.resumeUrl}
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white hover:bg-sky-500"
            >
                <FileDown className="h-4 w-4" /> Download Resume
            </a>
        </div>
    );
}

export default ProfileRightTemplate3;
