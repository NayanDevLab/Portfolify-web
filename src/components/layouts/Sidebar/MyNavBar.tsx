'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, Bell, Search, Sun, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface NavbarProps {
    onToggleSidebar: () => void;
}

export default function MyNavBar({ onToggleSidebar }: NavbarProps) {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        router.push('/auth');
    };

    return (
        <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50 flex items-center px-4 justify-between">
            {/* Left: Logo + Menu */}
            <div className="flex items-center space-x-4">
                <Button
                    variant="ghost"
                    onClick={onToggleSidebar}
                    className="p-2"
                >
                    <Menu className="w-5 h-5" />
                </Button>

                <Link href="/" className="flex items-center gap-2">
                    {/* <Image src="/logo.png" alt="Portfolify" width={24} height={24} /> */}
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Portfolify
                    </span>
                </Link>
            </div>

            {/* Center: Search */}
            <div className="hidden md:flex items-center bg-gray-100 px-3 py-1 rounded-md w-72">
                <Search className="w-4 h-4 text-gray-500" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none px-2 text-sm w-full"
                />
            </div>

            {/* Right: Icons */}
            <div className="flex items-center space-x-4">
                <Bell className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-500" />
                <Sun className="w-5 h-5 text-gray-600 cursor-pointer hover:text-yellow-500" />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="p-0 rounded-full">
                            <User className="w-6 h-6 text-gray-600" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuItem
                            onClick={() => router.push('/settings')}
                        >
                            Settings
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}
