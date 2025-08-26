'use client';

import * as React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ContactSchema = z.object({
    name: z.string().min(2, 'Please enter your full name'),
    email: z.string().email('Enter a valid email'),
    subject: z.string().min(2, 'Subject is required'),
    message: z.string().min(10, 'Message should be at least 10 characters'),
});

type ContactValues = z.infer<typeof ContactSchema>;

export default function ContactSection() {
    const form = useForm<ContactValues>({
        resolver: zodResolver(ContactSchema),
        defaultValues: { name: '', email: '', subject: '', message: '' },
    });

    const [loading, setLoading] = React.useState(false);

    async function onSubmit(values: ContactValues) {
        try {
            setLoading(true);
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(values),
            });

            if (!res.ok) throw new Error(await res.text());
            toast.success('Message sent. I’ll get back to you soon!');
            form.reset();
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e) {
            toast.error('Failed to send. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="rounded-[28px] border border-neutral-800 bg-[#161616] text-neutral-100 shadow-[inset_0_-1px_0_rgba(255,255,255,0.04)]">
            <header className="px-6 pt-6 md:px-10">
                <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    Contact
                </h2>
                <div className="mt-3 h-1.5 w-12 rounded-full bg-amber-400" />
            </header>

            <div className="px-6 pb-8 md:px-10">
                <h3 className="mb-4 text-xl font-extrabold text-white">
                    Contact Form
                </h3>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-4"
                    >
                        <div className="grid gap-4 md:grid-cols-2">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                placeholder="Full name"
                                                className="rounded-2xl border-neutral-800 bg-neutral-900 text-neutral-200 placeholder:text-neutral-500"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-amber-300" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Email address"
                                                className="rounded-2xl border-neutral-800 bg-neutral-900 text-neutral-200 placeholder:text-neutral-500"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-amber-300" />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="subject"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            placeholder="Subject"
                                            className="rounded-2xl border-neutral-800 bg-neutral-900 text-neutral-200 placeholder:text-neutral-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-amber-300" />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Your Message"
                                            rows={6}
                                            className="rounded-2xl border-neutral-800 bg-neutral-900 text-neutral-200 placeholder:text-neutral-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage className="text-amber-300" />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="rounded-2xl bg-amber-500 text-black hover:bg-amber-400 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                            >
                                <Send className="mr-2 h-4 w-4" />
                                {loading ? 'Sending...' : 'Send Message'}
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </section>
    );
}
