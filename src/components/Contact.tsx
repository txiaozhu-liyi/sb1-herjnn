import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">联系我们</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">电子邮件</h3>
            <p className="text-gray-600">info@techcompany.com</p>
          </div>
          <div className="text-center">
            <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">电话</h3>
            <p className="text-gray-600">+86 123 4567 8900</p>
          </div>
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">地址</h3>
            <p className="text-gray-600">中国北京市朝阳区科技园路88号</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact