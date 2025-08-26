import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
    {
        name: 'Ananya Sharma',
        quote: 'Portfolify made creating my developer portfolio feel like magic. Fast, beautiful, and super simple!',
    },
    {
        name: 'Ravi Patel',
        quote: 'I set up my portfolio in under 5 minutes. The themes are stunning and responsive!',
    },
    {
        name: 'Fatima Khan',
        quote: 'Absolutely love the UX. My freelance clients are impressed — all thanks to Portfolify.',
    },
    {
        name: 'Vikram Desai',
        quote: "The best portfolio builder I've used. Super intuitive and polished!",
    },
];

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen bg-gradient-to-b from-[#d3cfff] via-[#e1dbff] to-[#eae6ff] bg-grid-pattern bg-grid text-slate-800">
            {/* NAVBAR */}
            <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 border-b border-border shadow-sm">
                <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text"
                    >
                        Portfolify
                    </Link>

                    {/* Links */}
                    <div className="flex items-center space-x-6 text-sm font-medium text-slate-700">
                        {[
                            { label: 'Login', href: '/auth' },
                            { label: 'Sign Up', href: '/auth' },
                            { label: 'Admin', href: '/admin' },
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="relative group transition hover:text-purple-600"
                            >
                                {item.label}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>
                </nav>
            </header>

            {/* MAIN */}
            <div className="flex-1">
                {/* HERO */}
                <section className="flex flex-col items-center justify-center px-6 py-16 text-center gap-6 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                        Build Your Portfolio in 5 Minutes
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-xl">
                        Showcase your work effortlessly with Portfolify. No
                        coding. Just results.
                    </p>
                    <div className="mt-6 flex gap-4">
                        <Link href="/signup">
                            <Button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg hover:shadow-xl">
                                Get Started
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button variant="outline" size="lg">
                                Log In
                            </Button>
                        </Link>
                    </div>
                </section>

                {/* FEATURE GRID */}
                <section className="grid grid-cols-1 gap-8 md:grid-cols-3 max-w-5xl w-full mx-auto px-6 py-16">
                    {[
                        {
                            title: 'Start Quickly',
                            desc: 'Our intuitive wizard guides you from zero to a live portfolio in just minutes.',
                            badge: 'Easy Setup',
                        },
                        {
                            title: 'Pick Your Style',
                            desc: 'Choose from multiple templates, themes, and layouts—no coding required!',
                            badge: 'Customization',
                        },
                        {
                            title: 'Powered by Next.js',
                            desc: 'Enjoy blazing-fast load times, SEO benefits, and built-in security features.',
                            badge: 'Performance',
                        },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-slate-200 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center">
                                <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 shadow-sm">
                                    {item.badge}
                                </span>
                                <h3 className="text-xl font-bold text-slate-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-slate-600">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* TESTIMONIALS */}
                <section className="w-full max-w-5xl mx-auto px-4 py-16 text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                        Loved by Creators Worldwide
                    </h2>
                    <p className="text-muted-foreground text-base max-w-2xl mx-auto">
                        Thousands of designers, developers, and freelancers
                        trust Portfolify.
                    </p>

                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem
                                    key={index}
                                    className="md:basis-1/2 lg:basis-1/3 px-2"
                                >
                                    <Card className="bg-white/70 backdrop-blur-md border shadow-md hover:shadow-xl transition-all">
                                        <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold flex items-center justify-center">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <h4 className="text-lg font-semibold text-slate-800">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-sm text-muted-foreground italic">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex gap-1 text-yellow-400 mt-2">
                                                {'★★★★★'
                                                    .split('')
                                                    .map((_, i) => (
                                                        <span key={i}>★</span>
                                                    ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </section>

                <section className="flex justify-center items-center py-16 px-4">
                    <Card className="max-w-2xl w-full bg-white/60 backdrop-blur-md border shadow-xl rounded-2xl hover:shadow-2xl transition-all">
                        <CardContent className="p-8 text-center space-y-6">
                            <h2 className="text-3xl font-bold text-slate-800">
                                Ready to create your portfolio?
                            </h2>
                            <p className="text-muted-foreground text-base">
                                Sign up now and get your website live in just 5
                                minutes.
                            </p>
                            <Link href="/signup">
                                <span className="inline-block px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-purple-600 to-blue-500 shadow-md hover:scale-105 transition">
                                    Get Started
                                </span>
                            </Link>
                        </CardContent>
                    </Card>
                </section>
                {/* FINAL CTA */}
                <footer className="border-t border-t-slate-200 mt-auto">
                    <div className="w-full bg-white/50 backdrop-blur-md py-6 text-center text-sm">
                        <p className="text-muted-foreground">
                            © {new Date().getFullYear()}{' '}
                            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent font-semibold">
                                Portfolify
                            </span>
                            . All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </main>
    );
}
