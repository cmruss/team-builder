import React, {useState} from 'react';
import './App.css';
import Form from './components/Form'
import TeamMembers from './components/TeamMembers'
import styled from 'styled-components';

const AppContainer = styled.div`
background-color: whitesmoke;
    box-shadow: 2px 10px 10px;
    padding: 2%;
    width: 50%;
    height: 90vh;
    margin: 2% auto;
`

function App() {
  const [members, setMembers] =useState([]);



  const addMember = member =>{
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  }
  return (
    <AppContainer className="App">
      <h1>the team</h1>
      <TeamMembers members={members}/>
      <Form addMember={addMember}/>
    </AppContainer>
  );
}

export default App;
