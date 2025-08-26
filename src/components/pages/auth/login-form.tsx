'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert } from '@/components/ui/alert';
import { useLoginMutation } from '@/redux/auth/authApi';

export function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [localError, setLocalError] = useState<string | null>(null);
    const router = useRouter();
    const [login, { isLoading, isError, isSuccess }] = useLoginMutation();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLocalError(null);

        try {
            await login({ email, password }).unwrap();
            router.push('/admin');
        } catch (err) {
            setLocalError('Invalid credentials or server error.');
        }
    };

    return (
        <form onSubmit={handleLogin} className="space-y-4">
            {isError && localError && (
                <Alert variant="destructive">{localError}</Alert>
            )}

            <div>
                <Label htmlFor="loginEmail">Email</Label>
                <Input
                    id="loginEmail"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                />
            </div>
            <div>
                <Label htmlFor="loginPassword">Password</Label>
                <Input
                    id="loginPassword"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
            </Button>
        </form>
    );
}
