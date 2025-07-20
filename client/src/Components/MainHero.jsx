import React from 'react';

const DiabetesHeroSection = () => {
    return (
        <div>
            <div className="relative h-[590px] w-full overflow-hidden rounded-t-lg md:h-[657px]">
                <img
                    alt=""
                    className="absolute left-0 top-0 size-full object-cover"
                    style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent' }}
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                />

                <a
                    href="#"
                    className="absolute right-8 top-8 bg-[#26686E] z-30 inline-flex items-center overflow-visible rounded-lg px-4 py-2 text-lg font-bold text-white duration-200 ease-in-out hover:bg-green-700 lg:hidden"
                >
                    <span className="me-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-1 0 24 15">
                            <path
                                fill="white"
                                stroke="#26686E"
                                strokeWidth="2"
                                fillRule="evenodd"
                                d="M10.991 18c-.04 0-.497-.29-1.016-.643l-1.73-1.18c-.433-.297-1.12-.775-1.528-1.063a71.665 71.665 0 0 1-1.402-1.02c-.364-.274-.89-.688-1.168-.919a20.587 20.587 0 0 1-1.134-1.048 15.216 15.216 0 0 1-.94-1.024 14.42 14.42 0 0 1-.566-.781c-.14-.212-.37-.606-.51-.876-.141-.27-.344-.711-.45-.981a9.062 9.062 0 0 1-.29-.856 11.377 11.377 0 0 1-.166-.794A6.533 6.533 0 0 1 .02 5.703c0-.508.02-.787.074-1.076A6.77 6.77 0 0 1 .3 3.846c.074-.215.22-.555.326-.756.105-.202.292-.507.415-.68.124-.172.356-.447.517-.611.16-.164.45-.417.642-.562.193-.145.574-.377.846-.517C3.32.58 3.75.398 4 .314A7.1 7.1 0 0 1 4.885.09C5.18.04 5.515.02 5.975.02c.484 0 .77.02 1.053.073.214.04.548.123.74.184.194.061.515.191.716.289.2.098.524.287.72.42.195.134.522.41.727.615.243.243.467.519.65.8.155.237.313.473.354.525.073.095.073.095.236-.185a7.3 7.3 0 0 1 .39-.583 5.914 5.914 0 0 1 1.212-1.17c.16-.108.456-.28.656-.38.2-.101.543-.244.763-.318a7.16 7.16 0 0 1 .882-.216c.406-.07.583-.08 1.124-.062a5.72 5.72 0 0 1 1.125.123c.265.056.65.165.857.241.206.077.56.236.789.354.228.119.598.353.82.52.224.169.538.446.698.617.16.17.4.471.535.668.135.197.321.52.414.717.094.198.222.518.286.711.064.193.148.544.187.78.046.277.072.629.072.996 0 .419-.024.703-.091 1.089a9.55 9.55 0 0 1-.202.892 11.11 11.11 0 0 1-.274.778c-.09.225-.277.631-.414.904-.138.273-.397.716-.576.984-.178.269-.468.664-.645.879-.176.214-.55.619-.831.932-.279.233-.874.701-1.324 1.04-.45.338-1.194.878-1.655 1.2-.46.322-1.524 1.054-2.363 1.625-.84.572-1.558 1.04-1.598 1.04Z"
                            />
                        </svg>
                    </span>
                    Пожертвовать
                </a>

                <div className="relative z-20 flex size-full flex-col items-start justify-end p-4 md:p-12 xl:w-1/2">
                    <h2 className="text-4xl text-white md:text-5xl lg:text-6xl font-bold">
                        Разберитесь в диабете
                    </h2>
                    <a
                        className="my-4 inline-flex w-full cursor-pointer items-center justify-center rounded-lg bg-[#142C3E] px-8 py-2 text-lg font-bold text-white no-underline duration-200 ease-in-out hover:bg-blue-800 md:mb-0 md:mt-6 md:w-auto"
                        href="#"
                    >
                        Узнайте Больше о диабете
                    </a>
                </div>
            </div>

            <div className="w-full bg-[#FAFAFA] h-[157.59px] px-[8.066%] flex items-center justify-between max-[1319px]:px-[2%] max-[1319px]:pr-[4%] max-[950px]:px-0 max-[950px]:pr-[5%] max-[768px]:flex-col max-[768px]:h-[616px] max-[768px]:bg-white max-[768px]:w-full max-[768px]:px-0 max-[768px]:py-5">
                <p className="text-[#142D3F] text-[24px] font-semibold w-[367px] text-center max-[400px]:w-full">
                    Учитесь, живите и процветайте.
                    <br />
                    <span className="text-[16px] font-medium">В чем ваш интерес?</span>
                </p>

                <a
                    href="#"
                    className="text-[18px] font-medium w-[85.98px] hover:text-[#24636a] duration-200 text-center max-[768px]:w-full max-[768px]:h-[80px] max-[768px]:bg-[#fafafa] max-[768px]:flex max-[768px]:justify-start max-[768px]:items-center max-[768px]:px-5 max-[768px]:font-[700] text-gray-700"
                >
                    Впервые поставлен диагноз
                </a>

                <a
                    href="#"
                    className="text-[18px] font-medium w-[85.98px] hover:text-[#24636a] duration-200 text-center max-[768px]:w-full max-[768px]:h-[80px] max-[768px]:bg-[#fafafa] max-[768px]:flex max-[768px]:justify-start max-[768px]:items-center max-[768px]:px-5 max-[768px]:font-[700] text-gray-700"
                >
                    Сахарный диабет 1 типа
                </a>

                <a
                    href="#"
                    className="text-[18px] font-medium w-[85.98px] hover:text-[#24636a] duration-200 text-center max-[768px]:w-full max-[768px]:h-[80px] max-[768px]:bg-[#fafafa] max-[768px]:flex max-[768px]:justify-start max-[768px]:items-center max-[768px]:px-5 max-[768px]:font-[700] text-gray-700"
                >
                    Сахарный диабет 2 типа
                </a>

                <a
                    href="#"
                    className="text-[18px] font-medium w-[85.98px] hover:text-[#24636a] duration-200 text-center max-[768px]:w-full max-[768px]:h-[80px] max-[768px]:bg-[#fafafa] max-[768px]:flex max-[768px]:justify-start max-[768px]:items-center max-[768px]:px-5 max-[768px]:font-[700] text-gray-700"
                >
                    Преддиабет
                </a>

                <a
                    href="#"
                    className="text-[18px] font-medium w-[85.98px] hover:text-[#24636a] duration-200 text-center max-[768px]:w-full max-[768px]:h-[80px] max-[768px]:bg-[#fafafa] max-[768px]:flex max-[768px]:justify-start max-[768px]:items-center max-[768px]:px-5 max-[768px]:font-[700] text-gray-700"
                >
                    Гестационный Диабет
                </a>
            </div>
        </div>
    );
};

export default DiabetesHeroSection;