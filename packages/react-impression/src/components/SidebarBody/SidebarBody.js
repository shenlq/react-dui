import classnames from 'classnames'
import React from 'react'
import PropTypes from 'prop-types'
import PerfectScrollbar from 'perfect-scrollbar'

export default class SidebarBody extends React.PureComponent {
  static propTypes = {
    /**
     * 自定义样式
     */
    className: PropTypes.string,

    /**
     * 子组件
     */
    children: PropTypes.node,
  }

  componentDidMount() {
    // 初始化滚动条
    this.scrollbar = new PerfectScrollbar(this.container, {
      suppressScrollX: true,
    })
    this.handleUpdateScroll()
  }

  componentWillUnmount() {
    this.scrollbar.destroy()
    this.scrollbar = null
  }

  handleUpdateScroll = () => {
    // 延迟更新滚动条
    // Collapse组件增加动画效果后，便不能用requestAnimationFrame更新滚动条了 2018-12-03
    setTimeout(() => {
      this.scrollbar.update()
    }, 400)
  }

  setContainerRef = element => (this.container = element)

  render() {
    const { className, children, ...others } = this.props

    return (
      <div
        ref={this.setContainerRef}
        {...others}
        className={classnames('sidebar-body', className)}
        onClick={this.handleUpdateScroll}
      >
        {children}
      </div>
    )
  }
}
