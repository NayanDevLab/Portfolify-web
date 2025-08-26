'use client';

import Image from 'next/image';
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Github,
    Globe,
    Twitter,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useTemplateData } from '../TemplateDataWrapper';

export default function LeftSection() {
    const {
        data: { user },
    } = useTemplateData();
    console.log('user', user);
    return (
        <Card className="bg-neutral-900 border border-neutral-800 rounded-3xl shadow-lg w-full max-w-sm mx-auto">
            <CardContent className="p-6 flex flex-col items-center gap-6">
                {/* Profile image with status dot */}
                <div className="relative">
                    {user?.profilePictureUrl && (
                        <Image
                            src={user.profilePictureUrl}
                            alt="Aakash Rajbanshi"
                            width={140}
                            height={140}
                            className="rounded-2xl object-cover"
                            priority
                        />
                    )}
                    <span className="absolute bottom-3 right-3 h-4 w-4 rounded-full bg-emerald-500 ring-2 ring-neutral-900" />
                </div>

                {/* Name + role */}
                <div className="text-center">
                    <h1 className="text-xl font-semibold text-white">
                        {user?.fullName}
                    </h1>
                    <p className="mt-1 inline-block rounded-lg bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
                        {user?.title}
                    </p>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-neutral-800" />

                {/* Contact info */}
                <div className="w-full space-y-3">
                    <InfoRow
                        icon={<Mail className="h-4 w-4 text-amber-400" />}
                        label="EMAIL"
                        value={user?.email || ''}
                    />
                    <InfoRow
                        icon={<Phone className="h-4 w-4 text-amber-400" />}
                        label="PHONE"
                        value={user?.phoneNumber || ''}
                    />
                    <InfoRow
                        icon={<MapPin className="h-4 w-4 text-amber-400" />}
                        label="LOCATION"
                        value={user?.location || ''}
                    />
                </div>

                {/* Social icons */}
                <div className="flex items-center gap-4 mt-4">
                    <Social icon={<Linkedin className="h-5 w-5" />} />
                    <Social icon={<Github className="h-5 w-5" />} />
                    <Social icon={<Globe className="h-5 w-5" />} />
                    <Social icon={<Twitter className="h-5 w-5" />} />
                </div>
            </CardContent>
        </Card>
    );
}

function InfoRow({
    icon,
    label,
    value,
}: {
    icon: React.ReactNode;
    label: string;
    value: string;
}) {
    return (
        <div className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/60 px-3 py-2">
            {icon}
            <div>
                <div className="text-xs text-neutral-400">{label}</div>
                <div className="text-sm text-neutral-200">{value}</div>
            </div>
        </div>
    );
}

function Social({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="rounded-full p-2 bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-colors cursor-pointer">
            {icon}
        </div>
    );
}
