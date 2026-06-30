'use client'

import { useEffect, useRef, useState } from 'react'
import { initializeMermaid, renderMermaidSvg } from '@/lib/mermaidRender'

interface PreviewPanelProps {
  syntax: string
}

export function PreviewPanel({ syntax }: PreviewPanelProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    initializeMermaid()
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    let cancelled = false
    const render = async () => {
      try {
        const svg = await renderMermaidSvg(syntax, 'mermaid-panel')
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg
          setError(null)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : '渲染失败')
        }
      }
    }

    render()
    return () => {
      cancelled = true
    }
  }, [syntax])

  return (
    <div className="w-full h-full flex flex-col bg-white">
      <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/80 backdrop-blur-md flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-700">Mermaid 预览</span>
        {error && (
          <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full">语法错误</span>
        )}
      </div>

      <div className="flex-1 overflow-auto p-4 bg-white">
        <div ref={containerRef} className={`flex items-center justify-center min-h-full ${error ? 'hidden' : ''}`} />
        {error && (
          <div className="text-xs text-red-400 font-mono whitespace-pre-wrap bg-red-50 p-3 rounded">
            {error}
          </div>
        )}
      </div>

      {/* Syntax display */}
      <div className="border-t border-gray-200 bg-gray-900 p-3">
        <pre className="text-xs text-green-400 font-mono overflow-auto max-h-40 whitespace-pre">
          {syntax}
        </pre>
      </div>
    </div>
  )
}
