import * as React from 'react'
import styled from 'styled-components'

interface IProps {
  [name: string]: number
}
interface ISize {
  width: number
  height: number
}
interface IChartProps {
  data: IProps
  size: ISize
}

const BarChart = ({ data, size }: IChartProps) => {
  return <svg width={size.width} height={size.height}></svg>
}
