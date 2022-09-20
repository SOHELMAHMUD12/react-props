import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <Person name="Sohel Mahmud" study="najera" phone="01911173514" id="1250"></Person>
      <Person name="Sohel Mahmud" study="play" phone="01822218496" id="1250"></Person>
      <p> New Component</p>
      <Friend phone="01834077500" id="1234"></Friend>
      <Friend phone="01834077500" id="1234"></Friend>
      <p>New Component</p>
      <Vai phone="01673342840" id="123456"></Vai>
      <Vai  phone="01673342840" id="123456"></Vai>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
       <h3>Name:Sohel Mahmud</h3>
      <p>Profession:Front End Developer</p>
     <h1>{props.name}</h1>
     <p>{props.study}</p>
     <p>{props.phone}</p>
     <p>{props.id}</p>
    </div>
  )

}

// function Person(){
//   return (
//     <div className='person'>
//      <h1>Sohel Mahmud Rashed</h1>
//      <p>Profession:Front End Developer</p>
//     </div>
//   )
// }

function Friend(props){
  return(
    <div className='person'>
      <h3>Name:Jamsade Kamal</h3>
      <p>Job: Govt Officer</p>
      <p>{props.phone}</p>
      <p>{props.id}</p>

    </div>
  )
}

function Vai(props){
  return(
    <div className='person'>
      <h3>Name:Nazmul Hasan</h3>
      <p>Job:Developer</p>
      <p>{props.phone}</p>
      <p>{props.id}</p>

    </div>
  )
}

export default App;
