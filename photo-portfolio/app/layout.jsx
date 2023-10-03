import './globals.css'


export const metadata = {
  title: 'Samuel Aviles Photography',
  description: 'Photography portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
