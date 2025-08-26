export type UserSettings = { template?: string | null };

export async function getSettingsBySlug(
    slug: string,
): Promise<UserSettings | null> {
    const base =
        process.env.API_SERVER_URL?.replace('localhost', '127.0.0.1') ??
        'http://127.0.0.1:4000/api/v1';

    const url = `${base}/settings/user/${encodeURIComponent(slug)}`;

    console.log('[settings] fetching:', url);

    try {
        const res = await fetch(url, {
            cache: 'no-store',
            headers: { Accept: 'application/json' },
        });

        if (!res.ok) {
            console.error('[settings] http error:', res.status, res.statusText);
            return null;
        }

        const json = await res.json().catch((e) => {
            console.error('[settings] json parse error:', e);
            return null;
        });

        const data = json?.data ?? null;
        console.log('[settings] result:', data);
        return data;
    } catch (err) {
        console.error('[settings] fetch failed:', err);
        return null;
    }
}
