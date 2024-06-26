import { ProjectPreviewProps } from "@/types";
import Image from "next/image";

export default function ProjectPreview(props: Readonly<ProjectPreviewProps>) {
  return (
    <div className="p-4 md:px-8 md:py-6 2xl:px-12">
      <div className="flex flex-col rounded-lg border-[1px] border-green-300/70 text-zinc-300">
        <div className="relative h-[150px] w-full overflow-hidden max-[380px]:h-[125px] max-[320px]:h-[100px] lg:h-[175px] 2xl:h-[200px]">
          <Image
            alt="Image of the project"
            src={props.image}
            placeholder="blur"
            className="rounded-t-lg"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <h2 className="pt-2 font-overpass text-lg font-bold sm:text-xl md:text-2xl">
          {props.name}
        </h2>
        <h3 className="mx-6 pb-2 text-sm">{props.secondaryTitle}</h3>
        <div
          className="h-[1px] w-4/5 bg-white/20"
          style={{ alignSelf: "center" }}
        />
        <div className="py-2">
          {props.desc.map((i: string) => (
            <h5 key={i} className="md:text-md p-1 px-5 text-left text-sm">
              {i}
            </h5>
          ))}
          {props.deploymentUrl ? (
            <a
              href={props.deploymentUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="pb-2 text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit"
            >
              {props.deploymentUrlShort}
            </a>
          ) : null}
        </div>
        <div
          className="h-[1px] w-4/5 bg-white/20"
          style={{ alignSelf: "center" }}
        />
        <div className="md:text-md flex flex-wrap justify-evenly p-2 px-10 text-sm">
          {props.techStack.map((tech: string) => (
            <h5 key={tech} className="px-4">
              {tech}
            </h5>
          ))}
        </div>
        <div className="pb-2">
          {props.sourceUrls && props.sourceUrlShorts
            ? props.sourceUrls.map((url: string, i: number) => {
                return (
                  <div key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit"
                    >
                      {props.sourceUrlShorts?.at(i) ?? "Source"}
                    </a>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}
