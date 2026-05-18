type Props = {
  title: string
  subtitle?: string
}

export default function SectionHeading({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">
      <span className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
        {subtitle}
      </span>

      <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  )
}