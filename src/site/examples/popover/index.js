import React from 'react'
import PropTypes from 'prop-types'
import Card from '@/site/components/Card'
import Direction from './Direction'
import { Breadcrumb } from 'react-impression'
import Wrapper from '../../components/ExampleWrapper'
import MarkdownPreview from '../../components/MarkdownPreview/index'
import { transfer } from '../../utils/transferApiTable'

const popoverAttrParams = [
  [
    'position',
    '设置提示工具位置，可选值为 left、right、top、bottom',
    'string',
    'right',
  ],
  ['title', '弹出框标题', 'string', '-'],
  ['content', '弹出框主内容', 'string', '-'],
  ['children', '必填，子节点', 'element', '-'],
]

const popoverAttrTable = transfer(popoverAttrParams)

const PopoverExample = ({ routes, params }) => {
  return (
    <div>
      <Breadcrumb routes={routes} params={params} />
      <Wrapper
        title='Popover气泡卡片'
        desc='点击或者鼠标移入元素，弹出气泡式的卡片浮层'
      >
        <Card component={Direction} />
        <MarkdownPreview markdown={popoverAttrTable} name='Popover API' />
      </Wrapper>
    </div>
  )
}

PopoverExample.propTypes = {
  routes: PropTypes.array,
  params: PropTypes.object,
}

export default PopoverExample