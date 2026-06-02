// const fs = require('fs');

// fs.readFile('./data.json', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     const jsonData = JSON.parse(data);
//     console.log(jsonData[3].employees[0].contact.email);
// });
import React, { useState, useEffect } from 'react';
function MyApp() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                data.forEach(item => {
                    console.log(item.title);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return(
        <div>
            <h1>Data from API</h1>
            {data.map(item => (
                <h2>key={item.id},{item.title}</h2>
            ))}
        </div>
    );
}



// const a = 10;
// const b = 20;
// const c = a + b;
// const x=[435,49,7.9]
// var y={name:"rajai", age: 22, city: "mumbai"}
// console.log(c); 
// for(let i=0; i<x.length; i++){
//     console.log(x[i]);
// }
// for(let key in y){
    //     console.log(key + " : " + y[key]);
    
// }
export default MyApp;