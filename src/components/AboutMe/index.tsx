import "./style.css";

import backgroundPattern from "../../assets/images/background-pattern.jpg";

export const AboutMe = () => {
  return (
    <div id="aboutme" className="AboutMeContainer">
      <div>
        <h2>Sobre mim</h2>
        <p>
          Me chamo <strong>Thayron Graco</strong>. Desde os meus 15 anos já
          demonstrava paixão por Desenvolvimento Web quando ficava observando
          códigos de páginas para entender como criar coisas parecidas. Assim
          tive meu primeiro contato com <strong>HTML</strong> e{" "}
          <strong>CSS</strong>. Atualmente tenho 22 anos e moro na cidade de
          João Pessoa, na Paraíba e em 2022 me formei no curso de{" "}
          <strong>Ciências da Computação</strong> pela FPB - Faculdade
          Internacional da Paraíba.
        </p>
        <p>
          Também em 2022 iniciei meus estudos em <strong>ReactJS</strong> e me
          apaixonei por essa tecnologia. Esse portfolio foi desenvolvido
          utilizando o próprio React.
        </p>
        <p>
          Estou em busca da minha primeira oportunidade como Desenvolvedor
          Frontend <strong>Junior</strong> para ingressar no mercado de trabalho
          na área. Dê uma olhada em meus projetos!
        </p>

        <div className="buttonArea">
          <a href="#projects">Ver projetos</a>
        </div>
      </div>
    </div>
  );
};
