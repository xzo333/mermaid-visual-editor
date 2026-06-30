import mermaid from 'mermaid'

let initialized = false
let renderId = 0
let renderQueue: Promise<unknown> = Promise.resolve()

export function initializeMermaid() {
  if (initialized) return

  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'strict',
  })
  initialized = true
}

export function renderMermaidSvg(syntax: string, idPrefix = 'mermaid-render') {
  initializeMermaid()

  const id = `${idPrefix}-${++renderId}`
  const run = async () => {
    try {
      const { svg } = await mermaid.render(id, syntax)
      return svg
    } finally {
      document.getElementById(id)?.remove()
    }
  }

  const result = renderQueue.then(run, run)
  renderQueue = result.catch(() => undefined)
  return result
}
