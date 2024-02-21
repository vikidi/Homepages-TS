import { WorkIcon, SchoolIcon, StarIcon } from "@/Icons";
import { useBreakpoint } from "@/hooks";
import Head from "next/head";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function WorkAndEducation() {
  const breakpoint = useBreakpoint();

  return (
    <>
      <Head>
        <title>{`Work & Education : <>{ V.S }</>`}</title>
      </Head>
      <div className="container flex h-full w-full flex-col justify-center p-4 ">
        <h1 className="m-5 text-center font-overpass text-3xl font-bold text-zinc-300 sm:m-10 sm:text-5xl">
          Work & Education
        </h1>
        <VerticalTimeline
          lineColor="rgb(134 239 172 / 0.7)"
          animate={breakpoint >= 1170}
        >
          <VerticalTimelineElement
            date="12 / 2023 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">
                CoE Group{" "}
                <span className="font-normal">
                  (contractor @ Hitachi Energy)
                </span>
              </h3>
              <h4>Software Engineer</h4>
              <p>
                Working with MicroSCADA X DMS600 electricity distribution
                management system. Work contains design, implementation and
                testing of Windows applications (mainly desktop) using
                C#/.NET/WPF/MsTest, some coding of the main product with C++,
                and a lot of everything database-related (MS SQL). Additionally
                I&apos;m creating smaller scripts using
                Batch/PowerShell/Python/VBA. Mostly software engineering tasks,
                but also project engineering and service.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="6 / 2022 - 12 / 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">Hitachi Energy</h3>
              <h4>Master&apos;s Thesis Worker</h4>
              <p>
                <span className="font-bold">Subject</span>: Desing and
                Implementation of a Web-Based Data Transfer Module in MicroSCADA
                X DMS600
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="5 / 2021 - present"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">Tampere University</h3>
              <h4>Master&apos;s Degree</h4>
              <p>
                <span className="font-bold">Master&apos;s thesis</span>: Desing
                and Implementation of a Web-Based Data Transfer Module in
                MicroSCADA X DMS600
              </p>
              <p>
                <span className="font-bold">Major</span>: Software Engineering
                (long)
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="5 / 2019 - 12 / 2023"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">
                Hitachi Energy{" "}
                <span className="font-normal">
                  (prev. ABB Oy, ABB Power Grids Finland Oy)
                </span>
              </h3>
              <h4>Engineering Trainee</h4>
              <p>
                Worked with MicroSCADA X DMS600 electricity distribution
                management system. Part-time job (full-time at summers).
                Basically same work description as above in CoE Group position.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="8 / 2016 - 5 / 2021"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">
                Tampere University{" "}
                <span className="font-normal">
                  (prev. Tampere University of Technology)
                </span>
              </h3>
              <h4>Bachelor&apos;s Degree</h4>
              <p>
                <span className="font-bold">Bachelor&apos;s thesis</span>: Next
                Generation AMR Requirements and Opportunities
              </p>
              <p style={{ marginTop: "0px" }}>
                <span className="font-bold">Major</span>: Power electronics and
                electromechanics
              </p>
              <p style={{ marginTop: "0px" }}>
                <span className="font-bold">Minor</span>: Software systems
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="4 / 2016 - 8 / 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">Puuilo Oy</h3>
              <h4>Retail Sales, Warehouse Work</h4>
              <p>Summer job as all-around worker in Raisio Puuilo.</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="7 / 2015 - 3 / 2016"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">Pansio Navy</h3>
              <h4>Deckhand</h4>
              <p>Mandatory military service for 9 months.</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="6 / 2015 - 7 / 2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">
                Turku University of Applied Sciences
              </h3>
              <h4>International Assistant</h4>
              <p>Summer job as assistant in international department.</p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="8 / 2012 - 6 / 2015"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">Raisio Gymnasium</h3>
              <h4>Graduate</h4>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>
      </div>
    </>
  );
}
