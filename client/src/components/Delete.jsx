import api from "../services/apiConfig";
import { useNavigate } from "react-router-dom";


export default function Delete(props) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await api.delete(`/${props.id}`);
    navigate("/")
  }
  return (
    <div>
      <button onClick={handleDelete}>Delete Book</button>
    </div>
  )
}
