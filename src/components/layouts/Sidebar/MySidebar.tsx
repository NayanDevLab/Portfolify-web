import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    User,
    Calendar,
    Settings,
    Inbox,
    Building,
    Award,
    RadioTower,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sections = [
    {
        title: 'Menu',
        items: [
            { title: 'Dashboard', icon: LayoutDashboard, route: '/admin' },
            { title: 'Projects', icon: Calendar, route: '/admin/projects' },
        ],
    },
    {
        title: 'Profile',
        items: [
            { title: 'User Details', icon: User, route: '/admin' },
            {
                title: 'Social Media',
                icon: RadioTower,
                route: '/admin/social-media',
            },
            { title: 'Experience', icon: Inbox, route: '/admin/experience' },
            { title: 'Education', icon: Building, route: '/admin/education' },
            {
                title: 'Achievements',
                icon: Award,
                route: '/admin/achievements',
            },
        ],
    },
    {
        title: 'Settings',
        items: [
            { title: 'Settings', icon: Settings, route: '/admin/settings' },
            {
                title: 'Contact Messages',
                icon: Inbox,
                route: '/admin/contact-messages',
            },
        ],
    },
];

export default function MySidebar({ isOpen }: { isOpen: boolean }) {
    const pathname = usePathname();

    return (
        <aside
            className={cn(
                'fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r shadow-sm z-40 transition-transform duration-300 overflow-y-auto',
                isOpen ? 'translate-x-0' : '-translate-x-64',
            )}
        >
            <div className="p-4">
                {sections.map((section, idx) => (
                    <div key={idx} className="mb-6">
                        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-2 mb-2">
                            {section.title}
                        </h4>
                        <ul>
                            {section.items.map((item, index) => {
                                const isActive = pathname === item.route;
                                return (
                                    <li key={index}>
                                        <Link
                                            href={item.route}
                                            className={cn(
                                                'flex items-center gap-3 px-4 py-2 rounded-lg transition-colors',
                                                isActive
                                                    ? 'bg-blue-100 text-blue-600 font-medium'
                                                    : 'text-gray-700 hover:bg-gray-100',
                                            )}
                                        >
                                            <item.icon className="w-4 h-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </aside>
    );
}
