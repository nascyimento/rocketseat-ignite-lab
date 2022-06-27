import { useParams } from "react-router-dom";
import { useGetLessonsQuery } from '../graphql/generated';
import LessonCard from "./LessonCard";

function Sidebar() {
  const { slug } = useParams<{slug: string}>();

  const { data } = useGetLessonsQuery();

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-4 mb-6 border-b border-gray-500 block text-center">
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
