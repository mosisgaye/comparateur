interface SectionTitleProps {
  title: string
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold text-[#111] mb-8 pb-2 border-b-2 text-center w-full block">
      {title}
    </h2>
  )
}

