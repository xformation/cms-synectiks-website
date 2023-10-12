
import './globals.css'
import '../styles/global.css'
import '../styles/responsive.css'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Nav/>
        {children}
         <Footer/>
        </body>
    </html>
  )
}