import {ReactNode} from 'react'

interface ContactLayoutProps {
  children: ReactNode;
}
const ContactLayout = ({children}:ContactLayoutProps) => {
  return (
     <div className="bg-blue-50"> {/* Special background for /about only */}
      <header className="p-4 border-b">
        <h2 className="text-xl">About Our Company</h2>
      </header>
      <main>{children}</main> {/* Injects page.tsx here */}
      <footer className="p-4 border-t text-sm">
        Last updated: {new Date().toLocaleDateString()}
      </footer>
    </div>
  )
}

export default ContactLayout



