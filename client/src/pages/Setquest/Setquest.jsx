import { useParams, Navigate} from "react-router-dom"

export default function Setquest() {
  const params = useParams()
  localStorage.quest = params.quest
  return(
    <Navigate to={`/quest/${params.quest}`} />
  )
}