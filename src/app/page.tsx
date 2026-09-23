import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-[#1c1917] font-sans antialiased">
      {/* Header Witz Institucional */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-stone-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/img/Logo Witz.jpg"
              alt="Witz Logo Oficial"
              className="h-10 sm:h-12 w-auto object-contain rounded-lg border border-stone-200 shadow-xs"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900">
                Witz
              </span>
              <span className="text-[10px] text-stone-500 tracking-wider uppercase font-medium">
                Soluções em Acrílico & Corte a Laser
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/slice-cake"
              className="text-sm font-semibold px-4 py-2 rounded-xl bg-purple-700 hover:bg-purple-800 text-white transition-all shadow-xs"
            >
              Catálogo Slice Cake
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
        
        {/* Hero Section Institucional da Witz */}
        <section className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200">
            Empresa Especializada em Engenharia & Design em Acrílico
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-stone-900 tracking-tight leading-tight">
            Soluções em Acrílico, Corte a Laser e Comunicação Visual de Alta Precisão
          </h1>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto">
            A <strong>Witz</strong> projeta e fabrica peças personalizadas em acrílico cristal premium, equipamentos para confeitaria e elementos de comunicação visual produzidos com tecnologia de corte a laser.
          </p>
        </section>

        {/* 4 Pilares de Atuação da Witz */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 font-bold text-lg">
              ✨
            </div>
            <h2 className="font-bold text-stone-900 text-base">
              Soluções em Acrílico
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Desenvolvimento de formas, expositores e estruturas transparentes com padrão técnico elevado.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 font-bold text-lg">
              ⚡
            </div>
            <h2 className="font-bold text-stone-900 text-base">
              Corte a Laser
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Usinagem a laser de alta precisão garantindo encaixes perfeitos sem folgas e bordas polidas.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 font-bold text-lg">
              📐
            </div>
            <h2 className="font-bold text-stone-900 text-base">
              Comunicação Visual
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Criação de elementos gráficos corporativos, sinalizações técnicas e displays promocionais.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-700 font-bold text-lg">
              🛠️
            </div>
            <h2 className="font-bold text-stone-900 text-base">
              Peças Personalizadas
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed">
              Projetos sob medida atendendo especificações dimensionais rigorosas de cada cliente.
            </p>
          </div>
        </section>

        {/* Card em Destaque no Catálogo: Slice Cake 30x10cm (EAN 7792539480714) */}
        <section className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-stone-100 pb-6">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                PRODUTO OFICIAL DO CATÁLOGO
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
                Forma Acrílica Slice Cake 30x10cm
              </h2>
            </div>
            <div className="text-right text-xs font-mono text-stone-500 space-y-0.5">
              <div>Ref: <strong className="text-stone-900">1007</strong></div>
              <div>EAN: <strong className="text-purple-700">7792539480714</strong></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 aspect-[4/3] rounded-2xl overflow-hidden bg-stone-50 border border-stone-200 p-3 flex items-center justify-center">
              <img
                src="/img/1007.jpg"
                alt="Forma Acrílica Slice Cake 30x10cm Witz 1007"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="md:col-span-7 space-y-4">
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Produto desenvolvido para auxiliar na montagem, padronização e apresentação de Slice Cakes.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-stone-500 block mb-1">Material & Espessura</span>
                  <strong className="text-stone-900 block">Acrílico Cristal 3 mm</strong>
                </div>

                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-stone-500 block mb-1">Medidas Internas</span>
                  <strong className="text-purple-700 font-mono block">30 x 10 x 10 cm</strong>
                </div>

                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-stone-500 block mb-1">Medidas Externas</span>
                  <strong className="text-stone-800 font-mono block">33 x 10,7 x 10,3 cm</strong>
                </div>

                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200">
                  <span className="text-stone-500 block mb-1">Conteúdo da Embalagem</span>
                  <strong className="text-stone-900 block">3 Peças (1 U + 2 Tampas)</strong>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/slice-cake"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm transition-all shadow-xs"
                >
                  Consultar Ficha Técnica Oficial (Slice Cake) →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Institucional Witz */}
      <footer className="border-t border-stone-200 bg-white py-8 text-center text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-2">
          <p className="font-semibold text-stone-900">Witz — Soluções em Acrílico, Corte a Laser & Comunicação Visual</p>
          <p>© {new Date().getFullYear()} Witz • Domínio Oficial: www.witzbr.com.br</p>
        </div>
      </footer>
    </div>
  );
}
