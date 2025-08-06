import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
//import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

type Tense = {
  title: string
  path: string
  description: string
  difficulty: string
  duration: string
}
// This would typically come from your content folder or API
const getTensesByType = async (tenseType: string) => {
  try {
    const tenseModule = await import(`../../../../../content/courses/tenses/${tenseType}Tenses.ts`);
    console.log("Tense Module Loaded:", tenseModule);
     const exportName = `${tenseType}Tenses`;
    
    // Access the property from the module object using bracket notation
    const tenseData = tenseModule[exportName as keyof typeof tenseModule];

    // Log the actual data to verify it's working
    console.log("Tense Data:", tenseData); 
    
    if (!tenseData) {
      console.error(`No tense data found for ${tenseType}`);
      return null;
    }
    return tenseData as Tense[];
  } catch (error) {
    console.error(`Error loading ${tenseType} tenses:`, error);
    return null;
  }
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800"
    case "Advanced":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

interface PageProps {
  params: Promise<{ tenseType: string , tenseName:string}>
}

export default async function TenseTypePage({ params }: PageProps) {
  const { tenseType,tenseName } = await params
  const tenses =await getTensesByType(tenseType)

  if (!tenses) {
    notFound()
  }

  const tenseTypeTitle = tenseType.charAt(0).toUpperCase() + tenseType.slice(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/courses/tense">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tenses
          </Button>
        </Link>
        <h1 className="text-4xl font-bold mb-4">{tenseTypeTitle} Tenses</h1>
        <p className="text-lg text-muted-foreground">
          Learn all {tenseType} tenses with detailed explanations and examples
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tenses.map((tense, index) => (
          <Link key={tense.path} href={tense.path}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl">{tense.title}</CardTitle>
                 {/** <Badge className={getDifficultyColor(tense.difficulty)}>{tense.difficulty}</Badge>*/}
                </div>
                <CardDescription className="text-base">{tense.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>Lesson {index + 1}</span>
                  <span>{tense.duration}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

// Generate static params for better performance
//export async function generateStaticParams() {
//  return [{ tenseType: "past" }, { tenseType: "present" }, { tenseType: "future" }]
//}
