import { Route, Routes } from "react-router-dom";
import { Home, Library, Nav, SignUpBanner } from "./components/Components";

function App() {
    return (
        <div className="h-screen p-2 flex flex-col gap-2 bg-neutral-950 text-white overflow-y-scroll">
            <div className="flex flex-row gap-2">
                <div className=" w-[20.7rem] flex flex-col flex-shrink gap-2">
                    <Nav />
                    <Library />
                </div>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    {/* <Route path="/search" element={<Search />} /> */}
                    {/* <Route path="/playlist" element={<Playlist />} /> */}
                </Routes>
            </div>
            {/* <PlaybackController /> */}
            <SignUpBanner />
        </div>
    );
}

export default App;
