import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import Error from './Error'
import "../scss/Article.scss"

function Article() {
  const params = useParams()
  const [data, setData] = useState(null)
  const [loaded, setLoaded] = useState(false)  
  
  useEffect(() => {
    axios.get(`${params.sub}/${params.id}/`)
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
              {params.art.replaceAll("%20", "")}
            </h2>
            <div className='contents'>
              <Markdown>
                {JSON.parse(data.contents)[params.art.replaceAll("%20", "")]}
              </Markdown>
            </div>
         </div>
        </>
        : <Error />
    }
  </>
}

export default Article