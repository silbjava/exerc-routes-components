import { useParams } from 'react-router-dom';

export default function UserProfile() {
  const { id } = useParams();

  return (
    <section style={profileStyle}>
      <h1 style={profileTitle}>👤Perfil do Técnico</h1>
      <p style={profileText}>Visualizando informações do usuário com ID: <strong>{id}</strong></p>
      <p style={profileText}>Este perfil contém dados técnicos, projetos desenvolvidos e avaliações de clientes.</p>
      <img src="https://img.freepik.com/fotos-gratis/papeis-de-negocios-de-natureza-morta-com-varias-pecas-de-mecanismo_23-2149352652.jpg?semt=ais_hybrid&w=740"
        style={{ width: '290px', height: '190px' }}
        alt="Projeto"
      />
    </section>
  );
}

const profileStyle = {
  backgroundColor: '#dfd0f5',
  padding: '10px',
  borderRadius: '10px',
};

const profileTitle = {
  color: '#4527a0',
  fontSize: '2rem',
};

const profileText = {
  marginTop: '12px',
  fontSize: '1.1rem',
};
