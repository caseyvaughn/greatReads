import api from "../services/apiConfig";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";


export default function Delete(props) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await api.delete(`/${props.id}`);
    navigate("/")
  }
  return (
    <div>
      <Button className= "btn-detail" variant="dark" onClick={handleDelete}>Delete Book</Button>
    </div>
  )
}
