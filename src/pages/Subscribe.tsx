import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/IgniteLabLogo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import Footer from "../components/Footer";

function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("registred")) {
      navigate("/aulas");
    }
  }, []);

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();
    await createSubscriber({ variables: { name, email } });
    localStorage.setItem("registred", "true");
    navigate("/aulas");
  };

  return (
    <div>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex mobile:flex-col px-6 items-center">
        <div className="max-w-[1100px] w-full mobile:flex mobile:flex-col laptop:flex-row tablet:mt-20 justify-between items-center">
          <div className="max-w-[635px] flex flex-col mobile:items-center laptop:items-start gap-8 mobile:my-12">
            <Logo width={237} />
            <h1 className="block mobile:text-3xl tablet:text-5xl mobile:text-center laptop:text-left text-[2.5rem] leading-tight">
              Construa uma{" "}
              <strong className="text-blue-500">aplicação completa</strong>, do
              zero, com <strong className="text-blue-500">ReactJs</strong>
            </h1>
            <p className="text-gray-200  leading-relaxed mobile:text-center laptop:text-left">
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
          <div className="mobile:w-screen tablet:w-fit p-8 bg-gray-700 border border-gray-500 rounded-lg">
            <strong className="text-2xl text-gray-100 mb-6 block">
              Inscreva-se gratuitamente
            </strong>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col items-center gap-2 w-full"
            >
              <input
                type="text"
                placeholder="Seu nome completo"
                className="text-sm text-gray-300 bg-gray-900 py-4 px-5 w-full rounded border border-gray-500"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="email"
                placeholder="Digite seu email"
                className="text-sm text-gray-300 bg-gray-900 py-4 px-5 w-full rounded border border-gray-500"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <button
                type="submit"
                disabled={loading}
                className="mt-4 py-4 font-bold bg-green-500 text-sm text-gray-100 uppercase w-full rounded hover:bg-green-700 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
        <img
          src="/src/assets/images/cold-mockup.png"
          className="mt-10 max-w-[1100px] w-full"
          alt=""
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Subscribe;
