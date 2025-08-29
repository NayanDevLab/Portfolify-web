function SectionTitleTemplate3({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="mb-6 text-3xl font-extrabold text-white">
            {children}
            <div className="h-1 w-16 rounded bg-sky-600/80" />
        </h2>
    );
}

export default SectionTitleTemplate3;
