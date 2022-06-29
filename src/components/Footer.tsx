import RocketseatLogo from "./RocketseatLogo";
function Footer() {
  return (
    <footer className="bg-gray-900 flex justify-center">
      <div className="max-w-[1100px] w-full">
        <div className=" flex flex-col items-center gap-6 py-4 border-t border-gray-500 text-gray-300 text-sm mx-4 tablet:mx-8 large-tablet:flex-row large-tablet:justify-between">
          <div className="flex flex-col items-center gap-6 large-tablet:flex-row">
            <RocketseatLogo />
            <p className="large-tablet:self">
              Rocketseat - Todos os direitos reservados
            </p>
          </div>
          <a href="#" className="text-gray-300">
            Políticas de privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
