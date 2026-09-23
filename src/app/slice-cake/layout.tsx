import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forma Acrílica Slice Cake 30x10cm | Witz',
  description:
    'Forma acrílica para Slice Cake em acrílico cristal de 3 mm. Medidas internas 30x10x10 cm, sistema desmontável em 3 peças e película protetora removível. Código EAN 7792539480714.',
  alternates: {
    canonical: 'https://www.witzbr.com.br/slice-cake',
  },
  openGraph: {
    title: 'Forma Acrílica Slice Cake 30x10cm | Witz',
    description:
      'Forma acrílica para Slice Cake em acrílico cristal de 3 mm. Medidas internas 30x10x10 cm, sistema desmontável e película protetora removível.',
    url: 'https://www.witzbr.com.br/slice-cake',
    siteName: 'Witz',
    type: 'website',
    images: [
      {
        url: 'https://www.witzbr.com.br/img/1007.jpg',
        width: 1200,
        height: 630,
        alt: 'Forma Acrílica Slice Cake 30x10cm - Witz EAN 7792539480714',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forma Acrílica Slice Cake 30x10cm | Witz',
    description:
      'Forma acrílica para Slice Cake em acrílico cristal de 3 mm. Medidas internas 30x10x10 cm, sistema desmontável e película protetora removível.',
    images: ['https://www.witzbr.com.br/img/1007.jpg'],
  },
};

export default function SliceCakeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
