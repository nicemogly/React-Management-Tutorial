import './App.css';
import React, { Component } from 'react';
import Customer from './Components/Customer';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '윤장훈1',
  'birthday' : '751205' ,
  'gender' : '남자' ,
  'job' : '대학생'
  },
  {
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '윤장훈2',
  'birthday' : '7512052' ,
  'gender' : '남자2' ,
  'job' : '대학생2'
  },
  {
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '윤장훈3',
  'birthday' : '7512053' ,
  'gender' : '남자3' ,
  'job' : '대학생3'
  }
]

class App extends Component{
  render(){
    return(
      <div>
        { 
          customers.map(c => { 
           return ( 
                   <Customer 
                    key={c.id} 
                    id={c.id} 
                    name={c.name} 
                    image={c.image} 
                    birthday={c.birthday} 
                    gender = {c.gender}
                    job={c.job}
                    />
                  ) 
           }
          )
      }
      </div>
          
    );
  }

}




export default App;
