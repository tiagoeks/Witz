import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Witz - Modern Web Platform',
  description: 'Witz application deployed seamlessly on Railway',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
