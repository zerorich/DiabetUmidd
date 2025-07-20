import React from 'react';

const Footer = () => {
  return (
    <footer className="footer flex flex-col justify-between bg-[#142C3E] w-full h-[400px] px-[1%] max-[768px]:h-[620px]">
      <div className="w-full flex justify-end">
        <a
          href="/error"
          target="_blank"
          rel="noreferrer"
          className="ms-auto inline-flex items-center hover:bg-[#65b1a0] duration-200 rounded-b-lg bg-[#26686E] px-4 pb-3 pt-2 text-lg font-bold text-white ease-in-out"
        >
          <span className="me-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 0 24 15">
              <path
                fill="white"
                stroke="#26686E"
                strokeWidth="2"
                fillRule="evenodd"
                d="M10.991 18c-.04 0-.497-.29-1.016-.643l-1.73-1.18c-.433-.297-1.12-.775-1.528-1.063a71.665 71.665 0 0 1-1.402-1.02c-.364-.274-.89-.688-1.168-.919a20.587 20.587 0 0 1-1.134-1.048 15.216 15.216 0 0 1-.94-1.024 14.42 14.42 0 0 1-.566-.781c-.14-.212-.37-.606-.51-.876-.141-.27-.344-.711-.45-.981a9.062 9.062 0 0 1-.29-.856 11.377 11.377 0 0 1-.166-.794A6.533 6.533 0 0 1 .02 5.703c0-.508.02-.787.074-1.076A6.77 6.77 0 0 1 .3 3.846c.074-.215.22-.555.326-.756.105-.202.292-.507.415-.68.124-.172.356-.447.517-.611.16-.164.45-.417.642-.562.193-.145.574-.377.846-.517C3.32.58 3.75.398 4 .314A7.1 7.1 0 0 1 4.885.09C5.18.04 5.515.02 5.975.02c.484 0 .77.02 1.053.073.214.04.548.123.74.184.194.061.515.191.716.289.2.098.524.287.72.42.195.134.522.41.727.615.243.243.467.519.65.8.155.237.313.473.354.525.073.095.073.095.236-.185a7.3 7.3 0 0 1 .39-.583 5.914 5.914 0 0 1 1.212-1.17c.16-.108.456-.28.656-.38.2-.101.543-.244.763-.318a7.16 7.16 0 0 1 .882-.216c.406-.07.583-.08 1.124-.062a5.72 5.72 0 0 1 1.125.123c.265.056.65.165.857.241.206.077.56.236.789.354.228.119.598.353.82.52.224.169.538.446.698.617.16.17.4.471.535.668.135.197.321.52.414.717.094.198.222.518.286.711.064.193.148.544.187.78.046.277.072.629.072.996 0 .419-.024.703-.091 1.089a9.55 9.55 0 0 1-.202.892 11.11 11.11 0 0 1-.274.778c-.09.225-.277.631-.414.904-.138.273-.397.716-.576.984-.178.269-.468.664-.645.879-.176.214-.55.619-.831.932-.279.233-.874.701-1.324 1.04-.45.338-1.194.878-1.655 1.2-.46.322-1.524 1.054-2.363 1.625-.84.572-1.558 1.04-1.598 1.04Z"
              ></path>
            </svg>
          </span>
          Пожертвовать
        </a>
      </div>

      <div className="mx-auto w-full flex justify-between items-center h-full max-[768px]:flex-col-reverse max-[768px]:mt-[20px]">
        <div className="flex flex-col gap-2 w-1/2 h-full justify-center max-[768px]:w-full">
          <h2 className="text-[28px] font-medium text-white font-[roboto]">БООИиБСД DiabetUmid</h2>
          <p className="text-white text-[16px] font-semibold font-[roboto]">
            Узбекистан, Ташкент<br />
            Юнусабад 14, дом 22
          </p>
          <a
            href="mailto:diabetumid@gmail.com"
            className="text-white text-[16px] mt-2 font-semibold w-[260px] underline hover:text-[#65b1a0] font-[roboto]"
          >
            diabetumid@gmail.com
          </a>
          <div className="flex gap-2 mt-[60px] max-[768px]:mt-[30px]">
            <a
              href="https://www.instagram.com/diabetumid/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Читайте нас в Instagram"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="white"
                className="transition-colors hover:fill-[#65b1a0]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" clipRule="evenodd" d="M17.125 4.708H32.875C40.1226 4.708 46 10.5854 46 17.8329V33.5829C46 40.8305 40.1226 46.7078 32.875 46.7078H17.125C9.87738 46.7078 4 40.8305 4 33.5829V17.8329C4 10.5854 9.87738 4.708 17.125 4.708ZM32.8732 42.7703C37.9395 42.7703 42.0607 38.6491 42.0607 33.5829V17.8329C42.0607 12.7667 37.9395 8.64549 32.8732 8.64549H17.1232C12.057 8.64549 7.93572 12.7667 7.93572 17.8329V33.5829C7.93572 38.6491 12.057 42.7703 17.1232 42.7703H32.8732Z" />
                <path fillRule="evenodd" clipRule="evenodd" d="M14.5 25.708C14.5 19.9094 19.2014 15.208 25 15.208C30.7986 15.208 35.5 19.9094 35.5 25.708C35.5 31.5066 30.7986 36.2079 25 36.2079C19.2014 36.2079 14.5 31.5066 14.5 25.708ZM18.4378 25.7079C18.4378 29.3251 21.383 32.2703 25.0003 32.2703C28.6175 32.2703 31.5628 29.3251 31.5628 25.7079C31.5628 22.088 28.6175 19.1454 25.0003 19.1454C21.383 19.1454 18.4378 22.088 18.4378 25.7079Z" />
                <circle cx="36.2878" cy="14.4235" r="1.4" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/diabetumid/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Следите за нами на Facebook"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                fill="white"
                className="transition-colors hover:fill-[#65b1a0]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M30.2003 10.1032H34.2652V3.0235C33.564 2.92703 31.1521 2.70996 28.3432 2.70996C22.4823 2.70996 18.4675 6.39639 18.4675 13.1718V19.4074H12V27.322H18.4675V47.2365H26.397V27.3239H32.6029L33.5881 19.4093H26.3951V13.9566C26.397 11.6691 27.0129 10.1032 30.2003 10.1032Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-1/2 max-[768px]:w-full">
          <h2 className="text-[32px] font-bold text-white max-[768px]:text-[24px]">
            Новости, истории, рецепты и многое другое
          </h2>
          <p className="text-[18px] text-white font-[roboto]">
            Подпишитесь, чтобы получать нашу цифровую рассылку!
          </p>
          <form className="mt-8 flex flex-col md:flex-row">
            <input
              type="email"
              required
              placeholder="Введите свой адрес электронной почты*"
              className="flex w-full px-3 py-2 h-16 border-1 rounded-lg border-secondary bg-white text-lg font-bold text-black placeholder:font-normal md:rounded-e-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center bg-[#26696e] text-white px-8 py-4 h-16 mt-2 md:mt-0 rounded-lg md:rounded-s-none text-lg font-bold hover:bg-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-mail mr-2 size-6"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;