import { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

function EventPage() {
  const { slug } = useParams<{ slug: string }>();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      hasButton={true}
      />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <Navigate to={"/aulas/abertura"} />
        )}
        <Sidebar 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        />
      </main>
    </div>
  );
}

export default EventPage;