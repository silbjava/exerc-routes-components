import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: #fff;
`;

const Content = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 400px;
  border-radius: 20px;
  background-color: rgba(30, 41, 59, 0.85);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`;

const Image = styled.img`
  width: 120px;
  margin-bottom: 1.5rem;
  opacity: 0.9;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: 2px;
`;

const Message = styled.p`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const SubMessage = styled.p`
  font-size: 0.9rem;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #6366f1;
  color: white;
  font-weight: 600;
  border-radius: 999px;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background-color: #4f46e5;
  }
`;

export default function NotFoundPage() {
  return (
    <PageWrapper>
      <Content>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="Erro 404 - Robô quebrado"
        />
        <Title>404</Title>
        <Message>Ops! Página não encontrada.</Message>
        <SubMessage>
          Parece que o robô se perdeu... ou a página foi removida.
        </SubMessage>
        <StyledLink to="/">Voltar para o início</StyledLink>
      </Content>
    </PageWrapper>
  );
}
