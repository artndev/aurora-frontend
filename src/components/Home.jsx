import React from 'react';
import '../scss/Home.scss';


export default function Home() {
  return <>
    <div className='flex'>
      <h2 className='title'>
        Aurora
      </h2>
      <ul className='home__list'>
        <a href="/enlang">
          <li>
            Английский язык
          </li>
        </a>
        <a href="/it">
          <li>
            Информатика
          </li>
        </a>
        <a href="/rulang">
          <li>
            Русский язык
          </li>
        </a>
        <a href="/maths">
          <li>
            Математика
          </li>
        </a>
      </ul>
    </div>
  </>
}