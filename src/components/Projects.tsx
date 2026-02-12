'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Migração de E-commerce Magento da Adobe Cloud para AWS',
      description: 'Migração de E-commerce Magento da Adobe Cloud para AWS, com arquitetura altamente escalável e pipeline de CI/CD totalmente automatizado via GitLab e ArgoCD + Keda.',
      image: '/images/logo-rdsaude.svg',
      category: 'cloud',
      technologies: ['AWS', 'Magento (MageOS)', 'PHP', 'MySQL', 'Redis', 'Elasticsearch', 'GitLab CI', 'ArgoCD', 'Keda', 'Terraform', 'Kubernetes'],
      //liveUrl: '#',
      //githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'OCR System with AI',
      description: 'Sistema de OCR inteligente para validação de Docs, utilizando Gemini AI. A solução é construída em uma arquitetura serverless segura com API Gateway e Lambdas privadas na AWS.',
      image: '/images/logo-rdsaude.svg',
      category: 'devops',
      technologies: ['AWS', 'Lambda', 'API Gateway', 'Cloudvision', 'Gemini AI', 'Terraform'],
      //liveUrl: '#',
      //githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Portfólio Pessoal com CI/CD na AWS',
      description: 'Este portfólio é um projeto de engenharia de plataforma, construído com Next.js e hospedado em uma arquitetura serverless na AWS, com pipeline de CI/CD totalmente automatizado via GitHub Actions.',
      image: '/images/Logo-Bonate.png',
      category: 'cloud',
      technologies: ['AWS (S3, CloudFront, ACM)', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GitHub Actions (CI/CD)', 'IA Generativa'],
      liveUrl: 'https://denis.dlbonate.com.br',
      githubUrl: 'https://github.com/dbonate/portfolio.git',
      featured: true
    }
  ]

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'platform', label: 'Platform' },
    { id: 'devops', label: 'DevOps' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'monitoring', label: 'Monitoring' }
  ]

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" className="section-padding bg-secondary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Projetos
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi ao longo da minha carreira
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${activeFilter === filter.id
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-secondary-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image - CORRIGIDO */}
              <div
                className="relative h-48 bg-center bg-no-repeat bg-contain"
                style={{
                  // Usa a imagem do projeto como fundo
                  backgroundImage: project.image ? `url(${project.image})` : 'none',
                  // Cor de fundo suave que aparece se a imagem não existir
                  backgroundColor: '#eef2ff'
                }}
              >
                {!project.image && (
                  // Fallback com as iniciais (só aparece se não houver imagem)
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary-400">
                      {project.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                )}

                {project.featured && (
                  <div className="absolute top-4 right-4 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Destaque
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-secondary-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                  >
                    <Eye className="h-4 w-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-secondary-600 hover:text-secondary-700 transition-colors duration-200"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-secondary-600 mb-6">
            Interessado em ver mais projetos ou trabalhar juntos?
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Vamos Conversar</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 