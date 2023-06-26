import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProfilePage from './pages/profile/ProfilePage';
import RegisterForm from './pages/profile/RegisterForm';
// import LoginForm from './pages/profile/LoginForm';
import LoginForm from './pages/profile/LoginForm';
// import LoginFormRef from '../unused/LoginFormRef';
import ChangePassword from './pages/profile/ChangePassword';
import EditProfilePage from './pages/profile/EditProfilePage';
import VerifyConfirmation from './components/profile/VerifyConfirmation';

// const userData = {
//   name: "Sosa",
//   image: '/logo192.png'
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="register" element={<RegisterForm />} />
          {/* <Route path="login" element={<LoginFormRef />} /> */}
          {/* <Route path="login" element={<LoginForm />} /> */}
          <Route path="login" element={<LoginForm />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="editProfile" element={<EditProfilePage />} />
          <Route path='/verification/:token' element={<VerifyConfirmation />} />
          {/* <Route path='/blog/:id' element={BlogDetail} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
