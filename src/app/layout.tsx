import ClientWrapper from './components/clientWrapper'
import './globals.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ClientWrapper>{children}</ClientWrapper>
          {/* <div className="content">{children}</div> */}
      </body>
    </html>
  )
}
