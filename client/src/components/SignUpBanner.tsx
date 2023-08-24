const SignUpBanner = () => {
    return (
        <div
            className="min-h-min p-3 flex flex-row justify-between items-center flex-shrink-0 bg-gradient-to-r to-blue-500 from-pink-600 overflow-hidden hover:cursor-pointer"
            onClick={() =>
                (window.location.href =
                    "https://www.spotify.com/in-en/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2Fplaylist%2F37i9dQZF1DXdbkmlag2h7b")
            }
        >
            <div className="flex flex-col justify-center items-start gap-1">
                <h1 className="text-[0.7rem]">
                    {"Preview of Spotify".toUpperCase()}
                </h1>
                <p className="text-sm">
                    Sign up to get unlimited songs and podcasts with occasional
                    ads. No credit card needed.
                </p>
            </div>
            <button className="px-5 py-2 ml-auto flex-shrink-0 rounded-full bg-neutral-50 text-neutral-900 font-semibold">
                Sign up free
            </button>
        </div>
    );
};
export default SignUpBanner;
