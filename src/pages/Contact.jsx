export default function Contact() {
    return (
      <section style={contactSection}>
        <h1 style={contactTitle}>📞 Entre em Contato</h1>
        <p style={contactText}>Se você precisa de suporte técnico, desenvolvimento de projetos ou manutenção de
        sistemas eletrônicos, estou à disposição.
        </p>
        <ul style={contactList}>
          <li style={contactItem}>📧 Email: tecnico@eletronica.com</li>
          <li style={contactItem}>📱 WhatsApp: (11) 91234-5678</li>
          <li style={contactItem}>💼 LinkedIn: linkedin.com/in/tecnico-eletronica</li>
        </ul>
      </section>
    );
  }
  
  const contactSection = {
    backgroundColor: '#fff3e0',
    padding: '30px',
    borderRadius: '12px',
  };
  
  const contactTitle = {
    color: '#e65100',
    fontSize: '2rem',
  };
  
  const contactText = {
    marginBottom: '20px',
    fontSize: '1.1rem',
  };
  
  const contactList = {
    listStyle: 'none',
    padding: 0,
  };
  
  const contactItem = {
    marginBottom: '10px',
    fontWeight: 'bold',
    fontSize: '1rem',
  };
  