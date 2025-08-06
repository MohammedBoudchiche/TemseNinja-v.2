import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
//import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { LessonHeader } from "@/components/lesson/LessonHeader"
import { UsageSection } from "@/components/lesson/UsageSection"
import { FormationSection } from "@/components/lesson/FormationSection"
import { PracticeSection } from "@/components/lesson/PracticeSection"

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
    const tenseModule = await import(`../../../../../../content/${tenseType}Tenses.ts`);
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
    console.log(`Tenses for ${tenseType}:`, tenseData);
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
  params: Promise<{ tenseType: string }>
}

export default async function TenseTypePage({ params }: PageProps) {
  //const { tenseType } = await params
  //console.log("Tense Type:", params)
  //console.log("Fetching tenses for type:", tenseType)
  //const tenses =await getTensesByType(tenseType)

  //if (!tenses) {
    //notFound()
  //}

  //const tenseTypeTitle = tenseType.charAt(0).toUpperCase() + tenseType.slice(1)

  return (
   <main className="flex flex-col lg:flex-row items-stretch min-h-screen">
    <article className="w-full lg:w-1/2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 md:p-8 lg:p-12">

        <LessonHeader />

        <div className="prose prose-blue dark:prose-invert max-w-none space-y-8">
          {/*<UsageSection />*/}
          <FormationSection />
          <PracticeSection />
        </div>
    </article>
   </main>
  )
}

// Generate static params for better performance
export async function generateStaticParams() {
  //return [{ tenseType: "past" }, { tenseType: "present" }, { tenseType: "future" }]
  return [{tenseName: "simple" }, { tenseName: "perfect" }, { tenseName: "continuous" }, { tenseName: "perfect-continuous" }  ]
}
