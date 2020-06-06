import { useState } from 'react'
import css from './Note.module.scss'

export interface NoteProps {
  text: string
  explanation?: string
  quote?: string
  link?: string
}

const Note = (props: NoteProps) => {
  const [isVisible, setVisible] = useState(false)

  return (
    <div onMouseLeave={() => setVisible(false)}>
      <div onClick={() => setVisible(!isVisible)}>{props.text}#</div>
      <div
        className={css[isVisible ? 'note-show' : 'note-hide']}
        onClick={() => setVisible(false)}
      >
        {props.quote ? <blockquote>{props.quote}</blockquote> : null}
        {props.explanation ? (
          <p>{props.explanation}</p>
        ) : !props.quote && !props.link ? (
          '実際どうなのかは未確認です'
        ) : null}
        {props.link ? (
          <a href={props.link} target="_blank">
            {props.link}
          </a>
        ) : null}
      </div>
    </div>
  )
}

export default Note
