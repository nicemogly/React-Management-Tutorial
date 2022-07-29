import './App.css';
import React, { Component } from 'react';
import Customer from './Components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { withStyles } from '@material-ui/styles';

import Paper from '@mui/material/Paper';


const styles = theme => ({
  root: {
    width:'100%',
  
    overflowX: "auto"
  },
  table: {
    minWidth:1080
  }

})
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
    const {classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
             </TableBody>
        </Table>
        
      </Paper>
          
    );
  }

}




export default withStyles(styles)(App);
