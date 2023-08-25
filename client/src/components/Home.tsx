import axios from "axios";
import { useEffect } from "react";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import {
    pushFeaturedPlaylist,
    selectFeaturedPlaylists,
} from "../store/contentSlice";

const TopNav = () => {
    return (
        <div className="px-5 py-2 flex flex-row justify-between items-center bg-neutral-950 bg-opacity-20">
            <div className="flex flex-row justify-evenly items-center gap-2">
                <LiaAngleLeftSolid
                    className="p-1 rounded-full bg-neutral-950 hover:cursor-pointer"
                    size={28}
                />
                <LiaAngleRightSolid
                    className="p-1 rounded-full bg-neutral-950 hover:cursor-pointer"
                    size={28}
                />
            </div>
            <div className="flex flex-row flex-shrink-0 justify-evenly items-center gap-8">
                <button className="text-neutral-400 font-semibold hover:scale-105 hover:text-white ease-in-out duration-500">
                    Sign up
                </button>
                <button className="px-8 py-2.5 bg-neutral-50 text-neutral-900 font-semibold rounded-full hover:scale-105 hover:bg-neutral-200 ease-in-out duration-500">
                    Login
                </button>
            </div>
        </div>
    );
};

const PlaylistCard = () => {};

const PlaylistSection = () => {
    const featured_playlists = useSelector(selectFeaturedPlaylists);
    const dispatch = useDispatch();
    useEffect(() => {
        axios({
            method: "GET",
            url: "http://localhost:3000/api/v1/featured_playlists",
        })
            .then((res) => res.data)
            .then((data: Array<object>) =>
                data.forEach((playlist) =>
                    dispatch(pushFeaturedPlaylist(playlist))
                )
            );
    }, []);
    featured_playlists.map((featured_playlist) =>
        console.log(featured_playlist)
    );
    return <div>{/* <h1></h1> */}</div>;
};

const Home = () => {
    return (
        <div className="flex flex-col justify-start flex-grow bg-neutral-900 rounded-md">
            <TopNav />
            <div className="px-5 py-2">
                <PlaylistSection />
            </div>
        </div>
    );
};

export default Home;
