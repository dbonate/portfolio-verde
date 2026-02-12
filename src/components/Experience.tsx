'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Machado Meyer Advogados',
      position: 'Financial Analyst',
      period: '01/2020 - 11/2024',
      location: 'São Paulo, SP',
      description: 'Cadastro de fornecedores externos; cadastro e conferência de clientes. Conferência de dados cadastrais na receita federal e simples nacional',
      technologies: ['SalesForce', 'Excel'],
      link: 'https://www.machadomeyer.com.br/pt/'
    },
    {
      company: 'Machado Meyer Advogados',
      position: 'Estagiário de Secretariado',
      period: '08/2018 - 07/2019',
      location: 'São Paulo, SP',
      description: 'Apoio à secretárias das áreas, realizando calls, atendimento telefônico, emissão de cheque para pagamentos de cliente, compra de material, cotação de voos e compras das passagens aéreas, organização de agenda, reuniões, recados, follow up de atividades.Padronização de documentos e pastas.',
      technologies: ['Outlook', 'Excel', 'Word'],
      link: 'https://www.machadomeyer.com.br/pt/'
    },
    {
      company: 'Volkswagem do Brasil',
      position: 'Estágio em Secretariado',
      period: '03/2018 - 08/2018',
      location: 'São Bernardo do Campo, SP',
      description: 'Secretária do gerente da área da Montagem Final, organizando agenda, reuniões, recados, documentos para assinatura e follow up de atividades. Preparação das reuniões gerenciais, atas, avaliação de housekeeping, padronização de documentos e pastas.',
      technologies: ['Outlook', 'Excel', 'Word'],
      link: 'https://www.vw.com.br/pt.html'
    },
    {
      company: 'ABIFA',
      position: 'Auxiliar Administrativo/Secretaria',
      period: '09/2013 - 07/2014',
      location: 'São Paulo, SP',
      description: 'Atendimento ao PABX transferindo as ligações para os departamentos, controle de correspondências. Auxiliava o Secretário Executivo da empresa fazendo convocações para reuniões da Diretoria, cuidava do mailing com contatos dos associados e diretores, preparava a sala de reuniões, controle de estoque e compras de materiais de escritório de limpeza.',
      technologies: ['Outlook', 'Excel', 'Word'],
      link: '#'
    },
    {
      company: 'Grupo GV Risco',
      position: 'Operador de Rastreamento',
      period: '11/2010 - 09/2011',
      location: 'São Paulo, SP',
      description: 'Atuando na área de logística, atendimento ao telefone e rádio Nextel para comunicar-se com as transportadoras, Pa’s e motoristas através de um código de identificação. E-mails, finalizações de ocorrências via sistema, baixa em notas fiscais atuais e excedidas pelo sistema.',
      technologies: ['Sistema de rastreamento'],
      link: '#'
    },
  ]

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Minha jornada profissional e as empresas que fizeram parte da minha evolução
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-secondary-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-12 md:ml-16">
                  <div className="bg-white border border-secondary-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900 mb-1">
                          {exp.position}
                        </h3>
                        <div className="flex items-center space-x-4 text-secondary-600">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 md:mt-0 flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors duration-200"
                      >
                        <span className="text-sm font-medium">Visitar</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="text-secondary-600 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-semibold text-secondary-700 mb-2">
                        Tecnologias Utilizadas:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8 text-center">
            Formação Acadêmica
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary-50 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                Secretariado Executivo Trílingue
              </h4>
              <p className="text-secondary-600 mb-2">Centro Universitário FMU | FIAM-FAAM</p>
              <p className="text-sm text-secondary-500">12/2019</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary-50 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-secondary-900 mb-2">
                Escola de Idiomas
              </h4>
              <p className="text-secondary-600 mb-2">English</p>
              <p className="text-sm text-secondary-500">07/2024</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 