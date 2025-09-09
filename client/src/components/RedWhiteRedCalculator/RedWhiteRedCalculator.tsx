"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import React, { useEffect, useState } from "react";
import {
  rwrCardCalculatorAdditionalItems,
  rwrCardCalculatorItems,
  rwrCardTabs,
  rwrCardVisaTypes,
} from "@/lib/helpers";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import SelectComponent from "@/components/SelectComponent/SelectComponent";
import { Progress } from "@/components/ui/progress";
import { CircleCheck, CircleX } from "lucide-react";

function RedWhiteRedCalculator() {
  const [visaType, setVisaType] = useState(null);
  const [points, setPoints] = useState({
    nitelikler: 0,
    deneyimGenelPoint: 0,
    deneyimGenel: 0,
    deneyimAT: 0,
    deneyimATPoint: 0,
    almanca: 0,
    ingilizce: 0,
    fransizca: 0,
    ispanyolca: 0,
    digerDiller: 0,
    yas: 0,
    ek: [],
  });
  const [totalPoint, setTotalPoint] = useState(0);

  useEffect(() => {
    const totalExperiencePoint =
      points.deneyimGenelPoint + points.deneyimATPoint;
    const totalLanguagePoint =
      points.almanca +
      points.ingilizce +
      points.ispanyolca +
      points.fransizca +
      points.digerDiller;
    let point = 0;
    point += points.nitelikler;
    if (visaType !== 3) {
      if (totalExperiencePoint > 20) {
        point += 20;
      } else {
        point += totalExperiencePoint;
      }

      if (totalLanguagePoint > 25) {
        point += 25;
      } else {
        point += totalLanguagePoint;
      }

      if (points.yas > 15) {
        point += 15;
      } else {
        point += points.yas;
      }
    } else {
      if (totalExperiencePoint > 10) {
        point += 10;
      } else {
        point += totalExperiencePoint;
      }

      if (totalLanguagePoint > 15) {
        point += 15;
      } else {
        point += totalLanguagePoint;
      }

      if (points.yas > 10) {
        point += 10;
      } else {
        point += points.yas;
      }
    }

    points.ek.forEach((item) => {
      point += item.point;
    });

    setTotalPoint(point);
  }, [points]);

  return (
    <div className="mt-16">
      <div className="container mx-auto sm:px-4 py-8">
        <header className="mb-8 text-center">
          <div className="mb-4">
            <h1 className="text-4xl font-bold mb-2">
              Rot-Weiß-Rot Kart Puan Hesaplama
            </h1>
          </div>
          <p className="text-lg max-w-2xl mx-auto">
            Farklı Avusturya vize kategorileri için uygunluk puanlarınızı
            hesaplayın ve başvurunuz için kişiselleştirilmiş rehberlik alın
          </p>
        </header>
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl bg-card text-card-foreground shadow-lg border-2 border-primary-color">
            <div className="flex flex-col space-y-1.5 p-2 sm:p-6 text-white rounded-t-lg bg-primary-color">
              <div className="font-semibold tracking-tight text-2xl">
                Avusturya Red-White-Red Kart Puan Hesaplama
              </div>
              <div className="space-y-3 mt-4">
                <SelectComponent
                  data={rwrCardVisaTypes}
                  onValueChange={(item) => {
                    setVisaType(+item);
                    setPoints({
                      nitelikler: 0,
                      deneyimGenelPoint: 0,
                      deneyimGenel: 0,
                      deneyimAT: 0,
                      deneyimATPoint: 0,
                      almanca: 0,
                      ingilizce: 0,
                      fransizca: 0,
                      ispanyolca: 0,
                      digerDiller: 0,
                      yas: 0,
                      ek: [],
                    });
                    setTotalPoint(0);
                  }}
                />
              </div>
            </div>
            <div className="w-full p-2 sm:p-6">
              {visaType !== null ? (
                <Tabs defaultValue="nitelikler" className="w-full">
                  <TabsList className="w-full">
                    {rwrCardTabs.map((item) => (
                      <TabsTrigger
                        key={item.id}
                        value={item.value}
                        defaultChecked={item.id === 0 ? true : false}
                      >
                        {item.text}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  <TabsContent
                    value="nitelikler"
                    className="mt-5 p-5 border rounded-md border-primary-color"
                  >
                    <h1 className="font-bold">Nitelikler</h1>

                    <RadioGroup className="mt-5">
                      {rwrCardCalculatorItems[0][visaType]?.map((item) => (
                        <div className="flex items-center gap-3" key={item.id}>
                          <RadioGroupItem
                            value={item.text}
                            id={`${item.id}`}
                            className="w-5 h-5"
                            onClick={() =>
                              setPoints((prev) => ({
                                ...prev,
                                nitelikler: item.point,
                              }))
                            }
                            checked={points.nitelikler === item.point}
                          />
                          <Label htmlFor={`${item.id}`}>{item.text}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </TabsContent>
                  <TabsContent
                    value="deneyim"
                    className="mt-5 p-5 border rounded-md border-primary-color"
                  >
                    <h1 className="font-bold">Deneyim</h1>

                    {rwrCardCalculatorItems[1][visaType]?.map((item) => (
                      <div
                        className="grid w-full max-w-sm items-center gap-3 mt-5"
                        key={item.id}
                      >
                        <Label htmlFor="deneyim" className="font-bold">
                          {item.text}
                        </Label>
                        <Input
                          type="number"
                          id="deneyim"
                          placeholder="Deneyim"
                          value={
                            item.text.toLowerCase().includes("avusturya")
                              ? points.deneyimAT
                              : points.deneyimGenel
                          }
                          onChange={(e) => {
                            if (item.text.toLowerCase().includes("avusturya")) {
                              setPoints((prev) => ({
                                ...prev,
                                deneyimATPoint: +e.target.value * item.point,
                                deneyimAT: +e.target.value,
                              }));
                            } else {
                              setPoints((prev) => ({
                                ...prev,
                                deneyimGenelPoint: +e.target.value * item.point,
                                deneyimGenel: +e.target.value,
                              }));
                            }
                          }}
                        />
                      </div>
                    ))}
                  </TabsContent>
                  <TabsContent
                    value="diller"
                    className="mt-5 p-5 border rounded-md border-primary-color"
                  >
                    <h1 className="font-bold">Diller</h1>

                    <div className="mt-5">
                      <h1 className="font-bold">Almanca dil seviyesi</h1>
                      <RadioGroup>
                        <div className="grid grid-cols-2 gap-3 mt-5">
                          {rwrCardCalculatorItems[2][visaType]["german"]?.map(
                            (item) => (
                              <div
                                className="flex items-center gap-3"
                                key={`${item.id}`}
                              >
                                <RadioGroupItem
                                  value={item.text}
                                  id={`${item.id}`}
                                  className="w-5 h-5"
                                  checked={points.almanca === item.point}
                                  onClick={() =>
                                    setPoints((prev) => ({
                                      ...prev,
                                      almanca: item.point,
                                    }))
                                  }
                                />
                                <Label htmlFor={`${item.id}`}>
                                  {item.text}
                                </Label>
                              </div>
                            )
                          )}
                        </div>
                      </RadioGroup>
                      <h1 className="font-bold mt-5">İngilizce dil seviyesi</h1>
                      <RadioGroup>
                        <div className="grid grid-cols-2 gap-3 mt-5">
                          {rwrCardCalculatorItems[2][visaType]["english"]?.map(
                            (item) => (
                              <div
                                className="flex items-center gap-3"
                                key={`${item.id}`}
                              >
                                <RadioGroupItem
                                  value={item.text}
                                  id={`${item.id}`}
                                  className="w-5 h-5"
                                  checked={points.ingilizce === item.point}
                                  onClick={() =>
                                    setPoints((prev) => ({
                                      ...prev,
                                      ingilizce: item.point,
                                    }))
                                  }
                                />
                                <Label htmlFor={`${item.id}`}>
                                  {item.text}
                                </Label>
                              </div>
                            )
                          )}
                        </div>
                      </RadioGroup>

                      <h1 className="font-bold mt-5">
                        Diğer diller (B1 seviye) - 5 puan
                      </h1>
                      <div className="flex flex-col gap-6 mt-5">
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="french"
                            className="[&[data-state='checked']]:bg-primary-color"
                            checked={points.fransizca === 5}
                            onCheckedChange={(checked) =>
                              setPoints((prev) => ({
                                ...prev,
                                fransizca: checked ? 5 : 0,
                              }))
                            }
                          />
                          <Label htmlFor="french">Fransızca</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="spanish"
                            className="[&[data-state='checked']]:bg-primary-color"
                            checked={points.ispanyolca === 5}
                            onCheckedChange={(checked) =>
                              setPoints((prev) => ({
                                ...prev,
                                ispanyolca: checked ? 5 : 0,
                              }))
                            }
                          />
                          <Label htmlFor="spanish">İspanyolca</Label>
                        </div>
                        <div className="flex items-center gap-3">
                          <Checkbox
                            id="more"
                            className="[&[data-state='checked']]:bg-primary-color"
                            checked={points.digerDiller === 5}
                            onCheckedChange={(checked) =>
                              setPoints((prev) => ({
                                ...prev,
                                digerDiller: checked ? 5 : 0,
                              }))
                            }
                          />
                          <Label htmlFor="more">Hırvatça/Boşnakça/Sırpça</Label>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent
                    value="yas"
                    className="mt-5 p-5 border rounded-md border-primary-color"
                  >
                    <h1 className="font-bold">Yaş</h1>

                    <RadioGroup defaultValue="comfortable" className="mt-5">
                      {rwrCardCalculatorItems[3][visaType].map((item) => (
                        <div className="flex items-center gap-3" key={item.id}>
                          <RadioGroupItem
                            value={item.text}
                            id={`${item.id}`}
                            className="w-5 h-5"
                            checked={points.yas === item.point}
                            onClick={() =>
                              setPoints((prev) => ({
                                ...prev,
                                yas: item.point,
                              }))
                            }
                          />
                          <Label htmlFor={`${item.id}`}>{item.text}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </TabsContent>
                  <TabsContent
                    value="ek"
                    className="mt-5 p-5 border rounded-md border-primary-color"
                  >
                    <h1 className="font-bold">Ek Olarak</h1>

                    {visaType === 2 && (
                      <RadioGroup className="mt-5">
                        {rwrCardCalculatorAdditionalItems.map((item) => (
                          <div
                            className="flex items-center gap-3"
                            key={item.id}
                          >
                            <RadioGroupItem
                              value={item.text}
                              id={`${item.id}`}
                              className="w-5 h-5"
                              checked={points.ek.some(
                                (e) => e.point === item.point
                              )}
                              onClick={() => {
                                setPoints((prev) => ({
                                  ...prev,
                                  ek: [
                                    ...prev.ek.filter((e) => !e.isRadio),
                                    item,
                                  ],
                                }));
                              }}
                            />
                            <Label htmlFor={`${item.id}`}>{item.text}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                    <div className="flex flex-col gap-6 mt-5">
                      {rwrCardCalculatorItems[4][visaType].map((item) => (
                        <div className="flex items-center gap-3" key={item.id}>
                          <Checkbox
                            id={`${item.id}`}
                            className="[&[data-state='checked']]:bg-primary-color"
                            checked={points.ek.some(
                              (e) => e.point === item.point
                            )}
                            onCheckedChange={(checked) =>
                              setPoints((prev) => ({
                                ...prev,
                                ek: prev.ek.some((e) => e.id === item.id)
                                  ? prev.ek.filter((a) => a.id !== item.id)
                                  : [...prev.ek, item],
                              }))
                            }
                          />
                          <Label htmlFor={`${item.id}`}>{item.text}</Label>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              ) : (
                <p className="text-center">
                  Puanlarınızı hesaplamaya başlamak için lütfen bir vize
                  kategorisi seçin.
                </p>
              )}
              {visaType !== null && (
                <div className="mt-5">
                  <div className="flex justify-between my-3">
                    <h1 className="font-bold">Puan Özeti</h1>
                    <div className="px-3 py-2 bg-primary-color rounded-full text-white font-bold">
                      {totalPoint} / 55 Puan
                    </div>
                  </div>
                  <Progress
                    value={
                      Math.round((totalPoint / 55) * 100) < 100
                        ? Math.round((totalPoint / 55) * 100)
                        : 100
                    }
                    className="w-[100%] h-5 [&>div]:bg-primary-color"
                    color="red"
                  />
                  {
                    <>
                      {(totalPoint / 55) * 100 >= 100 ? (
                        <div className="flex items-center gap-3 mt-4 p-4 rounded-lg bg-green-500 text-white">
                          <CircleCheck />
                          <div>
                            <span className="font-semibold text-lg">
                              Tebrikler! Vize başvurusu yapabilirsiniz.
                            </span>
                            <p className="text-sm mt-1">
                              Vize başvurusu yapmak için minimum gereksinimleri
                              karşıladınız.
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 mt-4 p-4 rounded-lg bg-red-400 text-white">
                          <CircleX />
                          <div>
                            <span className="font-semibold text-lg">
                              Uygunluk için 50 puana ihtiyacınız var!
                            </span>
                            <p className="text-sm mt-1">
                              Size en uygun alanları işaretleyerek puanınızı
                              artırmayı deneyin.
                            </p>
                          </div>
                        </div>
                      )}
                    </>
                  }
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RedWhiteRedCalculator;
