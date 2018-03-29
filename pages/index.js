
import Form from '..//component/ggg';
import { Component } from 'react';
class SomeThing extends Component {
  constructor() {
    super()
    this.state = {
      book: []
    }
  }
  record = (people) => {
    const book = [...this.state.book, people];
    this.setState({ book })
  }


  render() {
    return (
      <div>
        <ol>
          {this.state.book.map(p => <li> {p.name + ' ' + p.fName + ' ' + p.age}</li>)}
        
        </ol>


        <Form onSubmit={this.record} />
      </div>


    )
  }
}
export default SomeThing

