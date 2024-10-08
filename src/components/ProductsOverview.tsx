import React from 'react'
import { Link } from 'react-router-dom'
import { Cpu, Code, Brain, Network } from 'lucide-react'

const ProductsOverview = () => {
  const products = [
    { icon: Cpu, name: '工业自动化控制', description: '先进的自动化控制解决方案' },
    { icon: Code, name: '软硬件开发', description: '定制化软硬件解决方案' },
    { icon: Brain, name: 'AI人工智能代理', description: '智能决策和流程优化' },
    { icon: Network, name: '工业物联网', description: '连接和管理工业设备' }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">我们的产品与服务</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <product.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <Link to="/products" className="text-blue-600 hover:text-blue-800 font-semibold">
                了解更多
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsOverview