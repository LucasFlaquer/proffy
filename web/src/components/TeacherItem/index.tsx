import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/22601978?s=460&u=4ef4328d281f34dc2212e0c871d6917dcfde86d9&v=4" alt="LucasFlaquer"/>
        <div className="">
          <strong>Lucas Flaquer</strong>
          <span>Física</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, atque.
        <br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur expedita eveniet molestias tempora quibusdam voluptatibus dicta ipsa qui hic aperiam.
      </p>
      <footer>
        <p>
          preço/hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp"/>
          entrar em contato
        </button>
      </footer>
    </article>
  )
}
 
export default TeacherItem