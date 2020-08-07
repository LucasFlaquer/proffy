import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'
import api from '../../services/api'

export interface Teacher {
  name: string;
  avatar: string;
  bio:string;
  cost:number;
  id:number;
  subject:string;
  whatsapp:string;
}


interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps> = ({teacher}) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    })
  }


  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div className="">
          <strong>{teacher.subject}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>
      <footer>
        <p>
          preço/hora <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={createNewConnection} href={`http://wa.me/${teacher.whatsapp}`} target="_blank">
          <img src={whatsappIcon} alt="whatsapp"/>
          entrar em contato
        </a>
      </footer>
    </article>
  )
}
 
export default TeacherItem