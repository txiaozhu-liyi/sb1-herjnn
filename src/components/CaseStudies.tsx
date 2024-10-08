import React from 'react';

interface CaseStudy {
  title: string;
  description: string;
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    title: "智慧城市解决方案",
    description: "为某大型城市提供智能交通管理系统，提高交通效率20%",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "工业4.0升级",
    description: "帮助制造企业实现生产线智能化，生产效率提升30%",
    image: "https://images.unsplash.com/photo-1565515269062-676f0f10e6d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "医疗AI诊断系统",
    description: "开发AI辅助诊断系统，提高罕见疾病诊断准确率40%",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "新能源管理平台",
    description: "为新能源企业开发智能管理平台，节省运营成本15%",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "智能家居系统",
    description: "开发全屋智能控制系统，提升居住舒适度和能源效率",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">成功案例</h2>
        <div className="relative">
          <div className="flex animate-scroll">
            {[...caseStudies, ...caseStudies].map((study, index) => (
              <div key={index} className="w-80 flex-shrink-0 mx-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2">{study.title}</h3>
                    <p className="text-gray-700">{study.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;