import Task1 from './components/Task1.jsx';
import UserStatus from './components/UserStatus.jsx';
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserCard from './components/UserCard.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Task1 />
        <UserStatus />
        <UserList />
        <MainContent />
        <UserCard name="Ali" role="Frontend Developer" experience={2} isAvailable={true}></UserCard>
        <UserCard name="Ahmad"  role="Backend Developer"  experience={3}  isAvailable={false}></UserCard>
        <UserCard name="Sara"  role="UI Designer"  experience={1}  isAvailable={true}></UserCard>
      </main>
      <Footer />
    </>
  );
}

export default App;