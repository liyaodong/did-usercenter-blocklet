import { Container } from '../components/container.tsx';
import { ApplicationLayout } from '../components/application-layout.tsx';
import { UserProfile } from '../components/user-profile.tsx';
import { GradientBar } from '../components/gradient-bar.tsx';
import { UserStat } from '../components/user-stat.tsx';

function Home() {
  return (
    <ApplicationLayout>
      <GradientBar />
      <Container>
        <UserProfile />
        <UserStat />
      </Container>
    </ApplicationLayout>
  );
}

export default Home;
