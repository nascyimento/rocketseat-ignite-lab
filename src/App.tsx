import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
}

function App() {
  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY);
  return (
    <>
      {data?.lessons.map((lesson) => (
        <h1 key={lesson.id}>{lesson.title}</h1>
      ))}
    </>
  );
}

export default App;
