import Head from "next/head";
import homepagePic from "public/homepage.png";
import NmksvPic from "public/nmksv-page.png";
import EsiskuPic from "public/esisku-page.png";
import OpenhabPic from "public/openhab.png";
import ClimateMeterPic from "public/climatemeter.jpg";
import ProjectPreview from "@/components/projectPreview";

export default function Projects() {
  return (
    <>
      <Head>
        <title>{`Projects : <>{ V.S }</>`}</title>
      </Head>
      <div className="container flex h-full w-full flex-wrap justify-center p-4 text-center">
        <div className="md:basis-1/2 xl:basis-1/3">
          <ProjectPreview
            name="Homepages"
            secondaryTitle="My own portfolio"
            image={homepagePic}
            techStack={[
              "Typescript",
              "React",
              "NextJS",
              "TailwindCSS",
              "Vercel",
            ]}
            desc={[
              "This website you are currently on! Aim was to learn new technologies (Typescript, NextJS, TailwindCSS) and finally create some sort of a portfolio.",
              "I have used CSR with React before (CRA), so I wanted to learn and utilize SSR and SSG via NextJS. Popular TailwindCSS was default CSS framework for NextJS. Typescript was long due to be learned, since JS and static typing are both to my liking.",
              "NextJS is developed by Vercel, so it was a no-brainer to host the site on their service. They have also great deployment and preview integration with Github which is nice.",
            ]}
            sourceUrl="https://github.com/vikidi/Homepages-TS"
            sourceUrlShort="Github"
            deploymentUrl="https://villesaarinen.me"
            deploymentUrlShort="villesaarinen.me"
          />
        </div>
        <div className="md:basis-1/2 xl:basis-1/3">
          <ProjectPreview
            name="NMKSV website"
            secondaryTitle="Website for student organization"
            image={NmksvPic}
            techStack={[
              "Javascript",
              "React",
              "NodeJS",
              "Express",
              "CouchDB",
              "Material UI",
              "Jest",
            ]}
            desc={[
              "This project was done within the organization with a group of people. It was created to provide information about the organization but to also provide means for different actions, such as membership selection.",
              "Originally this was supposed to be small scale app with minimal data handling, so we chose React for UI and CouchDB for DB. React allowed for fast development via CRA + templates and CouchDB was supposed to contain API within itself. NoSQL also suited better for our small data model.",
              "Eventually project scope blew up and we created separate API using NodeJS and Express. The site is hosted on Digital Ocean Droplet.",
            ]}
            sourceUrl="https://bitbucket.org/kivekset/nmksv/src/master/"
            sourceUrlShort="Bitbucket"
            deploymentUrl="https://nmksv.org"
            deploymentUrlShort="nmksv.org"
          />
        </div>
        <div className="md:basis-1/2 xl:basis-1/3">
          <ProjectPreview
            name="EsIsku website"
            secondaryTitle="Website for volleyball organization"
            image={EsiskuPic}
            techStack={["Wordpress", "Hostinger"]}
            desc={[
              "This project was designed within the organization with few people and then created by me. It was created to provide information about the organization, it's teams, events and other news.",
              "The website was created using Wordpress with plugins, hosted on Hostinger service. Graphical interface with WYSIWYG editors provided a low-code solution which can easily be maintained by other, not so technical, people.",
            ]}
            deploymentUrl="https://espoonlahdenisku.fi"
            deploymentUrlShort="espoonlahdenisku.fi"
          />
        </div>
        <div className="md:basis-1/2 xl:basis-1/3">
          <ProjectPreview
            name="Home Automation"
            secondaryTitle="Home automation infrastructure"
            image={OpenhabPic}
            techStack={[
              "Raspberry PI",
              "Openhabian",
              "Openhab",
              "Google Assistant",
            ]}
            desc={[
              "Home automation system is a practical project, that is in every day use. I wanted to have it self hosted but with easy-to-use template and good customization.",
              "Openhab allows for wide integration with different products. My current setup consists of smart lights, plugs and custom projects, such as the Climate Meter.",
              "Big part of home automation is the automation itself. Google assistant integration allows voice control of components. Best automated tasks that I've created are balcony light that go on/off depending on astral events and coffee maker that goes on when my phone's alarm rings.",
            ]}
          />
        </div>
        <div className="md:basis-1/2 xl:basis-1/3">
          <ProjectPreview
            name="Climate Meter"
            secondaryTitle="Room temperature & humidity measuring"
            image={ClimateMeterPic}
            techStack={[
              "NodeMCU",
              "EPS8266",
              "DHT11",
              "MQTT",
              "Mosquitto",
              "C++",
              "Arduino IDE",
            ]}
            desc={[
              "I had NodeMCU board and DHT11 module lying around at home so I decided to create this meter to be connected to my home automation system. This project itself has no automation in it.",
              "This meter measures temperature and humidity using given interval and sends the data with date time and status to MQTT queues. The Mosquitto MQTT broker is hosted on the home automation RPi and it connects to the Openhab system providing sent data to it.",
            ]}
            sourceUrl="https://github.com/vikidi/ArduinoClimateMeter"
            sourceUrlShort="Github"
          />
        </div>
      </div>
    </>
  );
}
