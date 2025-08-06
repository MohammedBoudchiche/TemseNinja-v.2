import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const tenseTypes = [
  {
    type: "present",
    title: "Present Tenses",
    description: "Learn about present simple, continuous, perfect, and perfect continuous",
    color: "bg-green-100 text-green-800",
    lessonCount: 4,
  },
  {
    type: "past",
    title: "Past Tenses",
    description: "Master past simple, continuous, perfect, and perfect continuous",
    color: "bg-blue-100 text-blue-800",
    lessonCount: 4,
  },
  {
    type: "future",
    title: "Future Tenses",
    description: "Understand future simple, continuous, perfect, and perfect continuous",
    color: "bg-purple-100 text-purple-800",
    lessonCount: 4,
  },
]

export default function TensePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">English Tenses</h1>
        <p className="text-lg text-muted-foreground">Select a tense type to explore specific tenses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tenseTypes.map((tenseType) => (
          <Link key={tenseType.type} href={`/courses/tense/${tenseType.type}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle>{tenseType.title}</CardTitle>
                </div>
                <CardDescription>{tenseType.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
