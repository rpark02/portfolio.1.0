import Database from "@/assets/slm/database.png";
import Map from "@/assets/slm/map.png";
import BarChart from "@/assets/slm/barChart.png";
import Analysis1 from "@/assets/slm/analysis1.png";
import Analysis2 from "@/assets/slm/analysis2.png";
import ScatterPlot from "@/assets/slm/scatterPlot.png";

const SLM = () => {
  return (
    <div>
      <div>
        <h2 className="text-5xl">Foster Care Data Analysis</h2>
        <p className="text-2xl">Data Analyst</p>
        <p className="text-2xl">Silver Lining Mentoring | 2024</p>
      </div>
      <div>
        <p className="mt-4 text-sm font-fragmentMono">
          Silver Lining Mentoring is an organization that empowers youth in
          foster care. Read more about them{" "}
          <a
            href="https://www.silverliningmentoring.org/"
            className="text-blue-500"
          >
            here
          </a>
          .
        </p>
        <p className=" mt-4 text-sm font-fragmentMono">
          I was tasked to collect data on different mentoring programs across
          the United States that were available for youth who are currently in,
          or have previously been in the foster care system. I created a
          database using Google Sheets/Excel, and analyzed this data for any
          patterns and trends. In addition, I created visualizations of this
          data using Google Sheets/Excel, Python, Pandas/Geopandas, and
          Matplotlib.
        </p>
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Skills Used:</h3>
        <ul className="list-disc list-inside mt-2">
          <li className="text-sm font-fragmentMono">GitHub</li>
          <li className="text-sm font-fragmentMono">G Suite</li>
          <li className="text-sm font-fragmentMono">Microsoft Office</li>
          <li className="text-sm font-fragmentMono">Python</li>
          <li className="text-sm font-fragmentMono">Pandas</li>
          <li className="text-sm font-fragmentMono">Matplotlib</li>
          <li className="text-sm font-fragmentMono">Data Analysis</li>
        </ul>
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Database (Google Sheets and Excel):</h3>
        <img
          src={Database}
          alt="Database"
          className="w-full h-auto"
        />
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Data Visualization</h3>
        <div>
          <img
            src={Map}
            alt="Cloropleth Map"
            className="max-w-[700px] w-full h-auto"
          />
          <img
            src={ScatterPlot}
            alt="Scatter Plot"
            className="max-w-[600px] w-full h-auto my-5"
          />
          <img
            src={BarChart}
            alt="Bar Chart"
            className="max-w-[400px] w-full h-auto my-5"
          />
        </div>
      </div>
      <div className="mt-10">
        <h3 className="mt-4 text-3xl">Data Analysis</h3>
        <div>
          <img
            src={Analysis1}
            alt="Analysis 1"
            className="max-w-[600px] w-full h-auto"
          />
          <img
            src={Analysis2}
            alt="Analysis 2"
            className="max-w-[600px] w-full h-auto my-5"
          />
        </div>
      </div>
    </div>
  );
};

export default SLM;
