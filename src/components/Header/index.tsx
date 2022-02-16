import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';

interface Props {
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal }: Props) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button
          onClick={onOpenNewTransactionModal}
        >
          Nova transação
        </button>
    
      </Content>
    </Container>

  )
}