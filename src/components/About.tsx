'use client'

import { motion } from 'framer-motion'
import { User, MapPin, Calendar, GraduationCap } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Nome', value: process.env.NEXT_PUBLIC_NAME_COMPLETO || 'Seu Nome Completo' },
    { icon: MapPin, label: 'Localização', value: process.env.NEXT_PUBLIC_CITY || 'Sua Cidade, Estado' },
    { icon: Calendar, label: 'Idade', value: process.env.NEXT_PUBLIC_AGE || 'XX anos' },
    { icon: GraduationCap, label: 'Formação', value: process.env.NEXT_PUBLIC_EDUCATION || 'Sua Formação' },
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Conheça um pouco mais sobre minha jornada profissional e paixões
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
              Informações Pessoais
            </h3>

            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4"
                >
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <info.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">{info.label}</p>
                    <p className="font-medium text-secondary-900">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-secondary-900">
              Minha História
            </h3>

            <div className="space-y-4 text-secondary-600">
              <p>
                Analista dedicada a transformar dados em organização. Minha experiência abrange o ciclo
                completo de gestão de cadastros — desde a entrada de notas fiscais até a estruturação de
                processos e atendimento a clientes — sempre priorizando a acuracidade e a conformidade das
                informações. Acredito que a excelência operacional nasce da atenção aos detalhes e de um
                fluxo de trabalho bem estruturado, pilares que guiam minha atuação profissional para
                impulsionar os resultados do negócio.
              </p>

              <p>
                Para mim, uma operação eficiente — baseada em cadastros precisos e fluxos de notas fiscais bem estruturados — é o alicerce de qualquer grande empresa. Assim como em uma infraestrutura robusta, a falha em um pequeno dado pode comprometer todo o resultado. Com essa visão estratégica e olhar atento aos processos, transformo a complexidade burocrática em fluxos ágeis, garantindo que a base de clientes e informações seja sempre o ativo mais confiável da organização.
              </p>

              <p>
                Acredito que processos bem desenhados eliminam barreiras para o crescimento. Minha missão é atuar como o elo estratégico entre a entrada de dados e a entrega final ao cliente, garantindo que notas e cadastros fluam sem erros. Dedico meu trabalho a manter a excelência operacional, provando que a organização técnica e o olhar atento aos processos são as ferramentas mais poderosas para sustentar o sucesso de uma organização.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Valores e Objetivos
              </h4>
              <ul className="space-y-2 text-secondary-600">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Precisão de Dados: Garantir a integridade e a acurácia absoluta em todos os cadastros e registros.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Eficiência Operacional: Otimizar fluxos para máxima agilidade e conformidade nos processos corporativos.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Sinergia entre Áreas: Promover a colaboração entre departamentos para eliminar gargalos operacionais.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Atualização Contínua: Manter o foco constante em novas normas fiscais e metodologias de gestão.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span>Padronização Técnica: Documentar e compartilhar boas práticas para elevar o desempenho do time.</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 