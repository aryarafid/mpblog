import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProfilePage from './pages/profile/ProfilePage';
import RegisterForm from './pages/profile/RegisterForm';
import LoginForm from './pages/profile/LoginForm';
import ChangePassword from './pages/profile/ChangePassword';
import EditProfilePage from './pages/profile/EditProfilePage';

// const userData = {
//   name: "Sosa",
//   image: '/logo192.png'
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" */}
          {/* // element={<Layout />} */}
          {/* > */}
          <Route path="/" element={<Home />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="changePassword" element={<ChangePassword />} />
          <Route path="editProfile" element={<EditProfilePage />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="register" element={<Register />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
