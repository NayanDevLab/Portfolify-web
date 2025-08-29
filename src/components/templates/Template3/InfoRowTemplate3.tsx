function InfoRowTemplate3({
    icon,
    text,
}: {
    icon: React.ReactNode;
    text: string;
}) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sky-400">{icon}</span>
            <span className="truncate">{text}</span>
        </div>
    );
}

export default InfoRowTemplate3;
