import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="团队合作" className="rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">关于我们</h2>
            <p className="text-gray-600 mb-6">
              科技创新有限公司成立于2010年，是一家致力于推动科技创新和数字化转型的领先企业。我们的团队由行业顶尖的工程师、设计师和创新者组成，致力于为客户提供最前沿的科技解决方案。
            </p>
            <p className="text-gray-600">
              我们的使命是通过持续创新和卓越的客户服务，帮助企业和个人在数字时代蓬勃发展。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About