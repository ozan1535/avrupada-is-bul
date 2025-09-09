"use client";
import React, { useState, useEffect } from "react";
import { AlertCircle, CheckCircle, Calculator } from "lucide-react";

const ChancenKarteComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [points, setPoints] = useState(0);
  const [isEligible, setIsEligible] = useState(false);
  const [autoQualified, setAutoQualified] = useState(false);

  const questions = [
    {
      id: "qualification",
      title: "En az 2 yıl süren bir eğitiminiz veya diplomanız var mı?",
      type: "radio",
      options: [
        {
          value: "vocational",
          label: "Evet, akademik olmayan mesleki bir diplomam var.",
        },
        { value: "academic", label: "Evet, akademik bir diplomam var." },
        {
          value: "chamber",
          label:
            "Evet, Alman Dış Ticaret Odası’ndan alınmış uygun bir diplomam var.",
        },
        {
          value: "none",
          label: "Hayır, resmi bir diplomam yok.",
        },
      ],
      required: true,
    },
    {
      id: "recognition",
      title:
        "Diplomanızı Almanya’da mı aldınız yoksa Almanya’da (kısmen veya tamamen) tanınıyor mu?",
      subtitle:
        "Almanya’da alınan veya Almanya’da tamamen tanınan bir diplomaya sahipseniz, otomatik olarak Fırsat Kartı (Chancen Karte) almaya hak kazanırsınız.",
      type: "radio",
      options: [
        {
          value: "fully",
          label: "Evet, diplomam Almanya’da tamamen tanınıyor.",
        },
        {
          value: "germany",
          label: "Evet, akademik ya da mesleki diplomamı Almanya’da aldım.",
        },
        {
          value: "partial",
          label: "Evet, diplomam Almanya’da kısmen tanınıyor.",
        },
        {
          value: "not",
          label: "Hayır, diplomam henüz Almanya’da tanınmıyor.",
        },
      ],
      required: true,
      showIf: (answers) =>
        answers.qualification && answers.qualification !== "none",
    },
    {
      id: "basicLanguage",
      title: "Aşağıdaki dil becerilerinden hangilerine sahipsiniz?",
      type: "radio",
      options: [
        {
          value: "german_a1",
          label: "Almanca seviyem A1 veya üzeri.",
        },
        {
          value: "english_b2",
          label: "İngilizce seviyem B2 veya üzeri.",
        },
        {
          value: "both",
          label: "Almanca seviyem en az A1, İngilizce seviyem en az B1.",
        },
        {
          value: "neither",
          label: "Ne Almanca A1 seviyem var ne de İngilizce B2 seviyem.",
        },
      ],
      required: true,
      showIf: (answers) =>
        answers.recognition &&
        (answers.recognition === "partial" || answers.recognition === "not"),
    },
    {
      id: "germanLevel",
      title: "Şu anda ileri düzey Almanca bilginizi belgeleyebiliyor musunuz?",
      type: "radio",
      options: [
        {
          value: "b2_c1",
          label: "B2/C1 veya üzeri düzeyde Almanca sertifikam var.",
        },
        {
          value: "b1",
          label: "B1 düzeyinde Almanca sertifikam var.",
        },
        {
          value: "a2",
          label: "A2 düzeyinde Almanca sertifikam var.",
        },
        {
          value: "a1",
          label: "Sadece A1 düzeyinde Almanca sertifikam var.",
        },
        {
          value: "none",
          label: "Almanca dil seviyemi belgeleyemiyorum.",
        },
      ],
      required: true,
      showIf: (answers) =>
        answers.basicLanguage && answers.basicLanguage !== "neither",
    },
    {
      id: "englishLevel",
      title:
        "Şu anda ileri düzey İngilizce bilginizi belgeleyebiliyor musunuz?",
      type: "radio",
      options: [
        {
          value: "c1",
          label: "C1 veya üzeri düzeyde İngilizce sertifikam var.",
        },
        {
          value: "b1_b2",
          label: "B1/B2 düzeyinde İngilizce sertifikam var.",
        },
        {
          value: "a1_a2",
          label: "A1/A2 düzeyinde İngilizce sertifikam var.",
        },
        {
          value: "none",
          label: "İngilizce dil seviyemi belgeleyemiyorum.",
        },
      ],
      required: true,
      showIf: (answers) => answers.germanLevel,
    },
    {
      id: "age",
      title: "Kaç yaşındasınız?",
      type: "radio",
      options: [
        {
          value: "under_35",
          label: "18 – 34 yaş arası.",
        },
        { value: "35_39", label: "35 – 39 yaş arası." },
        { value: "40_plus", label: "40 yaş ve üzeri." },
      ],
      required: true,
      showIf: (answers) => answers.englishLevel,
    },
    {
      id: "hasExperience",
      title: "Akademik ya da mesleki diplomanızla ilgili iş tecrübeniz var mı?",
      type: "radio",
      options: [
        { value: "yes", label: "Evet." },
        { value: "no", label: "Hayır." },
      ],
      required: true,
      showIf: (answers) => answers.age,
    },
    {
      id: "experienceYears",
      title: "Bu meslekte kaç yıl deneyiminiz var?",
      type: "radio",
      options: [
        {
          value: "5_plus",
          label: "Son 7 yıl içinde en az 5 yıl iş deneyimim var.",
        },
        {
          value: "2_plus",
          label: "Son 5 yıl içinde en az 2 yıl iş deneyimim var.",
        },
        {
          value: "less_2",
          label: "2 yıldan az iş deneyimim var.",
        },
      ],
      required: true,
      showIf: (answers) => answers.hasExperience === "yes",
    },
    {
      id: "shortageOccupation",
      title:
        'Diplomanız bir "ihtiyaç duyulan meslek (shortage occupation)"^ alanında mı?',
      type: "radio",
      options: [
        {
          value: "yes",
          label: "Evet, diplomam ihtiyaç duyulan bir meslek alanında.",
        },
        {
          value: "no",
          label: "Hayır, diplomam ihtiyaç duyulan bir meslek alanında değil.",
        },
      ],
      required: true,
      showIf: (answers) =>
        answers.hasExperience === "no" || answers.experienceYears,
    },
    {
      id: "previousStay",
      title:
        "Son 5 yıl içinde Almanya’da yasal olarak kesintisiz en az 6 ay bulundunuz mu?",
      type: "radio",
      options: [
        {
          value: "yes",
          label: "Evet, Almanya’da en az 6 ay yaşadım.",
        },
        {
          value: "no",
          label:
            "Hayır, Almanya’da hiç yaşamadım veya 6 aydan daha kısa süre yaşadım.",
        },
      ],
      required: true,
      showIf: (answers) => answers.shortageOccupation,
    },
    {
      id: "hasPartner",
      title:
        "Fırsat Kartı ile Almanya’ya sizinle birlikte gelmek isteyen bir partneriniz var mı?",
      type: "radio",
      options: [
        {
          value: "yes",
          label: "Evet, partnerimle birlikte gelmek istiyorum.",
        },
        { value: "no", label: "Hayır, tek başıma geleceğim." },
      ],
      required: true,
      showIf: (answers) => answers.previousStay,
    },
    {
      id: "partnerQualified",
      title: "Partneriniz Fırsat Kartı için gerekli kriterleri karşılıyor mu?",
      type: "radio",
      options: [
        {
          value: "fully_recognized",
          label: "Evet, partnerimin diploması tamamen tanınıyor.",
        },
        {
          value: "6_points",
          label: "Evet, partnerim puan sisteminde en az 6 puan alabiliyor.",
        },
        { value: "unknown", label: "Henüz bilmiyoruz." },
        { value: "no", label: "Hayır, partnerim kriterleri karşılamıyor." },
      ],
      required: true,
      showIf: (answers) => answers.hasPartner === "yes",
    },
  ];

  const calculatePoints = (currentAnswers) => {
    let totalPoints = 0;
    let qualified = false;

    // Check for automatic qualification
    if (
      currentAnswers.recognition === "fully" ||
      currentAnswers.recognition === "germany"
    ) {
      qualified = true;
      setAutoQualified(true);
      return { points: 0, eligible: true };
    }

    // Check basic requirements
    if (currentAnswers.qualification === "none") {
      return { points: 0, eligible: false };
    }

    if (currentAnswers.basicLanguage === "neither") {
      return { points: 0, eligible: false };
    }

    // Calculate points for equivalence of qualification
    if (currentAnswers.recognition === "partial") {
      totalPoints += 4;
    }

    // Points for shortage occupation
    if (currentAnswers.shortageOccupation === "yes") {
      totalPoints += 1;
    }

    // Points for professional experience
    if (currentAnswers.experienceYears === "5_plus") {
      totalPoints += 3;
    } else if (currentAnswers.experienceYears === "2_plus") {
      totalPoints += 2;
    }

    // Points for German language skills
    if (currentAnswers.germanLevel === "b2_c1") {
      totalPoints += 3;
    } else if (currentAnswers.germanLevel === "b1") {
      totalPoints += 2;
    } else if (currentAnswers.germanLevel === "a2") {
      totalPoints += 1;
    }

    // Points for English language skills
    if (currentAnswers.englishLevel === "c1") {
      totalPoints += 1;
    }

    // Points for age
    if (currentAnswers.age === "under_35") {
      totalPoints += 2;
    } else if (currentAnswers.age === "35_39") {
      totalPoints += 1;
    }

    // Points for previous stays
    if (currentAnswers.previousStay === "yes") {
      totalPoints += 1;
    }

    // Points for partner
    if (
      currentAnswers.partnerQualified === "fully_recognized" ||
      currentAnswers.partnerQualified === "6_points"
    ) {
      totalPoints += 1;
    }

    qualified = totalPoints >= 6;
    setAutoQualified(false);
    return { points: totalPoints, eligible: qualified };
  };

  const handleAnswer = (questionId, value) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    const result = calculatePoints(newAnswers);
    setPoints(result.points);
    setIsEligible(result.eligible);
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetCalculator = () => {
    setCurrentStep(0);
    setAnswers({});
    setPoints(0);
    setIsEligible(false);
    setAutoQualified(false);
  };

  const currentQuestion = questions[currentStep];

  const shouldShowQuestion =
    !currentQuestion?.showIf || currentQuestion.showIf(answers);

  // Skip questions that shouldn't be shown
  useEffect(() => {
    if (
      !isLastQuestion &&
      !shouldShowQuestion &&
      currentStep < questions.length - 1
    ) {
      setCurrentStep(currentStep + 1);
    }
  }, [shouldShowQuestion, currentStep]);

  const getPointsBreakdown = () => {
    const breakdown = [];

    if (answers.recognition === "partial") {
      breakdown.push({ category: "Nitelik eşdeğerliği", points: 4 });
    }

    if (answers.shortageOccupation === "yes") {
      breakdown.push({ category: "İhtiyaç duyulan meslek", points: 1 });
    }

    if (answers.experienceYears === "5_plus") {
      breakdown.push({
        category: "Profesyonel tecrübe (5+ years)",
        points: 3,
      });
    } else if (answers.experienceYears === "2_plus") {
      breakdown.push({
        category: "Profesyonel tecrübe (2+ years)",
        points: 2,
      });
    }

    if (answers.germanLevel === "b2_c1") {
      breakdown.push({ category: "Almanca (B2/C1+)", points: 3 });
    } else if (answers.germanLevel === "b1") {
      breakdown.push({ category: "Almanca (B1)", points: 2 });
    } else if (answers.germanLevel === "a2") {
      breakdown.push({ category: "Almanca (A2)", points: 1 });
    }

    if (answers.englishLevel === "c1") {
      breakdown.push({ category: "İngilizce (C1+)", points: 1 });
    }

    if (answers.age === "under_35") {
      breakdown.push({ category: "Yaş (35 altı)", points: 2 });
    } else if (answers.age === "35_39") {
      breakdown.push({ category: "Yaş (35-39)", points: 1 });
    }

    if (answers.previousStay === "yes") {
      breakdown.push({ category: "Almanya'da önceki konaklamaF", points: 1 });
    }

    if (
      answers.partnerQualified === "fully_recognized" ||
      answers.partnerQualified === "6_points"
    ) {
      breakdown.push({ category: "Nitelikli partner", points: 1 });
    }

    return breakdown;
  };

  const isLastQuestion = currentStep === questions.length - 1;
  const isComplete = currentStep >= questions.length || !shouldShowQuestion;
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white mt-16">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Almanya Fırsat Kartı (Chancen Karte) Hesaplayıcı
          </h1>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentStep + 1) / questions.length) * 100}%`,
            }}
          ></div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold text-gray-700">
                Güncel Puan:
              </span>
              <span className="text-2xl font-bold text-blue-600">{points}</span>
              <span className="text-gray-500">/ 6 gerekli</span>
            </div>
            {autoQualified && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Otomatik Nitelikli!</span>
              </div>
            )}
            {!autoQualified && isEligible && (
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">Uygun!</span>
              </div>
            )}
            {!autoQualified && !isEligible && points > 0 && (
              <div className="flex items-center gap-2 text-red-600">
                <AlertCircle className="w-5 h-5" />
                <span className="font-semibold">Uygun Değil</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {!isComplete && shouldShowQuestion && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Soru {currentStep + 1} / {questions.length}
            </h2>
            <h3 className="text-lg text-gray-700 mb-2">
              {currentQuestion.title}
            </h3>
            {currentQuestion.subtitle && (
              <p className="text-sm text-gray-600 italic">
                {currentQuestion.subtitle}
              </p>
            )}
          </div>

          <div className="space-y-3 mb-6">
            {currentQuestion.options.map((option) => (
              <label
                key={option.value}
                className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all"
              >
                <input
                  type="radio"
                  name={currentQuestion.id}
                  value={option.value}
                  checked={answers[currentQuestion.id] === option.value}
                  onChange={(e) =>
                    handleAnswer(currentQuestion.id, e.target.value)
                  }
                  className="mt-1 text-blue-600"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>

          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Önceki
            </button>
            <button
              onClick={() => {
                if (isLastQuestion) {
                  setCurrentStep(questions.length);
                } else {
                  nextStep();
                }
              }}
              disabled={!answers[currentQuestion.id]}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLastQuestion ? "Tamamla" : "Sonraki"}
            </button>
          </div>
        </div>
      )}

      {(isComplete || !shouldShowQuestion) && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Değerlendirme Tamamlandı
          </h2>

          {autoQualified ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">
                  Otomatik Nitelikli!
                </h3>
              </div>
              <p className="text-green-700">
                Niteliğiniz Almanya'da tam olarak tanındığı veya Almanya'da
                edinildiği için otomatik olarak fırsat kartı almaya hak
                kazanırsınız.
              </p>
            </div>
          ) : (
            <div
              className={`border rounded-lg p-6 mb-6 ${
                isEligible
                  ? "bg-green-50 border-green-200"
                  : "bg-red-50 border-red-200"
              }`}
            >
              <div className="flex items-center gap-2 mb-3">
                {isEligible ? (
                  <CheckCircle className="w-6 h-6 text-green-600" />
                ) : (
                  <AlertCircle className="w-6 h-6 text-red-600" />
                )}
                <h3
                  className={`text-lg font-semibold ${
                    isEligible ? "text-green-800" : "text-red-800"
                  }`}
                >
                  {isEligible
                    ? "Fırsat Kartı için Uygun!"
                    : "Şu anda uygun değil"}
                </h3>
              </div>
              <p
                className={`${isEligible ? "text-green-700" : "text-red-700"}`}
              >
                {isEligible
                  ? `6 puanlık asgari gereksinimi karşılayan ${points} puanınız var.`
                  : `${points} puanınız var ancak yeterlilik için en az 6 puana ihtiyacınız var.`}
              </p>
            </div>
          )}

          {!autoQualified && (
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Puan Dağılımı
              </h3>
              <div className="space-y-2">
                {getPointsBreakdown().map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0"
                  >
                    <span className="text-gray-700">{item.category}</span>
                    <span className="font-semibold text-blue-600">
                      +{item.points} puan
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2 pt-4 border-t-2 border-gray-300 font-bold">
                  <span className="text-gray-900">Toplam Puan</span>
                  <span className="text-blue-600">{points} puan</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              <strong>Önemli:</strong> Vize başvurusu için verdiğiniz tüm
              bilgilerin uygun kanıt veya belgelerle desteklenmesi
              gerekmektedir. Bu hesap makinesi yalnızca tahmini değer belirleme
              amaçlıdır.
            </p>
          </div>

          <button
            onClick={resetCalculator}
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Yeni Değerlendirme Başlat
          </button>
        </div>
      )}
    </div>
  );
};

export default ChancenKarteComponent;
