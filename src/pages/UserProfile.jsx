import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const { id } = useParams();
  return <h1>Perfil do Usuário: {id}</h1>;
}
