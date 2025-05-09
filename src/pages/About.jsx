export default function About() {
    return (
      <section style={aboutSection}>
        <h1 style={aboutTitle}>Sobre Mim</h1>
        <p style={aboutText}>
          Mesmo não tendo muita experiência na área de eletrônica, dediquei meus estudos 
          para atuar com manutenção de equipamentos industriais, além do desenvolvimento 
          de placas de circuito impresso (PCI) e integração de sistemas eletrônicos com
           microcontroladores como Arduino e ESP32.
        </p>
        <p style={aboutText}>
          Sou apaixonado por resolver problemas complexos e transformar ideias em circuitos
          funcionais e eficientes. Estou sempre buscando atualização em novas tecnologias e
          tendências do setor.
        </p>
      </section>
    );
  }
  

  const aboutSection = {
    backgroundColor: '#e1f5fe',
    padding: '30px',
    borderRadius: '12px',
  };
  
  const aboutTitle = {
    color: '#01579b',
    fontSize: '2rem',
  };
  
  const aboutText = {
    marginTop: '12px',
    fontSize: '1.1rem',
    color: '#333',
  };