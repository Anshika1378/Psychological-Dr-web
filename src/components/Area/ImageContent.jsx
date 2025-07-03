import seaimage from  "../../assets/media/pixel-river.png"

function ImageContent() {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-100 flex items-center justify-center text-black mb-12" 
                style={{ backgroundImage: `url(${seaimage})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-opacity-60 z-0"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-2xl">
                    <p className="text-lg md:text-2xl mb-6 font-serif">
                        “I have come to believe that caring for myself is not self- <br />
                        indulgent. Caring for myself is an act of survival.”
                    </p>
                    <span className="text-center mt-6">—Audre Lorde</span>
                </div>
            </div>

        </>
    )
}
export default ImageContent;