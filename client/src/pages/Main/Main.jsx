import style from './main.module.css'
import { useNavigate } from 'react-router-dom'

import {users, teams} from '../../schema'

export default function Main(props) {

  const navigate = useNavigate()

  if(!localStorage.session) {
    return(
      <h1>Для начала найди свой QR код</h1>
    )
  }
  const getPartner = () => {
    return team.users.find(e => e !== localStorage.session)
  }
  
  const user = users[localStorage.session]
  const team = teams[user.team]
  const partner = users[getPartner()]

  const checkQR = () => {
    localStorage.quest = 1
    navigate('/quest/1')
  }

  return (
    <>
      <title>{props.title}</title>
      <h1 className={style.h1}>Привет, {user.name.i}</h1>
      <p className={style.p}>
        Это небольшой квест в честь 8 марта.<br/>
        Ты будешь в команде с <b>{partner.name.w}</b> и вам нужно будет выполнить определённые задания, которые появятся как только она найдёт свой код.<br/><br/>
        Если она нашла его - нажми кнопку ниже
      </p>
      <button onClick={() => {checkQR();}}>{partner.name.i} нашла свой QR</button>
    </>
  )
}