import classNames from "classnames";
import { useParams } from "react-router-dom";
import { useGetLessonsQuery } from "../graphql/generated";
import LessonCard from "./LessonCard";

interface sidebarProps {
  isOpen: boolean;
  setIsOpen: Function;
}

function Sidebar(props: sidebarProps) {
  const { slug } = useParams<{ slug: string }>();
  const { data } = useGetLessonsQuery();

  if (props.isOpen) {
    document.body.classList.add('overflow-y-hidden');
  } else {
    document.body.classList.remove('overflow-y-hidden');
  }

  return (
    <aside
      className={classNames(
        "bg-gray-700 p-6 border-l border-gray-600 desktop:block ",
        {
          "hidden w-[348px]": !props.isOpen,
          "fixed z-[1000] w-screen block overflow-y-auto h-screen pb-52": props.isOpen,
        }
      )}
    >
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block text-center">
        Cronograma das aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <LessonCard
            active={lesson.slug === slug}
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
            lessonType={lesson.lessonType}
            key={lesson.id}
          />
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
