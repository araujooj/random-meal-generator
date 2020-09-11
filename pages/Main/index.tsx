import Link from "next/link";
import Button from '../../components/Button'
import { Container, Content } from './styles'

const Main: React.FC = () => {
  return (
    <Container>
      <Content>
      <h1>Random Meal Generator</h1>
      <span>Click the button below to generate a completely random meal</span>
      <br/>

      <Link href="/meal">
        <Button>
          <h2>Generate !</h2>
        </Button>
      </Link>
      </Content>
  
    </Container>
  );
};

export default Main;
