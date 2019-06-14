import React from 'react' 

class List extends React.Component {
  render() {
    // 不需要用额外的元素包裹列表元素！
    return [
      // 不要忘记设置 key :)
      <li key="A">First item</li>,
      <li key="B">Second item</li>,
      <li key="C">Third item</li>,
    ];
  }
  
}

export default List