var React = require('react')
var ReactDOM = require('react-dom')
var createReactClass = require('create-react-class')

var Greeting = createReactClass({
  getInitialState: function() {
    return { count: this.props.initialCount }
  },

  getDefaultProps: function() {
    return {
      sex: '女'
    }
  },

  componentDidMount: function() {
    var _this = this
    this.timerID = setInterval(function() {
      _this.setState({
        count: _this.state.count + 1
      })
    }, 1000)
  },

  ck: function() {
    this.setState({
      count: this.state.count*10
    })
  },

  render: function() {
    return (
      <div>
        <h1>
          hello,{this.props.name}--{this.props.sex}--{this.state.count}
        </h1>
        <button onClick={this.ck}>按钮</button>
      </div>
    )
  }
})

// Greeting.defaultProps = {
//   sex: '男'
// }

ReactDOM.render(
  <Greeting name="人民" initialCount={0} />,
  document.querySelector('#app')
)
