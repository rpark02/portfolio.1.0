import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center h-screen gap-10"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 flex items-center justify-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="space-y-2">
              <div className="text-6xl text-navy">hello world :)</div>
              <div className="text-5xl text-navy">my name is Rachel</div>
              <div className="text-5xl text-navy">welcome to my portfolio!</div>
              <div className="text-3xl">
                I am interested in creating technologies that help
                understand human behavior. I believe it is crucial for
                engineers to understand user experiences and actively
                incorporate their feedback when creating technologies.
              </div>
              <div className="text-3xl text-light-blue">
                (psst! don't forget to check out my projects :D)
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
