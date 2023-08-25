// react icon imports
import { useState } from "react";
import { BiGlobe, BiLibrary, BiPlus } from "react-icons/bi";

interface ctaCard {
    title: string;
    description: string;
    ctaText: string;
}

const ctaCards: ctaCard[] = [
    {
        title: "Create your first playlist",
        description: "It's easy, we'll help you",
        ctaText: "Create playlist",
    },
    {
        title: "Let's find some podcasts to follow",
        description: "We'll keep you updated on new episodes",
        ctaText: "Browse podcasts",
    },
];

const CtaCard = (props: ctaCard) => {
    const { title, description, ctaText } = props;
    return (
        <div className="p-5 flex flex-col justify-start items-start gap-4 bg-neutral-800 rounded-lg">
            <h1 className="font-semibold">{title}</h1>
            <p className="text-xs">{description}</p>
            <button className="px-5 py-2 bg-neutral-50 rounded-full font-bold text-xs text-neutral-900 hover:cursor-pointer hover:scale-105 ease-in-out duration-300">
                {ctaText}
            </button>
        </div>
    );
};

interface footerItem {
    title: string;
    link: string;
}

const footerItems: footerItem[] = [
    {
        title: "Legal",
        link: "https://www.spotify.com/in-en/legal/end-user-agreement/",
    },
    {
        title: "Privacy Center",
        link: "https://www.spotify.com/in-en/privacy",
    },
    {
        title: "Privacy Policy",
        link: "https://www.spotify.com/in-en/legal/privacy-policy/",
    },
    {
        title: "Cookies",
        link: "https://www.spotify.com/in-en/legal/cookies-policy/",
    },
    {
        title: "About Ads",
        link: "https://www.spotify.com/in-en/legal/privacy-policy/#s3",
    },
    {
        title: "Accessibility",
        link: "https://www.spotify.com/in-en/accessibility",
    },
    {
        title: "Cookies",
        link: "https://www.spotify.com/in-en/legal/cookies-policy/",
    },
];

const FooterItem = (props: footerItem) => {
    const { title, link } = props;
    return (
        <a href={link} className="flex-shrink-0 text-[0.65rem] font-light">
            {title}
        </a>
    );
};

const Footer = () => {
    return (
        <div className="px-2 py-5 flex flex-col flex-shrink-0 gap-3 text-neutral-400">
            <div className="flex flex-row gap-3">
                {footerItems.slice(0, 4).map((footerItem, index) => (
                    <FooterItem key={index} {...footerItem} />
                ))}
            </div>
            <div className="flex flex-row gap-3">
                {footerItems.slice(4, 6).map((footerItem, index) => (
                    <FooterItem key={index} {...footerItem} />
                ))}
            </div>
            <div className="flex flex-row">
                {footerItems.slice(6).map((footerItem, index) => (
                    <FooterItem key={index} {...footerItem} />
                ))}
            </div>
        </div>
    );
};

const Library = () => {
    return (
        <div className=" p-2 flex flex-col justify-start gap-2 flex-grow bg-neutral-900 rounded-md">
            <div className="p-3 flex flex-row items-center text-neutral-400">
                <div className="flex flex-row flex-grow items-center gap-3 hover:cursor-pointer hover:text-white ease-in-out duration-500">
                    <BiLibrary size={28} />
                    <h1 className="font-semibold">Your Library</h1>
                </div>
                <BiPlus
                    className="p-1 ml-auto rounded-full bg-neutral-400 bg-opacity-0 hover:bg-opacity-10 hover:text-white ease-in-out duration-500"
                    size={32}
                />
            </div>
            <div className="h-[35vh] flex flex-col gap-5 overflow-scroll">
                {ctaCards.map((ctaCard, index) => (
                    <CtaCard key={index} {...ctaCard} />
                ))}
            </div>
            <Footer />
            <div className="px-2 py-4">
                <div className="w-max px-3 py-1 flex flex-row gap-1 items-center rounded-full border border-neutral-400">
                    <BiGlobe size={20} />
                    <h1 className="text-xs font-semibold">English</h1>
                </div>
            </div>
        </div>
    );
};

export default Library;
