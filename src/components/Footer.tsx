import React from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Twitter, Youtube, Linkedin, Github, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { Icon: Twitter, href: '#' },
    { Icon: Youtube, href: '#' },
    { Icon: Linkedin, href: '#' },
    { Icon: Github, href: '#' },
    { Icon: Instagram, href: '#' },
    { Icon: Facebook, href: '#' }
  ]

  const footerLinks = [
    { title: '公司', items: [
      { name: '关于我们', path: '/about' },
      { name: '产品', path: '/products' },
      { name: '联系我们', path: '/contact' },
      { name: '新闻', path: '#' },
      { name: '职业', path: '#' }
    ]},
    { title: '资源', items: [
      { name: '文档', path: '#' },
      { name: '案例研究', path: '#' },
      { name: '博客', path: '#' },
      { name: '常见问题', path: '#' }
    ]},
    { title: '法律', items: [
      { name: '隐私政策', path: '#' },
      { name: '使用条款', path: '#' },
      { name: '安全', path: '#' }
    ]}
  ]

  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-xl font-bold text-gray-800">山西易凡通科技</span>
            </div>
            <p className="text-sm mb-4">工业自动化控制 | 软硬件开发 | AI人工智能代理</p>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <a key={index} href={href} className="text-gray-400 hover:text-gray-600">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link to={item.path} className="text-sm hover:text-blue-600">{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 pt-8 text-sm text-center">
          <p>&copy; 2024 山西易凡通科技有限公司. 保留所有权利.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer