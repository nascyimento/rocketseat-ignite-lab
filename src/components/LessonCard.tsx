import { format, isPast } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { CheckCircle, Lock } from "phosphor-react";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: "live" | "class";
  active: boolean;
}

function LessonCard(props: LessonProps) {
  const avaibleDateFormatted = format(
    props.availableAt,
    "EEE' • 'd' de 'MMMM' de 'YYY' • 'k'h'mm",
    { locale: ptBR }
  );

  return (
    <Link to={`/aulas/${props.slug}`} className="group relative">
      <span className="text-gray-300 capitalize">{avaibleDateFormatted}</span>
      {props.active && <div className="bg-green-500 w-5 h-5 absolute top-[55%] -translate-x-[45%] rotate-45 border-l border-b rounded border-gray-500 group-hover:border-green-300 "></div>}
      <div
        className={classNames(
          "border rounded border-gray-500 p-4 mt-2 z-10 group-hover:border-green-300",
          {
            "bg-green-500": props.active,
          }
          )}
          >
        <header className="flex items-center justify-between">
          {isPast(props.availableAt) ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-2",
                {
                  "text-white": props.active,
                }
              )}
            >
              <CheckCircle
                size={22}
                className={classNames({
                  "text-green-300": !props.active,
                  "text-white": props.active,
                })}
              />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-sm text-blue-500 font-medium flex items-center gap-2">
              <Lock size={22} className="text-orange-500" />
              Em Breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded border px-2 pt-[4px] py-[2px] text-white font-bold",
              {
                "border-white": props.active,
                "border-green-300": !props.active,
              }
            )}
          >
            {props.lessonType == "live" ? "AO VIVO" : "AULA PRÁTICA"}
          </span>
        </header>
        <p
          className={classNames("mt-4", {
            "text-white": props.active,
            "text-gray-200": !props.active,
          })}
        >
          <strong>{props.title}</strong>
        </p>
      </div>
    </Link>
  );
}

export default LessonCard;
