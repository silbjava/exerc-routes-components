
export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Técnico em Eletrônica. Todos os direitos reservados.</p>
      <p>Desenvolvido com 💡 e muita solda fria.</p>
    </footer>
  );
}

const footerStyle = {
  width: '100%',
  marginTop: 'auto',
  padding: '16px',
  backgroundColor: '#55c4f0',
  color: '#201f1f',
  textAlign: 'center',
  fontSize: '14px'
};

