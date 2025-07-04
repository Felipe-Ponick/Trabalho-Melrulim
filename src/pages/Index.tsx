
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Zap, Earth, Cloud, Recycle, TreePine, Sun, Wind, ArrowRight, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const rotatingStats = [
    { value: "3.9%", label: "das emissões globais (Nature, 2021)", color: "text-red-500", source: "Freitag et al., Nature Communications" },
    { value: "205 TWh", label: "energia anual data centers (IEA, 2022)", color: "text-orange-500", source: "International Energy Agency" },
    { value: "40-84%", label: "redução possível (Google AI, 2019)", color: "text-eco-primary", source: "DeepMind Nature Energy" },
    { value: "$3.6T", label: "economia até 2030 (WEF, 2023)", color: "text-green-600", source: "World Economic Forum" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % rotatingStats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header/Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf />
              <span className="text-2xl font-bold text-gray-800">EcoTech</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-eco-primary font-semibold">Início</Link>
              <Link to="/impactos" className="text-gray-600 hover:text-eco-primary transition-colors">Impactos</Link>
              <Link to="/solucoes" className="text-gray-600 hover:text-eco-primary transition-colors">Soluções</Link>
              <Link to="/dados" className="text-gray-600 hover:text-eco-primary transition-colors">Dados</Link>
              <Link to="/about" className="text-gray-600 hover:text-eco-primary transition-colors">O que é TI Verde</Link>
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

      {/* Hero Section - Dados Científicos */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-blue-400/10"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-eco-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <Badge className="mb-6 bg-eco-primary/10 text-eco-primary border-eco-primary/20 text-lg px-6 py-2">
                Baseado em Pesquisa Científica
              </Badge>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-8">
                Tecnologia que
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-eco-primary to-green-600 block"> Regenera o Planeta</span>
                <span className="text-4xl lg:text-5xl text-gray-700 block mt-4">
                  Dados Reais, Impacto Medido
                </span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                Empresas como <span className="font-semibold text-eco-primary">Google, Microsoft e Apple</span> já implementaram 
                soluções que reduziram <span className="font-semibold text-eco-primary">40-84% das emissões</span> com 
                <span className="font-semibold text-eco-primary"> economia comprovada de bilhões</span>.
              </p>
              <p className="text-lg text-gray-500 mb-12">
                Fontes: Nature Energy (2019), MIT Technology Review (2023), Science Journal (2022)
              </p>
            </div>

            {/* Estatística Rotativa com Fontes */}
            <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-green-100 max-w-lg mx-auto">
                <div className="text-6xl font-bold mb-2 transition-all duration-500" 
                     style={{ color: rotatingStats[currentStat].color }}>
                  {rotatingStats[currentStat].value}
                </div>
                <div className="text-lg text-gray-700 mb-2">
                  {rotatingStats[currentStat].label}
                </div>
                <div className="text-xs text-gray-500 italic">
                  Fonte: {rotatingStats[currentStat].source}
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  {rotatingStats.map((_, index) => (
                    <div 
                      key={index} 
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentStat ? 'bg-eco-primary' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs Principais */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
              <Link to="/impactos">
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-12 py-4 text-lg font-semibold">
                  <Zap className="mr-3 h-6 w-6" />
                  Ver Dados Científicos
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/calculator">
                <Button variant="outline" size="lg" className="border-2 border-eco-primary text-eco-primary hover:bg-eco-primary hover:text-white px-12 py-4 text-lg font-semibold">
                  <PlayCircle className="mr-3 h-6 w-6" />
                  Calculadora Científica
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Casos Reais */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Casos Reais de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dados verificados de implementações reais em empresas Fortune 500 e estudos peer-reviewed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-lg">
                  <Earth className="h-12 w-12 text-red-500" />
                </div>
                <CardTitle className="text-xl text-gray-800">Google Data Centers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  IA DeepMind reduziu 40% do consumo energético de refrigeração
                </p>
                <div className="text-3xl font-bold text-red-500 mb-2">40%</div>
                <p className="text-sm text-gray-500 mb-3">Redução comprovada desde 2016</p>
                <div className="text-xs text-gray-500 italic">
                  Fonte: Nature Energy (2019), DeepMind Blog
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-lg">
                  <Zap className="h-12 w-12 text-blue-500" />
                </div>
                <CardTitle className="text-xl text-gray-800">Microsoft Azure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Carbono negativo até 2030 com investimento de $1 bilhão
                </p>
                <div className="text-3xl font-bold text-blue-500 mb-2">-100%</div>
                <p className="text-sm text-gray-500 mb-3">Meta carbono negativo até 2030</p>
                <div className="text-xs text-gray-500 italic">
                  Fonte: Microsoft Sustainability Report (2023)
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-eco-primary/10 border-green-200">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-white rounded-full shadow-lg">
                  <TreePine className="h-12 w-12 text-eco-primary" />
                </div>
                <CardTitle className="text-xl text-gray-800">Apple Supply Chain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  100% energia renovável e fornecedores carbon neutral
                </p>
                <div className="text-3xl font-bold text-eco-primary mb-2">100%</div>
                <p className="text-sm text-gray-500 mb-3">Energia renovável desde 2018</p>
                <div className="text-xs text-gray-500 italic">
                  Fonte: Apple Environmental Progress Report (2023)
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA com Dados Reais */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-eco-primary to-green-600 text-white p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-4xl font-bold mb-6">
                O Futuro é Agora - Dados Comprovados
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Mais de 1.000 empresas na iniciativa RE100 já alcançaram 100% energia renovável. 
                Estudos do MIT mostram ROI médio de 300% em 18 meses.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-bold">1000+</div>
                  <div className="text-sm opacity-90">empresas RE100 (2023)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">300%</div>
                  <div className="text-sm opacity-90">ROI médio (MIT Study, 2022)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">18 meses</div>
                  <div className="text-sm opacity-90">payback médio (McKinsey, 2023)</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/solucoes">
                  <Button size="lg" variant="secondary" className="bg-white text-eco-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Ver Implementações Reais
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/dados">
                  <Button size="lg" variant="outline" className="bg-white text-eco-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                    Acessar Base Científica
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

export default Index;
