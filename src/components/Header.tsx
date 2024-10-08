import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Cpu, Menu, X } from 'lucide-react'
import { Slot } from '@radix-ui/react-slot'
import { Button } from './ui/button'

const Header = () => {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: '首页', path: '/' },
    { name: '产品', path: '/products' },
    { name: '关于我们', path: '/about' },
    { name: '联系我们', path: '/contact' }
  ]

  const IconButton = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, ...props }, ref) => (
      <Slot ref={ref} {...props}>
        {children}
      </Slot>
    )
  )

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <IconButton className="text-blue-600 mr-2">
              <Cpu className="h-8 w-8" />
            </IconButton>
            <span className="text-xl font-bold text-gray-800">山西易凡通科技有限公司</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            {menuItems.map((item) => (
              <Button
                key={item.name}
                asChild
                variant={location.pathname === item.path ? "default" : "ghost"}
              >
                <Link
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              </Button>
            ))}
          </nav>
          <div className="md:hidden">
            <IconButton
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </IconButton>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  asChild
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className="w-full justify-start"
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === item.path ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </Button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Header