import React,  {useEffect, useState}  from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import './App.css';
import axios from 'axios';
import ShowSheet from './components/showSheet';

export default function App()  {
   
   
  function submitHandler (e){
    e.preventDefault();
    const info={
      name:name,
      age:age,
      salary:salary,
      hobby:hobby
    };
    
    axios.post('https://sheet.best/api/sheets/8b701172-df89-4ae3-8db7-e753703c246f', info)
    .then(res => {
      
    })
  }
    const [name,setName]=useState('');  
    const [age,setAge ]=useState('');  
    const [salary,setSalary]=useState('');  
    const [hobby,setHobby]=useState('');  
    const [data,setData]=useState('');
    //show all the information of googlesheet
    useEffect(()=>{
      axios.get('https://sheet.best/api/sheets/8b701172-df89-4ae3-8db7-e753703c246f')
      .then(res=>{
        setData(res.data);
      })
    },[])
   console.log(data);
   const info= Object.values(data).map((obj)=>{
    return(
      <ShowSheet 
       name={obj["name"]}
       age={obj["age"]}
       salary={obj["salary"]}
       hobby={obj["hobby"]}/>
    );
   });

    return (
      <>
       {info}
      <Container fluid className="container">
        <Header as='h2'>React Google Sheets!</Header>
        <Form className="form">
          <Form.Field>
            <label>Name</label>
            <input type="text" name='name' value={name}  onChange={e=>setName(e.target.value)} placeholder='Enter your name' />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input type="number" name='age' value={age} onChange={e=>setAge(e.target.value)} placeholder='Enter your age' />
          </Form.Field>
          <Form.Field>
            <label>Salary</label>
            <input type="number" name='salary' value={salary} onChange={e=>setSalary(e.target.value)} placeholder='Enter your salary' />
          </Form.Field>
          <Form.Field>
            <label>Hobby</label>
            <input type="text" name='hobby' value={hobby} onChange={e=>setHobby(e.target.value)} placeholder='Enter your hobby' />
          </Form.Field>
          <Button color="blue" type='submit' onClick={ submitHandler}>Submit</Button>
        </Form>
      </Container>
     
     </>
    )
  }
 