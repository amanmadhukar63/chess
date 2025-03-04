

export default function CreateGame(){
    return (
        <div className="flex h-screen p-2">
            <div className="h-full w-1/6">
                <div
                className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:min-w-44"
                >
                    Board Id : 56DHJJ8
                </div>
            </div>
            <div className="h-full w-4/6 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/002/537/828/small/modern-black-chess-board-with-letters-and-numbers-background-design-illustration-free-vector.jpg')] bg-cover">
                <div className="text-3xl h-full w-full flex justify-center items-center backdrop-blur">
                    <div className="bg-black p-4 rounded-2xl">Waiting For Your Opponent...</div>
                </div>
            </div>
            <div className="h-full w-1/6">

            </div>
        </div>
    );
}