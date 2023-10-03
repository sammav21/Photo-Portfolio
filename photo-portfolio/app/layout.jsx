import './globals.scss'


export const metadata = {
  title: 'Samuel Aviles Photography',
  description: 'Photography portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='app w100'>
        {children}
        </main>
      </body>
    </html>
  )
}
