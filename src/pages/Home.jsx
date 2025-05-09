export default function Home() {
  return (
    <section style={sectionStyle}>
      <h1 style={titleStyle}>🔌 Bem-vindo ao Universo da Eletrônica</h1>
      <p style={textStyle}>
        Soluções técnicas, inovação e precisão em projetos eletrônicos. Explore meu portfólio e descubra como posso ajudar a transformar sua ideia em um circuito funcional.
      </p>
    </section>
  );
}

const sectionStyle = {
  padding: '40px',
  backgroundColor: '#f3f3f3',
  borderRadius: '12px',
  textAlign: 'center',
};

const titleStyle = {
  fontSize: '2.5rem',
  color: '#222',
};

const textStyle = {
  fontSize: '1.2rem',
  maxWidth: '700px',
  margin: '0 auto',
  color: '#444',
};
