// react imports
import { useEffect, useState } from "react";

// react icon imports
import { BiSearch, BiSolidSearch } from "react-icons/bi";
import { GoHome, GoHomeFill } from "react-icons/go";
// redux store imports
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectPage, setPage } from "../store/userSlice";

interface navItem {
    title: string;
    icon: JSX.Element;
    iconActive: JSX.Element;
}

const navItems: navItem[] = [
    {
        title: "Home",
        icon: <GoHome size={28} />,
        iconActive: <GoHomeFill size={28} />,
    },
    {
        title: "Search",
        icon: <BiSearch size={28} />,
        iconActive: <BiSolidSearch size={28} />,
    },
];

const NavItem = (props: navItem) => {
    const page = useSelector(selectPage);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { title, icon, iconActive } = props;
    const [active, setActive] = useState<boolean>();
    useEffect(() => {
        page === title ? setActive(true) : setActive(false);
        navigate(`/${page !== "home" ? page.toLowerCase() : ""}`);
    }, [page, title]);
    return (
        <div
            className={`flex flex-row items-center gap-3 ${
                !active && "text-neutral-400 hover:text-white"
            } hover:cursor-pointer ease-in-out duration-500`}
            onClick={() => {
                dispatch(setPage(title));
            }}
        >
            {active ? iconActive : icon}
            <h1 className="font-semibold">{title}</h1>
        </div>
    );
};
const Nav = () => {
    return (
        <div className="px-5 py-3 grid grid-flow-row gap-5 bg-neutral-900 rounded-md">
            {navItems.map((navItem, index) => (
                <NavItem key={index} {...{ ...navItem }} />
            ))}
        </div>
    );
};

export default Nav;
