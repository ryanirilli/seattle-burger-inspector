import { makeStyledComponent } from "../design-system";

const Container = makeStyledComponent();
const Logo = makeStyledComponent();

const Home = () => {
  return (
    <Container fullPage centerContent>
      <Logo
        as="img"
        src="/img/sbi-logo.png"
        m={{ maxWidth: "300" }}
        l={{ maxWidth: "400" }}
      />
    </Container>
  );
};

export default Home;
