import { useEffect, useState } from 'react';
import '../App.css';
import Card from '../components/Card';
import { Organization, Course } from '../types';

export function Courses() {

  const [organizations, setOrganizations] = useState<Organization[]>();
  const [courses, setCourses] = useState<Course[]>();
  const [selectedOrg, setSelectedOrg] = useState<Organization>();

  useEffect(() => {
    getOrganizations();
  }, []);

  async function getOrganizations() {
    let url = `http://localhost:3000/organizations`;
    let options: RequestInit = { 
      method: "GET", 
      headers: { 
        "Content-Type": "application/json"
      },
    };
    let response: Response = await fetch(url, options);
    let json: Organization[] = await response.json();
    setOrganizations(json);
  }

  async function getActiveCourses(organizationID: string) {
    
    let url = `http://localhost:3000/organizations/${organizationID}/courses?filter=%7B%0A%20%20%22where%22%3A%20%7B%0A%20%20%20%20%22status%22%3A%20%22Active%22%0A%20%20%7D%0A%7D`;
    let options: RequestInit = { 
      method: "GET", 
      headers: { 
        "Content-Type": "application/json"
      },
    };
    let response: Response = await fetch(url, options);
    let json: Course[] = await response.json();
    setCourses(json);
  }

  function onOrganizationCardClick(o: Organization) {
    setSelectedOrg(o);
    getActiveCourses(o._id);
  }

  return (
    <div className={'page'}>

      <h3>Select an organization:</h3>
      <div className={'grid'}>
        {organizations?.map(o => 
          <Card 
            onClick={() => onOrganizationCardClick(o)} 
            selected = {o._id == selectedOrg?._id}
            name={o.name}
          />
        )}
      </div>

      <h3>Here are the active courses:</h3>
      <div className={'grid'}>
        {courses?.map(c => 
          <Card
            name={c.name}
            status={c.status}
            date={new Date(c.date)}
          />
        )}
      </div>
    </div>
  );
}