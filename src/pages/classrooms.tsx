import { useEffect, useState } from 'react';
import '../App.css';
import Card from '../components/Card';
import { Classroom } from '../types';

export function Classrooms() {

  const [classrooms, setClassrooms] = useState<Classroom[]>();

  useEffect(() => {
    getClassrooms();
  }, []);

  async function getClassrooms() {
    let url = `https://ceross-demo-server-4c1503ff2ae6.herokuapp.com/classrooms?filter=%7B%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22courses%22%3A%20%5B%5D%0A%20%20%7D%2C%0A%20%20%22fields%22%3A%20%7B%0A%20%20%20%20%22name%22%3A%20true%2C%0A%20%20%20%20%22_id%22%3A%20true%0A%20%20%7D%0A%7D%0A`;
    let options: RequestInit = { 
      method: "GET", 
      headers: { 
        "Content-Type": "application/json"
      },
    };
    let response: Response = await fetch(url, options);
    let json: Classroom[] = await response.json();
    setClassrooms(json);
  }

  return (
    <div className={'page'}>
      <h3>Here are the classrooms with 0 courses:</h3>
      <div className={'grid'}>
        {classrooms?.map(c => 
          <Card 
            name={c.name}
          />
        )}
      </div>
    </div>
  );
}