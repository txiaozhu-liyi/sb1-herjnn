import React from 'react'
import { Smartphone, Laptop, Cloud } from 'lucide-react'

const Products = () => {
  const products = [
    { icon: Smartphone, name: '智能手机', description: '最新5G技术，高性能处理器' },
    { icon: Laptop, name: '笔记本电脑', description: '轻薄设计，长续航' },
    { icon: Cloud, name: '云服务', description: '安全可靠的云存储和计算服务' },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">我们的产品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <product.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products