import {useState, useEffect} from 'react';  






const Card = ({name, email}) => {

return (
    <div className="card">
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
);

}


const About = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users') 
        .then(response => response.json())
        .then(data => setUsers(data))
}, []);

return (

<div className="about">
    =
    {users.map(({name, email }) => (
        <Card key={name} name={name} email={email} />
    ))}
     
</div>
)

}


export default About;