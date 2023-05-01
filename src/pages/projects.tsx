import Head from "next/head";
import ProjectPreview from "@/components/projectpreview";
import homepagePic from "../../public/homepage.png";

export default function Projects() {
  return (
    <>
      <Head>
        <title>{`Projects : <>{ V.S }</>`}</title>
      </Head>
      <div className="container flex h-full w-full flex-wrap justify-center text-center">
        <div className="basis-1/3">
          <ProjectPreview
            url="/projects/testproject"
            name="test"
            image={homepagePic}
            techStack={["Typescript", "NextJS", "TailwindCSS"]}
            desc="Testing the description field. Need some more length to account for wrapping. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            sourceUrl="https://github.com/vikidi/Homepages-TS"
          />
        </div>
        <div className="basis-1/3">
          <ProjectPreview
            url="/projects/testproject"
            name="test"
            image={homepagePic}
            techStack={["Typescript", "NextJS", "TailwindCSS"]}
            desc="Testing the description field. Need some more length to account for wrapping. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            sourceUrl="https://github.com/vikidi/Homepages-TS"
          />
        </div>
        <div className="basis-1/3">
          <ProjectPreview
            url="/projects/testproject"
            name="test"
            image={homepagePic}
            techStack={["Typescript", "NextJS", "TailwindCSS"]}
            desc="Testing the description field. Need some more length to account for wrapping. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            sourceUrl="https://github.com/vikidi/Homepages-TS"
          />
        </div>
        <div className="basis-1/3">
          <ProjectPreview
            url="/projects/testproject"
            name="test"
            image={homepagePic}
            techStack={["Typescript", "NextJS", "TailwindCSS"]}
            desc="Testing the description field. Need some more length to account for wrapping. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            sourceUrl="https://github.com/vikidi/Homepages-TS"
          />
        </div>
        <div className="basis-1/3">
          <ProjectPreview
            url="/projects/testproject"
            name="test"
            image={homepagePic}
            techStack={["Typescript", "NextJS", "TailwindCSS"]}
            desc="Testing the description field. Need some more length to account for wrapping. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            sourceUrl="https://github.com/vikidi/Homepages-TS"
          />
        </div>
        <div className="basis-1/3">
          <ProjectPreview
            url="/projects/testproject"
            name="test"
            image={homepagePic}
            techStack={["Typescript", "NextJS", "TailwindCSS"]}
            desc="Testing the description field. Need some more length to account for wrapping. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            sourceUrl="https://github.com/vikidi/Homepages-TS"
          />
        </div>
        <div className="basis-1/3">
          <ProjectPreview
            url="/projects/testproject"
            name="test"
            image={homepagePic}
            techStack={["Typescript", "NextJS", "TailwindCSS"]}
            desc="Testing the description field. Need some more length to account for wrapping. aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            sourceUrl="https://github.com/vikidi/Homepages-TS"
          />
        </div>
      </div>
    </>
  );
}
