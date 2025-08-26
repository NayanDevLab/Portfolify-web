'use client';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LoginForm } from '@/components/pages/auth/login-form';
import { RegisterForm } from '@/components/pages/auth/register-form';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const testimonials = [
    {
        quote: 'Portfolify is incredibly fast, beautifully designed, and helped me launch my portfolio in minutes!',
        name: 'Prantik Chakraborty',
        title: 'UI/UX Designer at Codeshaper',
    },
    {
        quote: 'I got my personal website live in under 5 minutes — this tool is a game-changer for developers.',
        name: 'Ananya Sharma',
        title: 'Frontend Engineer at Swiggy',
    },
    {
        quote: "It's super intuitive, stylish, and modern. The user experience is smoother than any builder I’ve used.",
        name: 'Ravi Patel',
        title: 'Freelance Designer',
    },
];

export default function AuthPage() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
            {/* Left: Auth Form */}
            <div className="bg-white text-slate-900 rounded-lg shadow-lg p-8 md:w-1/2 w-full max-w-md m-6">
                <div className="flex justify-center mb-6">
                    <Link
                        href="/"
                        className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
                    >
                        Portfolify
                    </Link>
                </div>
                <h2 className="text-2xl font-bold text-center mb-2">
                    Hey, Hello 👋
                </h2>
                <p className="text-center text-sm text-muted-foreground mb-6">
                    Enter your information to log in or create an account
                </p>

                <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid grid-cols-2 mb-6 bg-slate-100">
                        <TabsTrigger value="login">Login</TabsTrigger>
                        <TabsTrigger value="register">Register</TabsTrigger>
                    </TabsList>

                    <TabsContent value="login">
                        <LoginForm />
                    </TabsContent>

                    <TabsContent value="register">
                        <RegisterForm />
                    </TabsContent>
                </Tabs>
            </div>

            {/* Right: Testimonial */}
            <div className="text-left p-10 md:w-1/2 w-full max-w-xl text-white">
                <h2 className="text-3xl font-bold mb-6">What Our Users Say…</h2>

                <Carousel
                    opts={{ align: 'start', loop: true }}
                    className="w-full"
                >
                    <CarouselContent>
                        {testimonials.map((item, index) => (
                            <CarouselItem key={index}>
                                <Card className="bg-white/20 border border-white/30 text-white shadow-lg">
                                    <CardContent className="p-6 space-y-4">
                                        <p className="italic text-white/90 text-lg">
                                            “{item.quote}”
                                        </p>
                                        <div>
                                            <p className="font-semibold">
                                                {item.name}
                                            </p>
                                            <p className="text-sm text-white/80">
                                                {item.title}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="mt-4 flex justify-end gap-2">
                        <CarouselPrevious className="opacity-100 bg-white text-black hover:bg-purple-100 shadow-md rounded-full p-2" />
                        <CarouselNext className="opacity-100 bg-white text-black hover:bg-purple-100 shadow-md rounded-full p-2" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
}
