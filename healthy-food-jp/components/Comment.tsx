import css from './Comment.module.scss'

export interface CommentProps {
  text: string
}

const Comment = (props: CommentProps) => (
  <div className={css.comment}>{props.text}</div>
)

export default Comment
