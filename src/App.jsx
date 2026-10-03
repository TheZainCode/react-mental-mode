import Task1 from './components/Task1.jsx';
import UserStatus from './components/UserStatus.jsx';
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <Task1 />
        <UserStatus />
        <UserList />
        <MainContent />
      </main>
      <Footer />
    </>
  );
}

export default App;