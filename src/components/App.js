import React, { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { getAuth, onAuthStateChanged } from "firebase/auth";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  //const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser)
  //authService.currentUser : firebase에서 로그인 정보를 받아옴
  //user 혹은 null 
  const[init,setInit]=useState(false);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    //사용자의 로그인 상태의 변화를 관찰, 변화를 알아차림
    if (user) {
    setIsLoggedIn(true);
    const uid = user.uid;
    } else {
    setIsLoggedIn(false);
    }
    setInit(true);
    });
    }, []);
  return (
    <div>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
      {/*초기화중
      isLoggedIn이 true라면 Home false라면 Auth */}
    </div>
  );
}

export default App;
