'use client'

import type { NodeShape, Direction, Theme, CurveStyle } from '@/lib/store'

export function ShapeIcon({ shape, stroke = '#6b7280', fill = 'white' }: { shape: NodeShape; stroke?: string; fill?: string }) {
  const sw = 1.5
  switch (shape) {
    case 'rectangle':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><rect x={1} y={2} width={22} height={12} rx={1} fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'rounded':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><rect x={1} y={2} width={22} height={12} rx={5} fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'stadium':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><rect x={1} y={2} width={22} height={12} rx={7} fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'subroutine':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><rect x={2} y={3} width={20} height={10} rx={1} fill={fill} stroke={stroke} strokeWidth={sw} /><rect x={4} y={5} width={16} height={6} fill="none" stroke={stroke} strokeWidth={0.8} /></svg>
    case 'cylinder':
      return <svg viewBox="0 0 24 18" className="w-6 h-4"><rect x={2} y={5} width={20} height={10} fill={fill} stroke={stroke} strokeWidth={sw} /><ellipse cx={12} cy={5} rx={10} ry={3} fill={fill} stroke={stroke} strokeWidth={sw} /><ellipse cx={12} cy={15} rx={10} ry={3} fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'circle':
      return <svg viewBox="0 0 16 16" className="w-4 h-4"><circle cx={8} cy={8} r={6} fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'double-circle':
      return <svg viewBox="0 0 16 16" className="w-4 h-4"><circle cx={8} cy={8} r={6} fill={fill} stroke={stroke} strokeWidth={sw} /><circle cx={8} cy={8} r={4} fill="none" stroke={stroke} strokeWidth={0.8} /></svg>
    case 'diamond':
      return <svg viewBox="0 0 16 16" className="w-4 h-4"><polygon points="8,1 15,8 8,15 1,8" fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'hexagon':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><polygon points="7,2 17,2 23,8 17,14 7,14 1,8" fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'parallelogram':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><polygon points="5,2 23,2 19,14 1,14" fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'parallelogram-alt':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><polygon points="1,2 19,2 23,14 5,14" fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'trapezoid':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><polygon points="1,2 23,2 20,14 4,14" fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'trapezoid-alt':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><polygon points="4,2 20,2 23,14 1,14" fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
    case 'asymmetric':
      return <svg viewBox="0 0 24 16" className="w-6 h-4"><polygon points="1,2 19,2 23,8 19,14 1,14" fill={fill} stroke={stroke} strokeWidth={sw} /></svg>
  }
}

export const ALL_SHAPES: { shape: NodeShape; label: string }[] = [
  { shape: 'rectangle',       label: '矩形' },
  { shape: 'rounded',         label: '圆角矩形' },
  { shape: 'stadium',         label: '胶囊形' },
  { shape: 'diamond',         label: '菱形' },
  { shape: 'circle',          label: '圆形' },
  { shape: 'double-circle',   label: '双圆形' },
  { shape: 'hexagon',         label: '六边形' },
  { shape: 'subroutine',      label: '子程序' },
  { shape: 'cylinder',        label: '圆柱/数据库' },
  { shape: 'parallelogram',   label: '平行四边形' },
  { shape: 'parallelogram-alt', label: '反向平行四边形' },
  { shape: 'trapezoid',       label: '梯形' },
  { shape: 'trapezoid-alt',   label: '反向梯形' },
  { shape: 'asymmetric',      label: '非对称形' },
]

export const DIRECTIONS: { value: Direction; label: string; title: string }[] = [
  { value: 'TD', label: '↓', title: '从上到下' },
  { value: 'LR', label: '→', title: '从左到右' },
  { value: 'BT', label: '↑', title: '从下到上' },
  { value: 'RL', label: '←', title: '从右到左' },
]

export const THEMES: { value: Theme; label: string }[] = [
  { value: 'default', label: '默认' },
  { value: 'dark',    label: '深色' },
  { value: 'forest',  label: '森林' },
  { value: 'neutral', label: '中性' },
  { value: 'base',    label: '基础' },
]

export const CURVE_STYLES: { value: CurveStyle; label: string }[] = [
  { value: 'basis',      label: '平滑' },
  { value: 'linear',     label: '直线' },
  { value: 'cardinal',   label: 'Cardinal 曲线' },
  { value: 'catmullRom', label: 'Catmull-Rom 曲线' },
  { value: 'step',       label: '阶梯' },
  { value: 'stepAfter',  label: '后置阶梯' },
  { value: 'stepBefore', label: '前置阶梯' },
  { value: 'natural',    label: '自然曲线' },
  { value: 'monotoneX',  label: 'X 单调曲线' },
  { value: 'monotoneY',  label: 'Y 单调曲线' },
  { value: 'bumpX',      label: 'X 凸起曲线' },
  { value: 'bumpY',      label: 'Y 凸起曲线' },
]
