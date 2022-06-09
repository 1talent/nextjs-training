import { CartProvider } from '@/context/Store'
import Nav from './Nav'

function Layout({ children }) {
  
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Nav />

        <main>
          {children}
        </main>

        {/* <Footer /> */}
      </div>
    </CartProvider>
  )
}

export default Layout
