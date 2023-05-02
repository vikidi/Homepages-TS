import { WorkIcon, SchoolIcon, StarIcon } from "@/components/icons";
import useBreakpoint from "@/hooks/useBreakpoint";
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
        <h1 className="m-5 text-center text-2xl font-bold text-zinc-300 sm:m-10 sm:text-3xl">
          Work & Education
        </h1>
        <VerticalTimeline
          lineColor="rgb(134 239 172 / 0.7)"
          animate={breakpoint >= 1170}
        >
          <VerticalTimelineElement
            date="2022 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">Hitachi Energy</h3>
            <h4>Master&apos;s Thesis Worker</h4>
            <p>
              <span className="font-bold">Subject</span>: Desing and
              implementation of a web-base data transfer module in MicroSCADA X
              DMS600
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2021 - present"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">Tampere University</h3>
            <h4>Master&apos;s Degree</h4>
            <p>
              <span className="font-bold">Major</span>: Software Engineering
              (long)
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2019 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">
              Hitachi Energy{" "}
              <span className="font-normal">
                (prev. ABB Oy, ABB Power Grids Finland)
              </span>
            </h3>
            <h4>Engineering Trainee</h4>
            <p>
              Summer-/part-time job. Work contains design and implementation of
              Windows applications (mainly desktop) using C#/.NET/WPF, some
              coding of the main product with C++, and a lot of everything
              database-related (MSSQL). Mostly software engineering tasks, but
              also support in project engineering and service.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2016 - 2021"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">
              Tampere University{" "}
              <span className="font-normal">
                (prev. Tampere University of Technology)
              </span>
            </h3>
            <h4>Bachelor&apos;s Degree</h4>
            <p>
              <span className="font-bold">Bachelor&apos;s thesis</span>: Next
              generation AMR requirements and opportunities
            </p>
            <p style={{ marginTop: "0px" }}>
              <span className="font-bold">Major</span>: Power electronicsand
              electromechanics
            </p>
            <p style={{ marginTop: "0px" }}>
              <span className="font-bold">Minor</span>: Software systems
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2016 - 2018"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">Puuilo Oy</h3>
            <h4>Retail Sales, Warehouse Work</h4>
            <p>Summer job as all-around worker in Raisio Puuilo.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2015 - 2016"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">Pansio Navy</h3>
            <h4>Deckhand</h4>
            <p>Mandatory military service for 9 months.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2015"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<WorkIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">Turku University of Applied Sciences</h3>
            <h4>International Assistant</h4>
            <p>Summer job as assistant in international department.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="2012 - 2015"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300"
          >
            <h3 className="font-bold">Raisio Gymnasium</h3>
            <h4>Graduate</h4>
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
