

interface ChapterCardProps {
    surah: string;
    englishName: string;
}

function ChapterCard({ surah, englishName }: ChapterCardProps) {
  return (
      <div className="h-30 mt-6 w-60 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600">
      <p className="mt-4 text-xl">{surah}</p>
      <p className="mt-4 text-xl">{englishName}</p>
    </div>
  )
}

export default ChapterCard
