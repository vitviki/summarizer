import { logo } from "../assets/";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="main logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          onClick={() => window.open("https://www.github.com")}
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize articles with <br />
        <span className="orange_gradient max-md:hidden">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </div>
  );
};

export default Hero;
