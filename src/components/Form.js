import React, { useState } from 'react';
import styled from 'styled-components';

const Enlist = styled.form`
background-color: whitesmoke;
box-shadow: 2px 10px 10px;
padding: 2%;
width: 90%;
margin: 2% auto;
`

const Form = props => {
    const [member, setMember] = useState({name: "", email: "", role: 'tech'});

    const handleChange = e => {
        setMember({...member, [e.target.name]:[e.target.value]});
    };

    const submitForm = e => {
        e.preventDefault();
        props.addMember(member);
        setMember({name: "", email: "", role: 'tech'});
    };

    return(
        <Enlist onSubmit={submitForm}>
            <h1>enlist!</h1>
            <label htmlFor="name">name</label>
            <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={member.name}
            />
            <label htmlFor="email">email</label>
            <input
                id="email"
                type="text"
                name="email"
                onChange={handleChange}
                value={member.email}
            />
            <label htmlFor="role">role</label>
            <select 
                id="role"
                name="role" 
                onChange={handleChange} 
                value={member.role}>
                <option value="tech">tech</option>
                <option value="senior-tech">senior tech</option>
                <option value="whiteshirt">whiteshirt</option>
                <option value="coordinator">coordinator</option>
                <option value="supervisor">supervisor</option>
            </select>
            <button value="submit">submit</button>
        </Enlist>
    )

}

export default Form;