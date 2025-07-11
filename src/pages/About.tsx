
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Recycle, Zap, TreePine, Sun, Wind, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const About = () => {
  const principles = [
    {
      icon: <Recycle className="h-8 w-8 text-green-500" />,
      title: "Economia Circular",
      description: "Reutilização e reciclagem de equipamentos para minimizar desperdícios"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Eficiência Energética",
      description: "Otimização do consumo de energia em data centers e dispositivos"
    },
    {
      icon: <TreePine className="h-8 w-8 text-eco-primary" />,
      title: "Neutralidade Carbônica",
      description: "Redução e compensação das emissões de CO₂ geradas pela tecnologia"
    },
    {
      icon: <Sun className="h-8 w-8 text-orange-500" />,
      title: "Energia Renovável",
      description: "Uso de fontes de energia limpa para alimentar infraestruturas de TI"
    }
  ];

  const benefits = [
    "Redução de até 60% nos custos operacionais",
    "Diminuição de 75% nas emissões de carbono",
    "Melhoria da imagem corporativa",
    "Atração de talentos conscientes",
    "Compliance com regulamentações ambientais",
    "Aumento da eficiência operacional"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header/Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf/>
              <span className="text-2xl font-bold text-gray-800">EcoTech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-eco-primary transition-colors">Início</Link>
              <Link to="/impactos" className="text-gray-600 hover:text-eco-primary transition-colors">Impactos</Link>
              <Link to="/solucoes" className="text-gray-600 hover:text-eco-primary transition-colors">Soluções</Link>
              <Link to="/dados" className="text-gray-600 hover:text-eco-primary transition-colors">Dados</Link>
              <Link to="/about" className="text-eco-primary font-semibold">O que é TI Verde</Link>
              <Link to="/calculator" className="text-gray-600 hover:text-eco-primary transition-colors">Calculadora</Link>
            </div>
            <Link to="/calculator">
              <Button className="bg-eco-primary hover:bg-eco-secondary text-white">
                Calcular Impacto
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4 bg-eco-primary/10 text-eco-primary border-eco-primary/20">
              Conceitos Fundamentais
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              O que é 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-green-600"> T.I. Verde?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              T.I. Verde é a prática de projetar, fabricar, usar e descartar computadores, 
              servidores e sistemas associados de forma eficiente e ecologicamente responsável.
            </p>
          </div>

          {/* Definition Section */}
          <div className="mb-16">
            <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50 border-eco-primary/20">
              <CardContent>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Definição Completa
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                  A Tecnologia da Informação Verde (Green IT) engloba todas as práticas sustentáveis 
                  relacionadas ao uso da tecnologia. Isso inclui desde a escolha de equipamentos mais 
                  eficientes até a implementação de políticas de energia que reduzem o impacto ambiental 
                  das operações de TI. O objetivo é minimizar o uso de materiais perigosos, maximizar 
                  a eficiência energética e promover a reciclabilidade de produtos eletrônicos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Principles Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Princípios Fundamentais da T.I. Verde
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-md">
                      {principle.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-800">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Benefícios da Implementação
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <CheckCircle className="h-6 w-6 text-eco-primary flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-eco-primary to-green-600 text-white p-12 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold mb-6">
                Pronto para Implementar T.I. Verde?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Descubra como sua empresa pode se beneficiar das práticas sustentáveis 
                em tecnologia e começar a economizar hoje mesmo.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/solucoes">
                  <Button size="lg" variant="secondary" className="bg-white text-eco-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Ver Soluções Práticas
                  </Button>
                </Link>
                <Link to="/calculator">
                  <Button size="lg" variant="outline" className="bg-white text-eco-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Calcular Meu Impacto
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
