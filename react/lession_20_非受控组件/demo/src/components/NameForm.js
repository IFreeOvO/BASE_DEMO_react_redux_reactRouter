import React from 'react'

class NameForm extends React.Component {


  handleSubmit = (e) => {
    e.preventDefault()
    console.log('非受控表单内容>>', this.input.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label >
          名字：
          <input type="text" defaultValue="Bob" ref={(ele) => this.input=ele}/>
        </label>
        <input type="submit"  value="提交"/>
      </form>
    )
  }
}

export default NameForm