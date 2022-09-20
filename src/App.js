import logo from './logo.svg';
import './App.css';


const singers =[
  {name:'raihan', job:'singer'},
  {name:'murad', job:'singer'},
  {name:'rahat', job:'singer'}
]


function App() {

const names =['sohel', 'rashed', 'abrar', 'mabrur','hasan', 'kamal'];
  return (
    <div className="App">
      {
        names.map(name => <li> Name: {name}</li>)
      }

      {
        names.map(name => <Person name={name}></Person> )
      }

      {
        singers.map(singer => <Person name ={singers.name}></Person>)
      }
      {/* <Person name ={names[0]} phone="01545254"></Person>
      <Person name={names[1]} study="najera" phone="01911173514" id="1250"></Person>
      <Person name={names[2]} study="play" phone="01822218496" id="1250"></Person> */}
      <p> New Component</p>
      <Friend name ="Jamsade kamal" phone="01834077500" id="1234"></Friend>
      <Friend phone="01834077500" id="1234"></Friend>
      <p>New Component</p>
      <Vai name = " Nazmul Hasan"phone="01673342840" id="123456"></Vai>
      <Vai  phone="01673342840" id="123456"></Vai>
    </div>
  );
}

function Person(props){
  console.log(props);
  return (
    <div className='person'>
      
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
