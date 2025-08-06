import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const courseCategories = [
  {
    title: "Tenses",
    description: "Learn all English tenses with examples and exercises",
    path: "/courses/tense",
    icon: "⏰",
  },
  {
    title: "Grammar",
    description: "Master English grammar rules and structures",
    path: "/courses/grammar",
    icon: "📚",
  },
  {
    title: "Vocabulary",
    description: "Expand your English vocabulary",
    path: "/courses/vocabulary",
    icon: "📝",
  },
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">English Courses</h1>
        <p className="text-lg text-muted-foreground">Choose a category to start learning English</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courseCategories.map((category) => (
          <Link key={category.path} href={category.path}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="text-4xl mb-2">{category.icon}</div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
