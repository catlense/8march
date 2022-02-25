import { useParams, Navigate} from "react-router-dom"

export default function Setsession(props) {
  const params = useParams()
  localStorage.session = params.id
  return(
    <Navigate to="/" />
  )
}