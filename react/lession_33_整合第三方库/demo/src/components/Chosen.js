import React from 'react'
import 'chosen-js/chosen.css'


class Chosen extends React.Component {
  componentDidMount() {
    let $ = window.$
    this.$el = $(this.el)
    this.$el.chosen()
    console.log('加载')

    this.handleChange = this.handleChange.bind(this)
    this.$el.on('change', this.handleChange)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.$el.trigger("chosen:updated");
    }
  }

  componentWillUnmount() {
    this.$el.off('change', this.handleChange);
    this.$el.chosen('destroy');
  }

  handleChange(e) {
    console.log('子组件',e.target.value)
    this.props.onChange(e.target.value);
  }


  render() {
    return (
      <div>
        <select className='Chosen-select' data-placeholder='请选择' ref={el => {
          console.log(el)
          return this.el = el
        }}>
          {this.props.children}
        </select>
      </div>
    )
  }
}

export default Chosen