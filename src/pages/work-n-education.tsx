import { WorkIcon, SchoolIcon, StarIcon } from "@/Icons";
import { useBreakpoint } from "@/hooks";
import Head from "next/head";
import Link from "next/link";
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
                  (consultant @ Hitachi Energy)
                </span>
              </h3>
              <h4>Software Engineer</h4>
              <p>
                Working with the MicroSCADA X DMS600 power grid operation
                management system. Software planning, implementation, testing
                and delivery to clients in a Windows/.NET environment. Projects
                are often data interfaces or auxiliary software that processes
                data internally. The interfaces are mainly implemented in C#
                with REST or SOAP protocol. SQL database handling is a central
                part in data applications. We also work a lot with customers
                when delivering new systems or maintaining existing ones.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date="5 / 2021 - 4 / 2024"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<SchoolIcon />}
            dateClassName="min-[1170px]:text-zinc-300 text-black"
          >
            <div className="text-black">
              <h3 className="font-bold">Tampere University</h3>
              <h4>Master&apos;s Degree</h4>
              <p>
                <span className="font-bold">Master&apos;s thesis</span>: Design
                and Implementation of a Web-Based Data Transfer Module in
                MicroSCADA X DMS600 (
                <Link
                  href="https://urn.fi/URN:NBN:fi:tuni-202401261853"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
                >
                  Trepo
                </Link>{" "}
                /{" "}
                <Link
                  href="SaarinenVille_dippa.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  locale={false}
                  className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
                >
                  PDF
                </Link>
                )
              </p>
              <p>
                <span className="font-bold">Major</span>: Software Engineering
                (long)
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
                <span className="font-bold">Subject</span>: Design and
                Implementation of a Web-Based Data Transfer Module in MicroSCADA
                X DMS600 (
                <Link
                  href="https://urn.fi/URN:NBN:fi:tuni-202401261853"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
                >
                  Trepo
                </Link>{" "}
                /{" "}
                <Link
                  href="SaarinenVille_dippa.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  locale={false}
                  className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
                >
                  PDF
                </Link>
                )
              </p>
              <p>
                This project aimed to create a REST interface that sends data to
                Traficom&#39;s network information point system for
                co-construction activities. The implementation mainly included
                the research of technologies, software design, coding and
                testing, and evaluation of the final result.
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
                management system. Part-time job (full-time at summers). Same
                work description as above in CoE Group position.
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
              <h3 className="font-bold">Tampere University</h3>
              <h4>Bachelor&apos;s Degree</h4>
              <p>
                <span className="font-bold">Bachelor&apos;s thesis</span>: Next
                Generation AMR Requirements and Opportunities (
                <Link
                  href="https://urn.fi/URN:NBN:fi:tuni-202105215303"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
                >
                  Trepo
                </Link>{" "}
                /{" "}
                <Link
                  href="SaarinenVille_kandi.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  locale={false}
                  className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit lg:text-lg"
                >
                  PDF
                </Link>
                )
              </p>
              <p style={{ marginTop: "0px" }}>
                <span className="font-bold">Major</span>: Power Electronics and
                Electromechanics
              </p>
              <p style={{ marginTop: "0px" }}>
                <span className="font-bold">Minor</span>: Software Engineering
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
              <p>
                Summer job (three summers) as all-around worker in Raisio
                Puuilo.
              </p>
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
