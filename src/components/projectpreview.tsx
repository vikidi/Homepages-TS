import { ProjectPreviewProps } from "@/types";
import Image from "next/image";

export default function ProjectPreview(props: ProjectPreviewProps) {
  return (
    <div className="px-16 py-10">
      <a href={props.url}>
        <div className="flex flex-col rounded-lg border-[1px] border-green-300/70 text-zinc-300">
          <div className="relative h-[300px] w-[600px] overflow-hidden">
            <Image
              alt="Homepage project"
              src={props.image}
              fill={true}
              placeholder="blur"
              className="rounded-t-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h2 className="p-2 text-xl font-bold">{props.name}</h2>
          <div
            className="h-[1px] w-4/5 bg-white/20"
            style={{ alignSelf: "center" }}
          />
          <h5 className="text-md p-2 px-5 text-left">{props.desc}</h5>

          <div
            className="h-[1px] w-4/5 bg-white/20"
            style={{ alignSelf: "center" }}
          />
          <div className="text-md flex justify-evenly p-2 px-5">
            {props.techStack.map((tech) => (
              <h5 key={tech}>{tech}</h5>
            ))}
          </div>
          <a
            href={props.sourceUrl}
            target="_blank"
            className="pb-2 text-sm text-blue-600 underline decoration-transparent transition duration-300 ease-in-out visited:text-purple-600 hover:text-blue-800 hover:decoration-inherit"
          >
            {props.sourceUrl}
          </a>
        </div>
      </a>
    </div>
  );
}
