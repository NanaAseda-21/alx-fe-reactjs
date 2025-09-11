import UserContext from "./components/UserContext";
import ProfilePage from "./components/ProfilePage";
import UserDetails from "./components/UserDetails";
import UserProfile from "./components/UserProfile";



function App() {
  const userData = {
     name: "Jane Doe", 
     email: "jane.doe@example.com"
  };

return (
  <UserContext.Provider value= {userData}>
      <ProfilePage />
      <UserDetails />
      <UserProfile />
  </UserContext.Provider>
);
}

export default App;