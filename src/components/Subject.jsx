import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'
import Error from './Error'
import "../scss/Subject.scss"

export default function Subject() {
  const params = useParams()
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)  

  useEffect(() => {
    axios.get(`${params.sub}/`)
        .then(res => {
            if (!res.data)
                return

            setData(res.data)
            setLoaded(true)
        }) 
        .catch(err => console.log(err))
  }, [params])
  
  return <>
    {
        loaded
        ? <>
         <div className="flex">
            <h2 className='title'>
                Aurora
            </h2>
            {
                 data.length > 0 
                 ? <div className="grid">
                    {
                      data.map((val, i) => {
                        return <div key={i} className="row">
                            <h4 key={i}>
                                {val.title}
                            </h4>
                            <ul key={i} className="row__list">
                                {
                                    Object
                                      .keys(JSON.parse(val.contents))
                                      .map((val2, i2) => {
                                         return <a key={i2} href={`/${params.sub}/${val.id}/${val2}`}>
                                            <li key={i2}>
                                                {val2}
                                            </li>
                                        </a>
                                       })
                                }
                            </ul>
                        </div>
                      })
                    }
                </div>
                : <p>
                    Пока.. Здесь ничего нет
                </p>
            }
            
         </div>
        </>
        : <Error />
    }
  </>
}
