

interface ChapterCardProps {
  surah: string;
  englishName: string;
  id: number;
}

function ChapterCard({ surah, englishName,id }: ChapterCardProps) {
  return (
    <div className="h-30 mt-6 w-60 rounded-xl border p-6 text-left hover:text-green-600 focus:text-blue-600 bg-cyan-100">
      <div className="h-8 w-8 rounded-xl bg-green-200  flex justify-center align-center pt-1">{id}</div>
      <p className="mt-4 text-xl">{surah}</p>
      <p className="mt-4 text-sm text-gray-600 text-transform: uppercase">{englishName}</p>
    </div>
  )
}

export default ChapterCard
