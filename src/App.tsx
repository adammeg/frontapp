import "./styles/Home.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../src/componment/Register";
import Login from "../src/componment/Login";
import Acc from "../src/componment/Home";
import Replies from "../src/componment/Replies";
export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <h1 className="title">
          WELCOME TO MES CODE DIFITAUX
        </h1>

        <p className="description">
          GET START YOUR NFT EXPERIENCE FROM HERE
        </p>
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/dashboard' element={<Acc />} />
                    <Route path='/:id/replies' element={<Replies />} />
                </Routes>
            </BrowserRouter>
      </main>
    </div>
  );
}
