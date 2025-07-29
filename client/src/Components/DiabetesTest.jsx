import React, { useState } from 'react';

const DiabetesTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 0,
      text: "Ваш пол?",
      options: [
        { text: "Мужской", value: 0 },
        { text: "Женский", value: 1 }
      ]
    },
    {
      id: 1,
      text: "Ваш возраст?",
      options: [
        { text: "Меньше 40 лет", value: 0 },
        { text: "40-49 лет", value: 2 },
        { text: "50-59 лет", value: 3 },
        { text: "Больше 60 лет", value: 4 }
      ]
    },
    {
      id: 2,
      text: "Ваш вес?",
      options: [
        { text: "Меньше 65 кг", value: 0 },
        { text: "До 100 кг", value: 2 },
        { text: "Более 100 кг", value: 3 }
      ]
    },
    {
      id: 3,
      text: "У вас были случаи инфаркта или инсульта?",
      options: [
        { text: "Нет", value: 0 },
        { text: "Да", value: 3 }
      ]
    },
    {
      id: 4,
      text: "Вы ежедневно занимаетесь физическими упражнениями?",
      options: [
        { text: "Да", value: 0 },
        { text: "Нет", value: 3 }
      ]
    },
    {
      id: 5,
      text: "Есть ли у вас ребёнок с весом при рождении более 4 кг?",
      options: [
        { text: "Нет", value: 0 },
        { text: "Да", value: 3 }
      ]
    },
    {
      id: 6,
      text: "Были ли у вас случаи высокого уровня сахара в крови?",
      options: [
        { text: "Нет", value: 0 },
        { text: "Да", value: 5 }
      ]
    },
    {
      id: 7,
      text: "Ваше артериальное давление?",
      options: [
        { text: "Ниже 130/80 мм рт. ст.", value: 0 },
        { text: "Выше 130/80 мм рт. ст.", value: 3 }
      ]
    },
    {
      id: 8,
      text: "Есть ли среди ваших родственников больные сахарным диабетом?",
      options: [
        { text: "Нет", value: 0 },
        { text: "Да, но дальние родственники", value: 2 },
        { text: "Да, близкие родственники", value: 5 }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
    setScore(totalScore);
    setShowResult(true);
  };

  const getAdvice = (score) => {
    if (score < 7) {
      return {
        level: "Низкий риск",
        color: "text-green-700",
        advice: "У Вас нет риска развития диабета. Вам нужно вести здоровый образ жизни: правильно питаться, регулярно заниматься физическими упражнениями или пешими прогулками (по 30 минут каждый день), не курить и не злоупотреблять алкоголь."
      };
    } else if (score <= 11) {
      return {
        level: "Умеренный риск",
        color: "text-yellow-700",
        advice: "У вас небольшой риск развития диабета. Регулярно проверяйте уровень сахара в крови, занимайтесь физическими упражнениями и исключите вредные продукты из рациона."
      };
    } else if (score <= 14) {
      return {
        level: "Средний риск",
        color: "text-orange-700",
        advice: "Если входите в эту группу риска, Вам необходимо обратиться к эндокринологу в Эндокринологический диспансер для полного обследования и получить нужные рекомендации. Контролируйте свой сахар в крови каждые 3 месяца и ведите здоровый образ жизни."
      };
    } else if (score <= 20) {
      return {
        level: "Высокий риск",
        color: "text-red-700",
        advice: "СИТУАЦИЯ СЕРЬЁЗНАЯ! Вы входите в группу высокого риска развития диабета в течении 10 лет. Вам необходимо срочно не откладывая обратиться в эндокринологический диспансер для прохождения полного обследования на диабет. Каждый 1 месяц контролируйте свой сахар в крови натощак и через 2 часа после еды."
      };
    } else {
      return {
        level: "Критический риск",
        color: "text-red-900",
        advice: "У вас скорее всего уже диагностирован 2 тип сахарного диабета! Вам нужно срочно обратиться к эндокринологу в эндокринологический диспансер, где Вы должны пройти полное обследование и получить амбулаторное или стационарное лечение. Пройти осмотр в кабинетах \"Диабет глаза\" и \"Диабетическая стопа\"."
      };
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    const result = getAdvice(score);
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-[5%] lg:px-[6%] xl:px-[7%]">
        <div className="w-full max-w-none md:max-w-4xl mx-auto">
          <div className="bg-white border border-gray-200 p-8">
            <h1 className="text-2xl font-medium text-gray-900 mb-2">Результат теста</h1>
            <p className="text-gray-600 mb-8">Ваш общий балл: {score}</p>
            
            <div className="mb-8">
              <h2 className={`text-xl font-medium mb-4 ${result.color}`}>{result.level}</h2>
              <p className="text-gray-700 leading-relaxed">{result.advice}</p>
            </div>

            <button
              onClick={restartTest}
              className="border border-gray-900 text-gray-900 px-6 py-2 hover:bg-gray-900 hover:text-white transition-colors"
            >
              Пройти тест заново
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id] !== undefined;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-[5%] lg:px-[6%] xl:px-[7%]">
      <div className="w-full max-w-none md:max-w-4xl mx-auto">
        <div className="bg-white border border-gray-200 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-medium text-gray-900 mb-4">Проверь себя на диабет</h1>
            <div className="flex justify-between text-sm text-gray-500 mb-2">
              <span>Вопрос {currentQuestion + 1} из {questions.length}</span>
            </div>
            <div className="w-full bg-gray-200 h-1">
              <div 
                className="bg-gray-900 h-1 transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl text-gray-900 mb-6">{currentQ.text}</h2>
            
            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <label
                  key={index}
                  className={`block p-4 border cursor-pointer transition-colors ${
                    answers[currentQ.id] === option.value
                      ? 'border-gray-900 bg-gray-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQ.id}`}
                    value={option.value}
                    checked={answers[currentQ.id] === option.value}
                    onChange={() => handleAnswer(currentQ.id, option.value)}
                    className="sr-only"
                  />
                  <span className="text-gray-700">{option.text}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={nextQuestion}
            disabled={!isAnswered}
            className={`px-6 py-2 transition-colors ${
              isAnswered
                ? 'bg-gray-900 text-white hover:bg-gray-800'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion === questions.length - 1 ? 'Получить результат' : 'Далее'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiabetesTest;