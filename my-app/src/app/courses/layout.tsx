import { ThemeProvider } from '@/components/theme-provider';
import {ReactNode} from 'react'

interface AboutLayoutProps {
  children: ReactNode;
}
const CoursesLayout = ({children}:AboutLayoutProps) => {
  return (
     
      <main>
        {children}
      </main> 
     
  )
}

export default CoursesLayout



