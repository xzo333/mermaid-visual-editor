import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mermaid 可视化编辑器',
  description: '用于 Mermaid.js 图表的可视化拖拽编辑器',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  )
}
