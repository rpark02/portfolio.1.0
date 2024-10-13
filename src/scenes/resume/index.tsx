import CV from "@/assets/cv.pdf";
import MyResume from "@/assets/resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="py-5">
      <div className="mx-auto w-5/6 text-center ">
        <h1 className="text-5xl text-navy mb-8">Resume and CV</h1>
        <div className="flex flex-col md:flex-row justify-center space-x-8">
          <div className="flex flex-col items-center">
            <a
              href={MyResume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-2"
              download
            >
              View and Download Resume 1
            </a>
            <iframe
              src={MyResume}
              width="300px"
              height="400px"
              className="border border-gray-300 rounded-lg"
            />
          </div>

          <div className="flex flex-col items-center">
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mb-2"
              download
            >
              View and Download Resume 2
            </a>
            <iframe
              src={CV}
              width="300px"
              height="400px"
              className="border border-gray-300 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
