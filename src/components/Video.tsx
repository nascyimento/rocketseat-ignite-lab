import "@vime/core/themes/default.css";
import { DefaultUi, Player, Youtube } from "@vime/react";
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from "phosphor-react";

import { useGetLessonBySlugQuery } from "../graphql/generated";
import Footer from "./Footer";
import "./styles.css";

interface videoProps {
  lessonSlug: string;
}

function Video(props: videoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (!data || !data.lesson) {
    return (
      <div className="flex-1 flex justify-center items-center">
        <div id="loading"></div>
      </div>
    );
  }
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full max-h-[50vh] w-full max-w-[1100px] aspect-video">
          <Player>
            <Youtube
              videoId={data?.lesson.videoId}
              key={data?.lesson.videoId}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div className="mobile:p-4 tablet:p-8 mx-auto max-w-[1100px]">
        <div className="flex mobile:gap-8 laptop:gap-16 mobile:flex-col tablet:flex-row">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">{data?.lesson.title}</h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
              <div
                className="flex gap-4 items-center mt-6 w-fit"
                title={data.lesson.teacher.name}
              >
                <img
                  src={data.lesson.teacher.avatarURL}
                  alt={data.lesson.teacher.name}
                  className="w-16 border-2 rounded-full border-blue-500"
                />
                <div className="flex flex-col">
                  <strong className="text-2xl">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-gray-200 text-sm">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 text-center font-bold rounded uppercase flex gap-2 items-center hover:bg-green-700 transition-colors"
            >
              <DiscordLogo />
              Comunidade do discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 text-center font-bold rounded uppercase flex gap-2 items-center hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="flex flex-col laptop:flex-row gap-8 mobile:my-8 laptop:mt-16">
          <a
            href="#"
            className="shadow-lg shadow-black bg-gray-700 rounded overflow-hidden flex items-stretch mobile:gap-3 tablet:gap-6 hover:bg-gray-600 transition-colors w-fit"
          >
            <div className="bg-green-700 flex items-center px-4">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed mobile:w-25 tablet:w-auto">
              <strong className="text-xl ">Material complementar</strong>
              <p className="text-xs text-gray-200 leading-relaxed">
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className="flex items-center pr-5 text-blue-500">
              <CaretRight size={22} />
            </div>
          </a>

          <a
            href="#"
            className="shadow-lg shadow-black flex items-stretch mobile:gap-3 tablet:gap-6 bg-gray-700 rounded overflow-hidden hover:bg-gray-600 transition-colors w-fit"
          >
            <div className="bg-green-700 flex items-center px-4">
              <Image size={40} />
            </div>
            <div className="flex flex-col py-6 items-start justify-center tablet:w-auto">
              <strong className="text-lg ">Wallpapers exclusivos</strong>
              <p className="text-xs text-gray-200 leading-relaxed">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className="flex items-center mobile:pr-3 tablet:pr-5 text-blue-500">
              <CaretRight size={22} />
            </div>
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Video;
