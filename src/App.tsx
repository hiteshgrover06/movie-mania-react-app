import React, { ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
declare interface AppState {
  username:string | null;
  userRepos: unknown[];
}
class App extends React.Component<unknown,AppState>{  
  constructor(props:unknown){
    super(props);
    this.state = { username: null, userRepos:[] };
  }
  
  onSearchUserCallback(){
    if(this.state.username){
      console.log(`searched username ${this.state.username}`);
      fetch('https://github.com/hiteshgrover06?tab=repositories').then(data=> data.json()).then((result)=>{
          debugger;
          this.setState({userRepos :  result});
      }, error=> console.log(error));
      
    }
  }

  updateValue(e: ChangeEvent<HTMLInputElement>){
    this.setState({username: e.target.value});
  }

  render (){
    return ( <div className="form">
           <input type="text" onChange={ (e)=> { this.updateValue(e); } } 
                  placeholder="enter username"></input>
           <button onClick={()=>{ this.onSearchUserCallback(); }}>Searh User</button>

           <h3>Search results</h3>
           
         </div>);
  }
}


export default App;
