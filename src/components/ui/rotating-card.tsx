const RotatingCard = ({imageUrl, description, altText, videoUrl, title} : {
  imageUrl: string,
  description: string,
  videoUrl: string,
  altText: string, 
  title: string
}) => {
  return (
    <section
      className="flex justify-center items-center gap-x-16 text-white rounded-large"
    >
      <div
        className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective rounded-large"
      >
        <div
          className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000 rounded-large"
        >
          <div className="absolute backface-hidden  w-full h-full rounded-large">
            <img src={imageUrl} alt={altText} className="w-full h-full object-cover rounded-large" style={{ borderRadius: "10px" }} />
          </div>
          <div
            className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden rounded-large"
            style={{ borderRadius: "10px" }} 
          >
            <div className="text-center flex flex-col items-center justify-start h-full text-gray-800 pt-6 px-2 pb-24">
              <h1 className="text-3xl font-semibold">{title}</h1>
              <div className="flex items-center">
                <p className="text-black text-center px-4 py-2 pt-4 text-wrap truncate">{description}</p>
              </div>
              <a
                href={videoUrl}
                className="px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-10 scale-0 group-hover:scale-125 bg-pink transition duration-300 ease-in-out hover:text-opacity-80"
              >
                Watch Now
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default RotatingCard;
