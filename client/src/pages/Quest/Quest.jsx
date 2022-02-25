import style from './quest.module.css'
import { useState } from 'react'

import {users, teams} from '../../schema'

export default function Quest({title}) {
  
  const getPartner = () => {
    return team.users.find(e => e !== localStorage.session)
  }
  
  const user = users[localStorage.session]
  const team = teams[user.team]
  const partner = users[getPartner()]

  const task = team.tasks.find(e => e.number === parseInt(localStorage.quest))

  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState()

  const send = () => {
    if(task.answer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setResult(task.next)
    } else {
      setResult(task.back)
    }
  }

  return(
    <>
      <title>{title}</title>
      <h1>Вопрос №{task.number}</h1>
      <p><b>{task.text}</b></p>
      <input type="text" placeholder="Ваш ответ" value={answer} onChange={({target}) => setAnswer(target.value)} className={style.input} />
      <button onClick={send}>Отправить</button>
      {JSON.stringify(task)}
      <p>{result}</p>
    </>
  )
}