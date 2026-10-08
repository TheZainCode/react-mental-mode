import { useState } from 'react';
import Task1 from './components/Task1.jsx';
import UserStatus from './components/UserStatus.jsx';
import UserList from './components/UserList.jsx';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx';
import UserCard from './components/UserCard.jsx';
import Card from './components/Card.jsx';
import ProductCard from './components/ProductCard.jsx';
import ActionButtons from './components/ActionButtons.jsx';
import Counter from './components/Counter.jsx';
import Profile from './components/Profile.jsx';
import Skills from './components/Skills.jsx';
import TaskList from './components/TaskList.jsx';
import CounterControls from './components/CounterControls.jsx';
import CounterDisplay from './components/CounterDisplay.jsx';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import DocumentTitle from './components/DocumentTitle.jsx';
import Timer from './components/Timer.jsx';

function App() {
  const [count, setCount]=useState(0);
function handleIncrease(){
  setCount((prevCount) => prevCount+1);
}
function handleDecrease(){
  setCount((prevCount) => prevCount-1);
}
function handleReset(){
  setCount(0);
}
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
        <Card>
          <h2>Frontend Development</h2>
          <p>HTML • CSS • JavaScript</p>
        </Card>
        <Card>
          <h2>React Development</h2>
          <p>Components • Props • State</p>
        </Card>
        <Card>
          <h2>Backend Development</h2>
          <p>APIs • Databases • Authentication</p>
        </Card>
        <ProductCard name="Laptop" price={1200} category="Electronics" inStock/>
        <ProductCard name="Keyboard" price={60} category="Accessories" inStock={false}/>
        <ProductCard name="Headphones" price={80} category="Accessories" inStock/>
        <ActionButtons />
        <Counter />
        <Profile />
        <Skills />
        <TaskList />
        <CounterDisplay count={count} />
        <CounterControls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
        onReset={handleReset} />
        <LoginForm />
        <RegisterForm />
        <DocumentTitle />
        <Timer />
      </main>
      <Footer />
    </>
  );
}

export default App;