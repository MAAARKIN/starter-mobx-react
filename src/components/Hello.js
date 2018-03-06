import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'

@inject('todoStore')
@observer
class Hello extends Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        console.log(e.target.value)
        this.props.todoStore.changeTitle(e.target.value)
    }

    render() {
        return (
            <div>
                Hello
                <br/>
                {this.props.todoStore.title}

                <input type="text" onChange={this.handleChange} />
            </div>
        )
    }
}

export default Hello