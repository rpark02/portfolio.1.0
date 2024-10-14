// import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Languages from "@/assets/languages.png";
import MyResume from "@/assets/resume.pdf";
import CV from "@/assets/cv.pdf";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen w-full pt-20"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 flex items-center justify-between flex-col md:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 md:w-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20 pr-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="my-2">
              <div className="text-6xl text-navy">hello world :)</div>
              <div className="text-5xl text-navy mt-2">my name is Rachel</div>
              <div className="text-5xl text-navy">welcome to my portfolio!</div>
              <div className="text-3xl mt-5">
                I am interested in creating technologies that help understand
                human behavior. I believe it is crucial for engineers to
                understand user experiences and actively incorporate their
                feedback when creating technologies.
              </div>
              <div className="text-3xl text-light-blue">
                (psst! don't forget to check out my projects :D)
              </div>
              <div className="flex flex-col text-2xl mt-5">
                <a
                  href={MyResume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mb-2"
                  download
                >
                  Click to download my Resume!
                </a>
                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline mb-2"
                  download
                >
                  Click to download my CV!
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* IMAGE SECTION */}
        <div className="z-10 md:w-2/5 mt-10 md:mt-0">
          <motion.img
            src={Languages}
            alt="List of programming languages"
            className="max-w-full h-auto max-h-[80vh] rounded-lg object-cover mb-20 md:mb-0" // Add `mb-20` to create space between the image and the footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
