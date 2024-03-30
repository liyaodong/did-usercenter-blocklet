import { Container } from '../components/container.tsx';
import { ApplicationLayout } from '../components/application-layout.tsx';
import { UserProfile } from '../components/user-profile.tsx';
import { GradientBar } from '../components/gradient-bar.tsx';

function Home() {
  return (
    <ApplicationLayout>
      <GradientBar />
      <Container>
        <UserProfile />
      </Container>
    </ApplicationLayout>
  );
}

export default Home;
