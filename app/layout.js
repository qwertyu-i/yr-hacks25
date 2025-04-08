import '@/app/globals.css'
import Banner from './ui/banner'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Banner />
        {children}
      </body>
    </html>
  );
}
