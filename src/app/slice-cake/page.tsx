'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ProductImage {
  id: string;
  title: string;
  src: string;
  fallbackSvg: string;
  alt: string;
}

const productImages: ProductImage[] = [
  {
    id: '1007',
    title: 'Visão Geral (Ref. 1007)',
    src: '/img/1007.jpg',
    fallbackSvg: '/slice-cake/produto-principal.svg',
    alt: 'Fotografia técnica da Forma Acrílica Slice Cake 30x10cm Witz - Modelo Ref. 1007',
  },
  {
    id: '1007.1',
    title: 'Estrutura Montada',
    src: '/img/1007.1.jpg',
    fallbackSvg: '/slice-cake/produto-montado.svg',
    alt: 'Forma Acrílica Slice Cake 30x10cm montada com a calha principal U e as duas tampas de encaixe',
  },
  {
    id: '1007.2',
    title: 'Vista Lateral & Transparência',
    src: '/img/1007.2.jpg',
    fallbackSvg: '/slice-cake/produto-principal.svg',
    alt: 'Forma Acrílica Slice Cake em Acrílico Cristal 3mm - Ref. 1007.2',
  },
  {
    id: '1007.3',
    title: 'Encaixes & Desmontagem',
    src: '/img/1007.3.jpg',
    fallbackSvg: '/slice-cake/produto-desmontado.svg',
    alt: 'Detalhamento do sistema de encaixe sem cola - Ref. 1007.3',
  },
  {
    id: '1007.4',
    title: 'Película Protetora & Medidas',
    src: '/img/1007.4.jpg',
    fallbackSvg: '/slice-cake/medidas.svg',
    alt: 'Detalhamento das dimensões e película protetora removível - Ref. 1007.4',
  },
  {
    id: '1007.5',
    title: 'Acabamento dos Cantos',
    src: '/img/1007.5.jpg',
    fallbackSvg: '/slice-cake/pelicula-protetora.svg',
    alt: 'Cantos arredondados e acabamento premium do acrílico - Ref. 1007.5',
  },
];

export default function SliceCakeProductPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const activeImage = productImages[activeImageIndex];

  const handleImageError = (imageId: string) => {
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  };

  const currentImageSrc = imageErrors[activeImage.id]
    ? activeImage.fallbackSvg
    : activeImage.src;

  // JSON-LD Schema.org Product técnico com EAN 7792539480714
  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Forma Acrílica Slice Cake 30x10cm',
    sku: '1007',
    gtin13: '7792539480714',
    mpn: 'WITZ-1007',
    description:
      'Ficha técnica e especificações oficiais da forma acrílica para Slice Cake. Acrílico cristal de 3 mm, medidas internas 30x10x10 cm, estrutura desmontável em 3 peças sem cola e película protetora removível.',
    url: 'https://www.witzbr.com.br/slice-cake',
    image: [
      'https://www.witzbr.com.br/img/1007.jpg',
      'https://www.witzbr.com.br/img/1007.1.jpg',
      'https://www.witzbr.com.br/img/1007.2.jpg',
      'https://www.witzbr.com.br/img/1007.3.jpg',
      'https://www.witzbr.com.br/img/1007.4.jpg',
      'https://www.witzbr.com.br/img/1007.5.jpg',
    ],
    brand: {
      '@type': 'Brand',
      name: 'Witz',
      logo: 'https://www.witzbr.com.br/img/Logo%20Witz.jpg',
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Witz',
      url: 'https://www.witzbr.com.br',
      logo: 'https://www.witzbr.com.br/img/Logo%20Witz.jpg',
    },
    material: 'Acrílico Cristal Premium',
    depth: {
      '@type': 'QuantitativeValue',
      value: 30,
      unitCode: 'CMT',
    },
    width: {
      '@type': 'QuantitativeValue',
      value: 10,
      unitCode: 'CMT',
    },
    height: {
      '@type': 'QuantitativeValue',
      value: 10,
      unitCode: 'CMT',
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Código EAN',
        value: '7792539480714',
      },
      {
        '@type': 'PropertyValue',
        name: 'Código de Referência',
        value: '1007',
      },
      {
        '@type': 'PropertyValue',
        name: 'Espessura do Material',
        value: '3 mm',
      },
      {
        '@type': 'PropertyValue',
        name: 'Medidas Externas',
        value: '33 x 10,7 x 10,3 cm',
      },
      {
        '@type': 'PropertyValue',
        name: 'Quantidade de Peças',
        value: '3 peças',
      },
      {
        '@type': 'PropertyValue',
        name: 'Proteção de Superfície',
        value: 'Película Protetora Removível',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-[#1c1917] font-sans antialiased">
      {/* Script JSON-LD Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      {/* Header Institucional Limpo e Elegante */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/90 border-b border-stone-200/80 shadow-xs" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" aria-label="Witz Página Inicial" className="flex items-center gap-3 group">
            <img
              src="/img/Logo Witz.jpg"
              alt="Logo Oficial Witz"
              className="h-10 sm:h-12 w-auto object-contain rounded-lg border border-stone-200 shadow-xs"
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-stone-900">
                Witz
              </span>
              <span className="text-[10px] text-stone-500 tracking-wider uppercase font-medium">
                Catálogo Técnico Oficial
              </span>
            </div>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-6" aria-label="Navegação Principal">
            <Link
              href="/"
              className="text-sm font-medium text-stone-600 hover:text-purple-700 transition-colors"
            >
              Início
            </Link>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200">
              Ref. 1007
            </span>
          </nav>
        </div>
      </header>

      {/* Breadcrumb Limpo */}
      <nav aria-label="Breadcrumb" className="bg-stone-100/60 border-b border-stone-200/60 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-stone-500 flex items-center gap-2">
          <Link href="/" className="hover:underline hover:text-stone-800">
            Witz
          </Link>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span className="text-stone-800 font-medium" aria-current="page">
            Forma Acrílica Slice Cake 30x10cm
          </span>
        </div>
      </nav>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 sm:space-y-12" role="main">
        
        {/* Painel de Identificação do Produto */}
        <section className="bg-white rounded-2xl border border-stone-200/80 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-stone-100 pb-6">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded border border-purple-200">
                  FICHA TÉCNICA OFICIAL
                </span>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded border border-stone-200">
                  REF: 1007
                </span>
                <span className="text-xs font-mono text-stone-500 bg-stone-100 px-2.5 py-0.5 rounded border border-stone-200">
                  EAN: 7792539480714
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight">
                Forma Acrílica Slice Cake 30x10cm
              </h1>
            </div>

            <div className="flex items-center gap-3 bg-stone-50 px-4 py-2.5 rounded-xl border border-stone-200 text-xs shrink-0">
              <img
                src="/img/Logo Witz.jpg"
                alt="Witz Logo"
                className="h-8 w-auto rounded border border-stone-200"
              />
              <div>
                <span className="text-stone-500 block text-[10px] uppercase font-medium">Fabricante / Marca</span>
                <strong className="text-stone-900 font-bold">Witz (Witz Brasil)</strong>
              </div>
            </div>
          </div>

          {/* Cards Resumidos das 5 Especificações Principais */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-1">
              <span className="text-stone-500 text-[11px] font-medium block">Material</span>
              <strong className="text-stone-900 font-semibold block">Acrílico Cristal Premium</strong>
            </div>

            <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-1">
              <span className="text-stone-500 text-[11px] font-medium block">Espessura</span>
              <strong className="text-stone-900 font-semibold block">3 mm</strong>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/50 border border-purple-200/70 space-y-1">
              <span className="text-purple-700 text-[11px] font-medium block">Medidas Internas</span>
              <strong className="text-purple-900 font-semibold block">30 x 10 x 10 cm</strong>
            </div>

            <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-1">
              <span className="text-stone-500 text-[11px] font-medium block">Qtd. de Peças</span>
              <strong className="text-stone-900 font-semibold block">3 Peças (1 U + 2 Tampas)</strong>
            </div>

            <div className="p-4 rounded-xl bg-stone-50/80 border border-stone-200/70 space-y-1 col-span-2 sm:col-span-1">
              <span className="text-stone-500 text-[11px] font-medium block">Sistema de Montagem</span>
              <strong className="text-stone-900 font-semibold block">Encaixe sem cola</strong>
            </div>
          </div>
        </section>

        {/* Hero & Galeria de Imagens do Produto */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Galeria Elegante com Fundo Neutro Claro (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-xs flex items-center justify-center p-4">
              <img
                src={currentImageSrc}
                alt={activeImage.alt}
                onError={() => handleImageError(activeImage.id)}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-stone-200 px-3 py-1 rounded-lg text-xs font-mono text-stone-700 shadow-xs">
                {activeImage.title}
              </div>
            </div>

            {/* Thumbnails Elegantes */}
            <div className="grid grid-cols-6 gap-2 sm:gap-3" role="group" aria-label="Galeria de fotos do produto 1007">
              {productImages.map((img, idx) => {
                const isSelected = activeImageIndex === idx;
                const thumbSrc = imageErrors[img.id]
                  ? img.fallbackSvg
                  : img.src;

                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    aria-label={`Selecionar foto ${img.title}`}
                    aria-pressed={isSelected}
                    className={`relative aspect-square rounded-xl overflow-hidden border p-1 transition-all bg-white ${
                      isSelected
                        ? 'border-purple-600 ring-2 ring-purple-600/30 scale-[1.02]'
                        : 'border-stone-200 opacity-70 hover:opacity-100 hover:border-stone-300'
                    }`}
                  >
                    <img
                      src={thumbSrc}
                      alt={`Foto miniatura ${img.title}`}
                      onError={() => handleImageError(img.id)}
                      className="w-full h-full object-contain"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Coluna Lateral de Descrição & Dados de Registro (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 border-b border-stone-100 pb-2">
                Descrição do Produto
              </h2>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                Produto desenvolvido para auxiliar na montagem, padronização e apresentação de Slice Cakes.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs space-y-3">
              <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 border-b border-stone-100 pb-2">
                Identificação & Códigos Oficiais
              </h2>
              <div className="space-y-2.5 text-sm">
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Fabricante / Marca:</span>
                  <strong className="text-stone-900 font-semibold">Witz</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Código EAN:</span>
                  <strong className="text-purple-700 font-mono font-bold">7792539480714</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-stone-100">
                  <span className="text-stone-500">Código de Referência:</span>
                  <strong className="text-stone-900 font-mono">1007</strong>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-stone-500">Domínio Oficial:</span>
                  <a href="https://www.witzbr.com.br" className="text-purple-700 hover:underline font-medium">
                    www.witzbr.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO DESTACADA ELEGANTE: PELÍCULA PROTETORA REMOVÍVEL */}
        <section className="rounded-2xl bg-[#fffdfa] border border-amber-200/90 p-6 sm:p-8 space-y-3 shadow-xs" aria-labelledby="pelicula-heading">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200 text-xs font-mono font-bold uppercase">
              Aviso Importante
            </span>
            <h2 id="pelicula-heading" className="text-lg font-bold text-stone-900">
              Película Protetora Removível
            </h2>
          </div>
          <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal border-l-3 border-amber-400 pl-4 py-1">
            Todas as peças são enviadas com película protetora para preservar a superfície do acrílico durante fabricação, armazenamento e transporte.
            <br />
            <strong className="text-amber-950 font-semibold">
              A película deve ser removida antes do primeiro uso para revelar a transparência do acrílico.
            </strong>
          </p>
        </section>

        {/* Principais Características Técnicas */}
        <section className="space-y-4" aria-labelledby="caracteristicas-heading">
          <h2 id="caracteristicas-heading" className="text-lg font-bold text-stone-900 border-l-4 border-purple-600 pl-3">
            Principais Características
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1.5">
              <h3 className="font-bold text-stone-900 text-sm">
                Encaixes Precisos
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Sistema de dobradura e encaixes projetados para montagem sem a utilização de cola.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1.5">
              <h3 className="font-bold text-stone-900 text-sm">
                Estrutura Desmontável
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Estrutura desmontável para facilitar a higienização e manutenção sanitária.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1.5">
              <h3 className="font-bold text-stone-900 text-sm">
                Cantos Arredondados
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Acabamento suave nas bordas e cantos para manuseio seguro.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-stone-200 shadow-xs space-y-1.5">
              <h3 className="font-bold text-stone-900 text-sm">
                Acrílico Cristal 3 mm
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Material de alta transparência e espessura de 3 milímetros.
              </p>
            </div>
          </div>
        </section>

        {/* Tabela de Especificações Técnicas Limpa + Conteúdo da Embalagem */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabela Limpa de Especificações (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            <h2 className="text-lg font-bold text-stone-900 border-l-4 border-purple-600 pl-3">
              Ficha Técnica Detalhada
            </h2>

            <div className="rounded-xl overflow-hidden border border-stone-200 bg-white shadow-xs">
              <table className="w-full text-left text-sm text-stone-700 divide-y divide-stone-200">
                <caption className="sr-only">Especificações técnicas da Forma Acrílica Slice Cake 30x10cm Witz (Ref. 1007, EAN 7792539480714)</caption>
                <tbody className="divide-y divide-stone-100">
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70 w-1/3">
                      Nome do Produto
                    </th>
                    <td className="py-3 px-5 font-semibold text-stone-900">
                      Forma Acrílica Slice Cake 30x10cm
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Código EAN
                    </th>
                    <td className="py-3 px-5 text-purple-700 font-mono font-bold">
                      7792539480714
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Código de Referência
                    </th>
                    <td className="py-3 px-5 text-stone-900 font-mono">
                      1007
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Marca / Fabricante
                    </th>
                    <td className="py-3 px-5 text-stone-900 font-medium">
                      Witz
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Material
                    </th>
                    <td className="py-3 px-5 text-stone-900">
                      Acrílico Cristal Premium
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Espessura do Acrílico
                    </th>
                    <td className="py-3 px-5 text-stone-900 font-mono">
                      3 mm
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Medidas Internas
                    </th>
                    <td className="py-3 px-5 text-purple-700 font-mono font-bold">
                      30 x 10 x 10 cm
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Medidas Externas
                    </th>
                    <td className="py-3 px-5 text-stone-800 font-mono">
                      33 x 10,7 x 10,3 cm
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Sistema de Montagem
                    </th>
                    <td className="py-3 px-5 text-stone-900">
                      Dobradura e encaixes precisos
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Uso de Cola
                    </th>
                    <td className="py-3 px-5 text-emerald-700 font-medium">
                      Não utiliza cola na montagem
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Higienização
                    </th>
                    <td className="py-3 px-5 text-stone-900">
                      Estrutura desmontável para facilitar a limpeza
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Acabamento
                    </th>
                    <td className="py-3 px-5 text-stone-900">
                      Cantos arredondados
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="py-3 px-5 font-medium text-stone-500 bg-stone-50/70">
                      Proteção de Superfície
                    </th>
                    <td className="py-3 px-5 text-amber-900 font-medium">
                      Enviado com película protetora removível
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Conteúdo da Embalagem & Resumo Dimensional (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-lg font-bold text-stone-900 border-l-4 border-purple-600 pl-3">
              Conteúdo da Embalagem
            </h2>

            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-4">
              <ul className="space-y-3 text-sm text-stone-700">
                <li className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 text-xs">
                    1x
                  </span>
                  <div>
                    <strong className="text-stone-900 block">Forma Principal em formato &quot;U&quot;</strong>
                    <span className="text-xs text-stone-500">Estrutura central com dobradura e calhas de encaixe</span>
                  </div>
                </li>

                <li className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 text-xs">
                    2x
                  </span>
                  <div>
                    <strong className="text-stone-900 block">Tampas Laterais de Encaixe</strong>
                    <span className="text-xs text-stone-500">Placas de fechamento lateral por encaixe direto</span>
                  </div>
                </li>
              </ul>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-sm">
                <span className="text-stone-600 font-medium">Total de peças na embalagem:</span>
                <span className="font-mono font-bold text-stone-900 px-3 py-1 rounded bg-stone-100 border border-stone-200">
                  3 Peças
                </span>
              </div>
            </div>

            {/* Resumo Dimensional */}
            <div className="p-6 rounded-xl bg-white border border-stone-200 shadow-xs space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500">
                Resumo Dimensional
              </h3>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="text-stone-500 block mb-1">Medidas Internas</span>
                  <span className="font-mono text-purple-700 text-sm font-bold">30 x 10 x 10 cm</span>
                </div>
                <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/70">
                  <span className="text-stone-500 block mb-1">Medidas Externas</span>
                  <span className="font-mono text-stone-800 text-sm font-bold">33 x 10,7 x 10,3 cm</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Institucional Limpo */}
      <footer className="mt-16 border-t border-stone-200 bg-white py-8 text-stone-500 text-xs" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/img/Logo Witz.jpg"
                alt="Witz"
                className="h-8 w-auto rounded border border-stone-200"
              />
              <span className="text-base font-bold text-stone-900">Witz</span>
            </div>
            <p className="text-stone-500">
              Documentação e Especificação Técnica Oficial do Produto • Marca Registrada Witz
            </p>
          </div>

          <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row justify-between items-center gap-3 text-stone-500">
            <span>
              © {new Date().getFullYear()} Witz. Domínio Oficial:{' '}
              <a href="https://www.witzbr.com.br" className="text-stone-700 hover:text-purple-700 underline font-medium">
                www.witzbr.com.br
              </a>
            </span>
            <div className="flex gap-4">
              <Link href="/" className="hover:text-purple-700">
                Página Inicial
              </Link>
              <Link href="/slice-cake" className="hover:text-purple-700">
                Ficha Técnica Slice Cake
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
