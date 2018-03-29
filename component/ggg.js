

  import {Component} from 'react';
class Form extends Component {
  constructor(){
    super()
    this.state={
      name: '',
      fName: '',
      age: '',
    } }
    change=(event)=>{
      let name= event.target.name;
      let value= event.target.value;
      this.setState({
        [name]:value
      })
    }
   submit=(event)=>{
     event.preventDefault()
     this.props.onSubmit(this.state)
     this.setState({
      name: '',
      fName: '',
      age: '',
     })
   }

  render(){
    return(
    <form onSubmit={this.submit}>
        <input type="text" name='name' placeholder='EnterName' value={this.state.name} onChange={this.change} />
        <input type="text" name='fName' placeholder='FamilyName' value={this.state.fName} onChange={this.change} />
        <input type="number" name='age' placeholder='YourAge' value={this.state.age} onChange={this.change} />
        <button>Submit</button>
      </form>
    )
  }
}
export default Form


   