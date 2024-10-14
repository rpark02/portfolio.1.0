// import Carousel from "@/shared/Carousel.tsx";
import Birthday from "@/assets/designs/birthday.png";
import Getty from "@/assets/designs/getty.png";
import Pistol from "@/assets/designs/parisPistol.png";
import Tower from "@/assets/designs/towerAd.png";
import Copywriting from "@/assets/designs/copywriting.png";
import MyCopywriting from "@/assets/designs/myCopywriting.png";
import MenRun from "@/assets/designs/parisRunMen.png";
import WomenRun from "@/assets/designs/parisRunWomen.png";

const SLM = () => {
  // const images = [
  //   "https://example.com/image1.jpg",
  //   "https://example.com/image2.jpg",
  //   "https://example.com/image3.jpg",
  //   // Add more image URLs as needed
  // ];

  return (
    <div>
      <div>
        <h2 className="text-5xl">Design Exercises</h2>
      </div>
      <div>
        <p className="mt-4 text-sm font-fragmentMono">
          In addition to programming, I really enjoy art and design. I enjoy
          practicing my skills by recreating ads and creating mockups for
          various events. Below are some examples of my work.
        </p>
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Skills Used:</h3>
        <ul className="list-disc list-inside mt-2">
          <li className="text-sm font-fragmentMono">Figma</li>
          <li className="text-sm font-fragmentMono">Canva</li>
          <li className="text-sm font-fragmentMono">Procreate</li>
        </ul>
      </div>
      <div className="mt-10">
        {/* <div className="carousel-container">
          <Carousel images={images} />
        </div> */}
        <div className="flex mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src={Copywriting}
              alt="Ad for copywriting classes"
              className="max-w-[60%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">
              Original Ad (from Instagram)
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={MyCopywriting}
              alt="revised ad for copywriting classes"
              className="max-w-[60%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">My Version</p>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src={Birthday}
              alt="Mock of a birthday invitation"
              className="max-w-[80%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">Birthday Invitation</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Getty}
              alt="postcard for Getty Museum"
              className="max-w-[80%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">Getty Museum</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={Tower}
              alt="mock ad for Tower28 beauty brand"
              className="max-w-[80%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">Tower28 Ad</p>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src={Pistol}
              alt="Image of an athlete from the 2024 Paris Olympics"
              className="max-w-[80%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">Paris 2024 - Air Pistol</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={WomenRun}
              alt="Image of women athletes running in the 2024 Paris Olympics"
              className="max-w-[80%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">
              Paris 2024 - Women's 200m
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src={MenRun}
              alt="Image of men athletes running in the 2024 Paris Olympics"
              className="max-w-[80%] w-full h-auto"
            />
            <p className="text-2xl text-center mt-2">Men's 100m</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SLM;
