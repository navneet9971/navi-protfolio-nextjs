const SectionHeader = ({
  index,
  kicker,
  title,
  copy,
}: {
  index: string;
  kicker: string;
  title: string;
  copy?: string;
}) => {
  return (
    <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="kicker">
          {index} — {kicker}
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
          {title}
        </h2>
      </div>
      {copy && (
        <p className="max-w-sm text-sm leading-relaxed text-mute md:text-base">
          {copy}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
