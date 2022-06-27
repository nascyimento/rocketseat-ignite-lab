import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  const navigate = useNavigate();

  const handleSubscribe = async (event: FormEvent) => {
    event.preventDefault();
    await createSubscriber({ variables: { name, email } });
    navigate("/aulas");
  };

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center px-6">
      <div className="max-w-[1100px] w-full flex justify-between items-start mt-20 ">
        <div className="max-w-[640px]">
          <Logo />
          <h1 className="block text-[2.5rem] mt-8 leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">ReactJs</strong>
          </h1>
          <p className="text-gray-200 mt-4 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded-lg">
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
      />
    </div>
  );
}

export default Subscribe;
