"use client"
import styles from './Post.module.css'
import Comment from '../comment/Comment'
import { useState } from 'react';


interface Author{
  name: string;
  role: string;
  avatarUrl: string;
}
export interface OwnComment{
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  content: string; 
}
export interface PostType{
  id: number;
  author: Author;
  content: string;
  comments?: OwnComment[];
}
export interface PostProps{
  post: PostType;
}


function Post({post}: PostProps) {
  const [comments, setComments] = useState<OwnComment[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>('');
  const deleteComment = (comment:any) =>{
    const newcommentList = comments.filter(x => x.id != comment)
    setComments(newcommentList)
  }
  
  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    
    if (isNaN(date.getTime())) {
        return "Data inválida";
    }
    
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    
    return new Intl.DateTimeFormat('pt-BR', options).format(date);
};

  const handleNewCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
    
    setNewCommentText(event.currentTarget.value)
  }

  const handleCreateNewComment = (e: React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault();
     const x =  newCommentText;
     const newObject: OwnComment = {
      id: Math.random(),
      name:'Em desenvolvimento',
      role: '',
      avatarUrl: '',
      content: x,
     }
     setComments([...comments, newObject ])
    setNewCommentText('')
  }

  return (
    <article className="bg-gray-c2 rounded-[8px] p-6 ">
      <header className="flex items-center justify-between">
        <div className="text-gray-300 flex justify-between items-center">
          <img src={post.author.avatarUrl} alt="" className="w-[60px] h-[60px] rounded-[8px] border-4"/>
          <div className="flex flex-col pl-4">
            <strong className="text-white">{post.author.name}</strong>
            <span className="text-white">{post.author.role}</span>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-2 pt-2"> 
          <p className='text-justify'>{post.content}</p>
          
      </div>
      <form className={styles.comment} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário' name='comment' onChange={handleNewCommentChange} value={newCommentText}/>
          <footer>
            <button type='submit' className='bg-gray-c3 text-white' disabled={newCommentText.length < 1} >Comentar</button>
          </footer>
      </form>
      <div>
        {comments.map((x) =>(
          <Comment coments={x} key={x.id}  deleteComment={deleteComment} />
        ))}
      </div>
    </article>
  )
}

export default Post