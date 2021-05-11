import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//-------------------------------------------------
//ACCOUNT DETAILS ASSIGNMENT

function bankDetails() {


  return (
    <div>
      <a href="user.trainer1">IBM_trainer1</a>
      <a href="user.trainer2">IBM_trainer2</a>

    </div>
  )
}


ReactDOM.render(<bankDetails />, document.getElementById('root'))
//-------------------------------------------------
//FORM VALIDATION

// function Validation() {

//   const [agree, setAgree] = useState(false);

//   const checkboxHandler = () => {
//     setAgree(!agree);
//   }

//   return (
//     <form style={{
//       textAlign:"center",
//       fontFamily:"arial"
//     }}>
//       <h2>Handle Form in React</h2>
//       <input placeholder="Enter name" required/>
//       <br></br>
//       <br></br>
//       <input type="checkbox" id="agree" onChange={checkboxHandler} />
//       <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
//       <br></br>
//       <br></br>
//       <button disabled={!agree} className="btn">
//         Continue
//         </button>
//     </form>
//   )
// }

// ReactDOM.render(<Validation />, document.getElementById('root'))


//------------------------------------------------
//HIDE AND SHOW TEXT ON BUTTON CLICK

// class App extends React.Component{

//   state = {
//      isActive:false
//   }

//   showText = ()=>{
//       this.setState({isActive: true})
//   }

//   hideText = () =>{
//       this.setState({isActive: false})
//   }

//    render(){
//        return(
//            <div>
//              <button onClick={this.showText}>Show</button>
//              <button onClick={this.hideText}>Hide</button>
//            {this.state.isActive ? <h1>Hello</h1> : null }
//            </div>
//        )
//    }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

//------------------------------------------------------
//TYPE IN THE TEXT(not working)
//BUTTON CLICK SHOULD PRINT THE TEXT ON HEADER(another method)

// function App() {
//   const [data, setData] = useState(null)
//   const [print, setPrint] = useState(false)
// }

// function getData(val) {
//   console.warn(val.target.value)
//   setData(val.target.value)

//   render(){
//     return (
//       <div className="App">
//         {
//           print ?
//             <h1>{data}</h1>
//             : null
//         }
//         <input type="text" onClick={getData} />
//         <button onClick{...() => setPrint(true)}>Print Data</button>
//       </div>
//     );
//   }
// }
// }

// ReactDOM.render(<App />, document.getElementById('root'))


//------------------------------------------------------
//TYPE IN THE TEXT
//BUTTON CLICK SHOULD PRINT THE TEXT ON HEADER

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {name: ""};
//   }

//   handleInput = event => {
//     this.setState({ name: event.target.value });
//   };

//   printText = () => {
//     console.log(this.state.name);
//     document.getElementById('inp').innerHTML=this.state.name;
//     };

//   render() {
//     return (
//       <div>
//         <h1>Hello</h1>
//         <header id='inp'></header>
//         <input onChange={this.handleInput} placeholder="Enter text" />
//         <br></br>
//         <button onClick={this.printText}>Button</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'))

//------------------------------------------------------
//PROPS WITH FUNCTIONAL COMPONENT
//UPDATE PROPS ON BUTTON CLICK

// ReactDOM.render(<App/>, document.getElementById('root'))

//--------------------------------------------------
//EXAMPLE
//1.Header/Footer/Text is displayed
//2.We have a button to clear the data
//3.As soon as the button is clicked, alert is generated
//4.Once OK is selected, the data is unmounted/cleared

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true};
//   }
//   delHeader = () => {
//     this.setState({show: false});
//   }
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The Header will be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }

// ReactDOM.render(<Container />, document.getElementById('root'));

//--------------------------------------------------
//UNMOUNT

// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { show: true };
//   }
//   delHeader = () => {
//     this.setState({ show: false });
//   }

//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;     //unmount header
//     };

//     return (
//       <div>
//         {myheader}
//         <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentDidUnmount() {
//     alert("It will be unmounted");
//   }
//   render({
//     return(
//       <h1>
//         Fav Book!
//       </h1>
//     );
//   })
// }

// ReactDOM.render(<MyApp />, document.getElementById('root'));

//--------------------------------------------------
//UPDATE-getSnapshotBeforeUpdate

// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favbook: "XYZ" };
//   }

//   componentDidMount()
//   {
//     setTimeout(()=>{
//       this.setState({favbook:"ABC"})
//     }, 5000)
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState) {
//     document.getElementById("div1").innerHTML = "Initial book" + prevState.favbook;
//   }

//   componentDidUpdate() {
//     document.getElementById("div2").innerHTML = "Updated book" + this.state.favbook;
//   }

//   render() {
//     return (
//       <div>
//         <h1>Fav Book is {this.state.favbook}</h1>
//         <button type="button" onClick={this.changebook}>change book</button>
//         <div id="div1"></div>
//         <div id="div2"></div>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<MyApp />, document.getElementById('root'));


//--------------------------------------------------
//UPDATE-shouldComponentUpdate()

// class MyApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favbook: "XYZ" };

//   }

//   shouldComponentUpdate() {
//     return true;
//   }
//   changebook = () => {
//     this.setState({ favbook: "ABC" });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Fav Book is {this.state.favbook}</h1>
//         <button type="button" onClick={this.changebook}>change book</button>
//       </div>
//     )
//   }
// }
// ReactDOM.render( <MyApp/>, document.getElementById('root') );

//------------------------------------------------
//MOUNTING-componentDidMount()

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favbook: 'abcd' };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ favbook: "ABC" })
//     }, 5000)
//   }

//   render() {
//     return (
//       <h1>My fav color is {this.state.favbook}</h1>
//     );
//   }
// }
// ReactDOM.render( <Header/>, document.getElementById('root') );

//------------------------------------------------
//MOUNTING-getDerivedStateFromProps

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favbook: 'abcd' };
//   }

//   static getDerivedStateFromProps (props, state){
//   return {favbook: props.favcol};
//   }

//   render() {
//     return (
//       <h1>My fav color is {this.state.favbook}</h1>
//     );
//   }
// }
// ReactDOM.render(<Header favcol="ABC" />, document.getElementById('root') );

//------------------------------------------------
//MOUNTING----constructor

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { favbook: 'abcd' };
//   }

//   render() {
//     return (
//       <h1>My fav color is {this.state.favbook}</h1>
//     );
//   }
// }
// ReactDOM.render(<Header/>, document.getElementById('root') );

//----------------------------------------
//ONCLICK CHANGE COLOR NAME

// class OnClick extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = { fruit: "Apple", color:"Red" };
//   }
//   myFunction(){
//     this.setState=({this.state.color:"Green"});
//   }
//   render() {
//     return (
//       <button onClick="myFunction">Click</button>
//     )
//   }

// }

// ReactDOM.render(<OnClick/>, document.getElementById('root'));

//------------------------
//STATE DECLARATION

// class MyFruit extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { fruit: "Apple", color:"Red" };
//   }
//   render() {
//     return (
//       <div>
//         <h1>The fruit is {this.state.fruit}</h1>
//         <h1>The color is {this.state.color}</h1>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<MyFruit />, document.getElementById('root'));

//---------------------------------------------
//BUTTON ONCLICK CALLING FUNCTION

// import MyApp from './MyApp'

// ReactDOM.render(<MyApp/>, document.getElementById('root'));


//-------------------------------------------
//CREATING STYLING OBJECT MyStyle

// class MyHeader extends React.Component{
// render(){
//   const MyStyle = {
//     backgroundColor:"Blue",
//     fontFamily:"Arial"
//   };
//   return(
//     <div>
//       <h1 style={MyStyle}>Header</h1>
//     </div>
//   )
// }
// }

// ReactDOM.render(<MyHeader/>, document.getElementById('root'));

//-------------------------------------------------
//DEFINING HEADER AND FOOTER WITH DIFFERENT STYLING PROPERTIES
// import Header from './Header'

// ReactDOM.render(<Header/>, document.getElementById('root'));

//-----------------------------------
//PROPS IN CONSTRUCTOR

// class Data extends React.Component{
//   constructor(props){
//     super(props);
//   }
//   render(){
//     return <h1 style={{backgroundColor:"blue"}}>Here I am at {this.props.place}</h1>;
//   }
//   }
// ReactDOM.render(<Data place="Kerala" />, document.getElementById('root'));

//--------------------------------------------------
//USING MULTIPLE CLASS ELEMENTS 

// class Home extends React.Component {
//   render() {
//     return <h1>This is {this.props.IBM} component</h1>
//   }
// }

// class Data extends React.Component {
//   render() {
//     const myname="IBM";
//     return (<div>
//       <h1>who lives in my home</h1>
//       <Home IBM={myname} />
//       </div>)
//   }
// }
// ReactDOM.render(<Data />, document.getElementById('root'));//return the result value

//---------------------------------------------------------
//USING PROPS

// class MyApp extends React.Component{
//   render(){
//     return <h1>I am in {this.props.brand}</h1>
//   }
// }
// const myelement = <MyApp brand="IBM" />;
// ReactDOM.render(myelement, document.getElementById('root'));//return the result value

//-----------------------------------------------------
//PROPS WITH FUNCTION **

// function MyApp(props){
//   return(
//     <h1>I am in {this.props.brand}</h1>
//   )
// }
// const myelement = <MyApp brand="IBM" />;

// ReactDOM.render(myelement, document.getElementById('root'));//return the result value

//------------------------------------------------
//PASSING VALUE USING CONSTRUCTOR

// class car extends React.Component {//creates inheritance
//   constructor() {
//     super();
//     this.state = { color: "BLUE" };//used only in class components
//   }
//   render() {
//     return <h1>I AM A {this.state.color} CAR</h1>;
//   }
// }

// ReactDOM.render(<car />, document.getElementById('root'));//return the result value

//---------------------------------------------------------

// class App extends React.Component{
//   render(){
//     return <h1>This is a class component</h1>
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));//return the result value

//------------------------------------------------------------
// 
// class App extends React.Component {
//   constructor() {
//     super();
//     let array = [];
//     for (var i = 0; i < 10; i++) {
//      this.state =   array[i] = "Hurray....!";
//     }
//     this.state =   array;
//   }
//   render() {
//     return <ul><li>{this.state}</li></ul>
//   }
// }
// ReactDOM.render(<App />,document.getElementById('root'));

//------------------------------------------------------------

// class App extends React.Component {
//   constructor() {
//     super();
//     let array = ["A", "B", "C"];
//     for (var i = 0; i < 3; i++) {
//      this.state = array[i] = "Hello"+ array[i];
//     }
//     this.state = array;
//   }
//   render() {
//     return <ul><li>{this.state}</li></ul>
//   }

// }
// ReactDOM.render(<App />,document.getElementById('root'));