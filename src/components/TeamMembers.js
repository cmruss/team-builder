import React from 'react';
import styled from 'styled-components';

const TeamList = styled.div`
    background-color: whitesmoke;
    box-shadow: 2px 10px 10px;
    padding: 2%;
    width: 90%;
    margin: 2% auto;
`

const TeamMembers = props => {
    return(
        <TeamList className="team-list">
            {props.members.map(member => (
                <div className="member" key ={member.id}>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>
            ))}
        </TeamList>
    );
};

export default TeamMembers;