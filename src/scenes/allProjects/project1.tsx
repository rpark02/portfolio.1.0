import Figma from "@/assets/mempal/mempalFigma.png";
import Pages1 from "@/assets/mempal/mempalPages1.png";
import Pages2 from "@/assets/mempal/mempalPages2.png";


const Project1 = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl">MemPal</h2>
        <p className="text-2xl">Frontend Developer</p>
        <p className="text-2xl">MIT Media Lab | 2024</p>
      </div>
      <div>
        <p className="mt-4 text-sm font-fragmentMono">
          MemPal is an application built to assist individuals experiencing
          complications with their memory. Read more about it{" "}
          <a
            href="https://www.media.mit.edu/projects/mempal/overview/"
            className="text-blue-500"
          >
            here
          </a>
          .
        </p>
        <p className=" mt-4 text-sm font-fragmentMono">
          I used Figma to help my supervisor mock up designs for various pages.
          Afterwards, I built said pages using tools such as: React Native, Expo
          Go, JavaScript, HTML, CSS. Furthermore, I incorporated user feedback
          from pilot studies to make the application more accessible. After the
          project was completed, I wrote up a brief reflection on aspects of the
          application that could be improved. Read about my reflection{" "}
          <a
            href="https://docs.google.com/document/d/1DTghvrFTSRHwfhhy27ViDDoAN3YN1eeRZrZ7CVJBhTY/edit?usp=sharing"
            className="text-blue-500"
          >
            here
          </a>
          .
        </p>
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Skills Used:</h3>
        <ul className="list-disc list-inside mt-2">
          <li className="text-sm font-fragmentMono">GitHub</li>
          <li className="text-sm font-fragmentMono">React Native</li>
          <li className="text-sm font-fragmentMono">Expo Go</li>
          <li className="text-sm font-fragmentMono">JavaScript</li>
          <li className="text-sm font-fragmentMono">HTML/CSS</li>
          <li className="text-sm font-fragmentMono">Figma</li>
          <li className="text-sm font-fragmentMono">UX Research</li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Figma Designs:</h3>
        <img
          src={Figma}
          alt="Figma Designs"
          className="max-w-[350px] w-full h-auto"
        />
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Pages I Created:</h3>
        <div>
          <img
            src={Pages1}
            alt="Pages 1"
            className="max-w-[80%] w-full h-auto"
          />
          <img
            src={Pages2}
            alt="Pages 2"
            className="max-w-[70%] w-full h-auto my-5"
          />
        </div>
      </div>
    </div>
  );
};

export default Project1;
