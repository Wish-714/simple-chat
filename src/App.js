import Chat from './components/Chat';
import SignIn from './components/SignIn';
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";


function App() {

  
  const [user] = useAuthState(auth)
  return (
    // kalau user true dan sudah sign in maka tampilkan chat
    // kalau false tampilkan Sign In menu
    <>
    {user ?  <Chat/> : <SignIn/>}
    </>
  );
}

export default App;
