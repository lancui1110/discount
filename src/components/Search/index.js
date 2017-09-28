import React, { Component } from 'react'

export default class Search extends Component {
  delTodo (todoId) {
    if (!confirm('确认删除？')) return
    this.props.delTodo(todoId)
  }

  render () {
    let { todos, addTodo, toggleTodo } = this.props
    return (
      <div>
        <input type="text" id="search"/>
        <TodoInput addTodo={addTodo} />
      </div>
    )
  }
}
