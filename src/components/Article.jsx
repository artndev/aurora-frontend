import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Markdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import Error from './Error'
import remarkImages from "remark-images"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeMathjax from "rehype-mathjax"
import remarkMath from "remark-math"
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
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
     }) 
     .catch(err => console.log(err))
  }, [params])

  useEffect(() => {
    if (data)
    {
      setLoaded(true)
      console.log(JSON.parse(data.contents)[params.art.replaceAll("%20", "")])
    }
  }, [data])

  return <>
    {
        loaded
        ? <>
         <div className="flex">
            <h2 className='title'>
              {params.art.replaceAll("%20", "")}
            </h2>
            <div className='contents'>
              <Markdown 
                remarkPlugins={[
                  [remarkMath],
                  [remarkImages], 
                  [remarkGfm, {singleTilde: false}],
                ]}
                rehypePlugins={[
                  [rehypeMathjax],
                  [rehypeRaw, {allowDangerousHtml: true}]
                ]}
                components={{
                  code(props) {
                    const {children, className, node, ...rest} = props
                    const match = /language-(\w+)/.exec(className || '')
                    return match ? (
                      <SyntaxHighlighter
                        {...rest}
                        PreTag="div"
                        children={String(children).replace(/\n$/, '')}
                        language={match[1]}
                        style={oneDark}
                      />
                    ) : (
                      <code {...rest} className={className}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
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