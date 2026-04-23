// "use client";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import React, { useEffect, useState } from "react";
// import {
//   rwrCardCalculatorAdditionalItems,
//   rwrCardCalculatorItems,
//   rwrCardTabs,
//   rwrCardVisaTypes,
// } from "@/lib/helpers";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import SelectComponent from "@/components/SelectComponent/SelectComponent";
// import { Progress } from "@/components/ui/progress";
// import { CircleCheck, CircleX } from "lucide-react";

// function RedWhiteRedCalculator() {
//   const [visaType, setVisaType] = useState<number | null>(null);
//   const [points, setPoints] = useState({
//     nitelikler: 0,
//     deneyimGenelPoint: 0,
//     deneyimGenel: 0,
//     deneyimAT: 0,
//     deneyimATPoint: 0,
//     almanca: 0,
//     ingilizce: 0,
//     fransizca: 0,
//     ispanyolca: 0,
//     digerDiller: 0,
//     yas: 0,
//     ek: [] as Record<string, any>[],
//   });
//   const [totalPoint, setTotalPoint] = useState(0);

//   useEffect(() => {
//     const totalExperiencePoint =
//       points.deneyimGenelPoint + points.deneyimATPoint;
//     const totalLanguagePoint =
//       points.almanca +
//       points.ingilizce +
//       points.ispanyolca +
//       points.fransizca +
//       points.digerDiller;
//     let point = 0;
//     point += points.nitelikler;
//     if (visaType !== 3) {
//       if (totalExperiencePoint > 20) {
//         point += 20;
//       } else {
//         point += totalExperiencePoint;
//       }

//       if (totalLanguagePoint > 25) {
//         point += 25;
//       } else {
//         point += totalLanguagePoint;
//       }

//       if (points.yas > 15) {
//         point += 15;
//       } else {
//         point += points.yas;
//       }
//     } else {
//       if (totalExperiencePoint > 10) {
//         point += 10;
//       } else {
//         point += totalExperiencePoint;
//       }

//       if (totalLanguagePoint > 15) {
//         point += 15;
//       } else {
//         point += totalLanguagePoint;
//       }

//       if (points.yas > 10) {
//         point += 10;
//       } else {
//         point += points.yas;
//       }
//     }

//     points.ek.forEach((item: Record<string, any>) => {
//       point += item.point;
//     });

//     setTotalPoint(point);
//   }, [points]);

//   return (
//     <div className="mt-16">
//       <div className="container mx-auto sm:px-4 py-8">
//         <header className="mb-8 text-center">
//           <div className="mb-4">
//             <h1 className="text-4xl font-bold mb-2">
//               Rot-Weiß-Rot Kart Puan Hesaplama
//             </h1>
//           </div>
//           <p className="text-lg max-w-2xl mx-auto">
//             Farklı Avusturya vize kategorileri için uygunluk puanlarınızı
//             hesaplayın ve başvurunuz için kişiselleştirilmiş rehberlik alın
//           </p>
//         </header>
//         <div className="max-w-4xl mx-auto">
//           <div className="rounded-xl bg-card text-card-foreground shadow-lg border-2 border-primary-color">
//             <div className="flex flex-col space-y-1.5 p-2 sm:p-6 text-white rounded-t-lg bg-primary-color">
//               <div className="font-semibold tracking-tight text-2xl">
//                 Avusturya Red-White-Red Kart Puan Hesaplama
//               </div>
//               <div className="space-y-3 mt-4">
//                 <SelectComponent
//                   data={rwrCardVisaTypes}
//                   onValueChange={(item: string) => {
//                     setVisaType(+item);
//                     setPoints({
//                       nitelikler: 0,
//                       deneyimGenelPoint: 0,
//                       deneyimGenel: 0,
//                       deneyimAT: 0,
//                       deneyimATPoint: 0,
//                       almanca: 0,
//                       ingilizce: 0,
//                       fransizca: 0,
//                       ispanyolca: 0,
//                       digerDiller: 0,
//                       yas: 0,
//                       ek: [],
//                     });
//                     setTotalPoint(0);
//                   }}
//                 />
//               </div>
//             </div>
//             <div className="w-full p-2 sm:p-6">
//               {visaType !== null ? (
//                 <Tabs defaultValue="nitelikler" className="w-full">
//                   <TabsList className="w-full">
//                     {rwrCardTabs.map((item) => (
//                       <TabsTrigger
//                         key={item.id}
//                         value={item.value}
//                         defaultChecked={item.id === 0 ? true : false}
//                       >
//                         {item.text}
//                       </TabsTrigger>
//                     ))}
//                   </TabsList>
//                   <TabsContent
//                     value="nitelikler"
//                     className="mt-5 p-5 border rounded-md border-primary-color"
//                   >
//                     <h1 className="font-bold">Nitelikler</h1>

//                     <RadioGroup className="mt-5">
//                       {(
//                         rwrCardCalculatorItems[0] as {
//                           [key: number]: {
//                             id: number;
//                             text: string;
//                             point: number;
//                           }[];
//                         }
//                       )[visaType]?.map((item) => (
//                         <div className="flex items-center gap-3" key={item.id}>
//                           <RadioGroupItem
//                             value={item.text}
//                             id={`${item.id}`}
//                             className="w-5 h-5"
//                             onClick={() =>
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 nitelikler: item.point,
//                               }))
//                             }
//                             checked={points.nitelikler === item.point}
//                           />
//                           <Label htmlFor={`${item.id}`}>{item.text}</Label>
//                         </div>
//                       ))}
//                     </RadioGroup>
//                   </TabsContent>
//                   <TabsContent
//                     value="deneyim"
//                     className="mt-5 p-5 border rounded-md border-primary-color"
//                   >
//                     <h1 className="font-bold">Deneyim</h1>

//                     {(
//                       rwrCardCalculatorItems[1] as {
//                         [key: number]: {
//                           id: number;
//                           text: string;
//                           point: number;
//                         }[];
//                       }
//                     )[visaType]?.map((item) => (
//                       <div
//                         className="grid w-full max-w-sm items-center gap-3 mt-5"
//                         key={item.id}
//                       >
//                         <Label htmlFor="deneyim" className="font-bold">
//                           {item.text}
//                         </Label>
//                         <Input
//                           type="number"
//                           id="deneyim"
//                           placeholder="Deneyim"
//                           value={
//                             item.text.toLowerCase().includes("avusturya")
//                               ? points.deneyimAT
//                               : points.deneyimGenel
//                           }
//                           onChange={(e) => {
//                             if (item.text.toLowerCase().includes("avusturya")) {
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 deneyimATPoint: +e.target.value * item.point,
//                                 deneyimAT: +e.target.value,
//                               }));
//                             } else {
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 deneyimGenelPoint: +e.target.value * item.point,
//                                 deneyimGenel: +e.target.value,
//                               }));
//                             }
//                           }}
//                         />
//                       </div>
//                     ))}
//                   </TabsContent>
//                   <TabsContent
//                     value="diller"
//                     className="mt-5 p-5 border rounded-md border-primary-color"
//                   >
//                     <h1 className="font-bold">Diller</h1>

//                     <div className="mt-5">
//                       <h1 className="font-bold">Almanca dil seviyesi</h1>
//                       <RadioGroup>
//                         <div className="grid grid-cols-2 gap-3 mt-5">
//                           {(
//                             rwrCardCalculatorItems[2] as {
//                               [key: number]: {
//                                 german: {
//                                   id: number;
//                                   text: string;
//                                   point: number;
//                                 }[];
//                                 english: {
//                                   id: number;
//                                   text: string;
//                                   point: number;
//                                 }[];
//                               };
//                             }
//                           )[visaType]?.german?.map((item) => (
//                             <div
//                               className="flex items-center gap-3"
//                               key={`${item.id}`}
//                             >
//                               <RadioGroupItem
//                                 value={item.text}
//                                 id={`${item.id}`}
//                                 className="w-5 h-5"
//                                 checked={points.almanca === item.point}
//                                 onClick={() =>
//                                   setPoints((prev) => ({
//                                     ...prev,
//                                     almanca: item.point,
//                                   }))
//                                 }
//                               />
//                               <Label htmlFor={`${item.id}`}>{item.text}</Label>
//                             </div>
//                           ))}
//                         </div>
//                       </RadioGroup>
//                       <h1 className="font-bold mt-5">İngilizce dil seviyesi</h1>
//                       <RadioGroup>
//                         <div className="grid grid-cols-2 gap-3 mt-5">
//                           {(
//                             rwrCardCalculatorItems[2] as {
//                               [key: number]: {
//                                 german: {
//                                   id: number;
//                                   text: string;
//                                   point: number;
//                                 }[];
//                                 english: {
//                                   id: number;
//                                   text: string;
//                                   point: number;
//                                 }[];
//                               };
//                             }
//                           )[visaType]?.english?.map((item) => (
//                             <div
//                               className="flex items-center gap-3"
//                               key={`${item.id}`}
//                             >
//                               <RadioGroupItem
//                                 value={item.text}
//                                 id={`${item.id}`}
//                                 className="w-5 h-5"
//                                 checked={points.ingilizce === item.point}
//                                 onClick={() =>
//                                   setPoints((prev) => ({
//                                     ...prev,
//                                     ingilizce: item.point,
//                                   }))
//                                 }
//                               />
//                               <Label htmlFor={`${item.id}`}>{item.text}</Label>
//                             </div>
//                           ))}
//                         </div>
//                       </RadioGroup>

//                       <h1 className="font-bold mt-5">
//                         Diğer diller (B1 seviye) - 5 puan
//                       </h1>
//                       <div className="flex flex-col gap-6 mt-5">
//                         <div className="flex items-center gap-3">
//                           <Checkbox
//                             id="french"
//                             className="[&[data-state='checked']]:bg-primary-color"
//                             checked={points.fransizca === 5}
//                             onCheckedChange={(checked) =>
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 fransizca: checked ? 5 : 0,
//                               }))
//                             }
//                           />
//                           <Label htmlFor="french">Fransızca</Label>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <Checkbox
//                             id="spanish"
//                             className="[&[data-state='checked']]:bg-primary-color"
//                             checked={points.ispanyolca === 5}
//                             onCheckedChange={(checked) =>
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 ispanyolca: checked ? 5 : 0,
//                               }))
//                             }
//                           />
//                           <Label htmlFor="spanish">İspanyolca</Label>
//                         </div>
//                         <div className="flex items-center gap-3">
//                           <Checkbox
//                             id="more"
//                             className="[&[data-state='checked']]:bg-primary-color"
//                             checked={points.digerDiller === 5}
//                             onCheckedChange={(checked) =>
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 digerDiller: checked ? 5 : 0,
//                               }))
//                             }
//                           />
//                           <Label htmlFor="more">Hırvatça/Boşnakça/Sırpça</Label>
//                         </div>
//                       </div>
//                     </div>
//                   </TabsContent>
//                   <TabsContent
//                     value="yas"
//                     className="mt-5 p-5 border rounded-md border-primary-color"
//                   >
//                     <h1 className="font-bold">Yaş</h1>

//                     <RadioGroup defaultValue="comfortable" className="mt-5">
//                       {(
//                         rwrCardCalculatorItems[3] as {
//                           [key: number]: {
//                             id: number;
//                             text: string;
//                             point: number;
//                           }[];
//                         }
//                       )[visaType].map((item) => (
//                         <div className="flex items-center gap-3" key={item.id}>
//                           <RadioGroupItem
//                             value={item.text}
//                             id={`${item.id}`}
//                             className="w-5 h-5"
//                             checked={points.yas === item.point}
//                             onClick={() =>
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 yas: item.point,
//                               }))
//                             }
//                           />
//                           <Label htmlFor={`${item.id}`}>{item.text}</Label>
//                         </div>
//                       ))}
//                     </RadioGroup>
//                   </TabsContent>
//                   <TabsContent
//                     value="ek"
//                     className="mt-5 p-5 border rounded-md border-primary-color"
//                   >
//                     <h1 className="font-bold">Ek Olarak</h1>

//                     {visaType === 2 && (
//                       <RadioGroup className="mt-5">
//                         {rwrCardCalculatorAdditionalItems.map((item) => (
//                           <div
//                             className="flex items-center gap-3"
//                             key={item.id}
//                           >
//                             <RadioGroupItem
//                               value={item.text}
//                               id={`${item.id}`}
//                               className="w-5 h-5"
//                               checked={points.ek.some(
//                                 (e) => e.point === item.point
//                               )}
//                               onClick={() => {
//                                 setPoints((prev) => ({
//                                   ...prev,
//                                   ek: [
//                                     ...prev.ek.filter((e) => !e.isRadio),
//                                     item,
//                                   ],
//                                 }));
//                               }}
//                             />
//                             <Label htmlFor={`${item.id}`}>{item.text}</Label>
//                           </div>
//                         ))}
//                       </RadioGroup>
//                     )}
//                     <div className="flex flex-col gap-6 mt-5">
//                       {(
//                         rwrCardCalculatorItems[4] as {
//                           [key: number]: {
//                             id: number;
//                             text: string;
//                             point: number;
//                           }[];
//                         }
//                       )[visaType].map((item) => (
//                         <div className="flex items-center gap-3" key={item.id}>
//                           <Checkbox
//                             id={`${item.id}`}
//                             className="[&[data-state='checked']]:bg-primary-color"
//                             checked={points.ek.some(
//                               (e) => e.point === item.point
//                             )}
//                             onCheckedChange={(checked) =>
//                               setPoints((prev) => ({
//                                 ...prev,
//                                 ek: prev.ek.some((e) => e.id === item.id)
//                                   ? prev.ek.filter((a) => a.id !== item.id)
//                                   : [...prev.ek, item],
//                               }))
//                             }
//                           />
//                           <Label htmlFor={`${item.id}`}>{item.text}</Label>
//                         </div>
//                       ))}
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               ) : (
//                 <p className="text-center">
//                   Puanlarınızı hesaplamaya başlamak için lütfen bir vize
//                   kategorisi seçin.
//                 </p>
//               )}
//               {visaType !== null && (
//                 <div className="mt-5">
//                   <div className="flex justify-between my-3">
//                     <h1 className="font-bold">Puan Özeti</h1>
//                     <div className="px-3 py-2 bg-primary-color rounded-full text-white font-bold">
//                       {totalPoint} / 55 Puan
//                     </div>
//                   </div>
//                   <Progress
//                     value={
//                       Math.round((totalPoint / 55) * 100) < 100
//                         ? Math.round((totalPoint / 55) * 100)
//                         : 100
//                     }
//                     className="w-[100%] h-5 [&>div]:bg-primary-color"
//                     color="red"
//                   />
//                   {
//                     <>
//                       {(totalPoint / 55) * 100 >= 100 ? (
//                         <div className="flex items-center gap-3 mt-4 p-4 rounded-lg bg-green-500 text-white">
//                           <CircleCheck />
//                           <div>
//                             <span className="font-semibold text-lg">
//                               Tebrikler! Vize başvurusu yapabilirsiniz.
//                             </span>
//                             <p className="text-sm mt-1">
//                               Vize başvurusu yapmak için minimum gereksinimleri
//                               karşıladınız.
//                             </p>
//                           </div>
//                         </div>
//                       ) : (
//                         <div className="flex items-center gap-3 mt-4 p-4 rounded-lg bg-red-400 text-white">
//                           <CircleX />
//                           <div>
//                             <span className="font-semibold text-lg">
//                               Uygunluk için 50 puana ihtiyacınız var!
//                             </span>
//                             <p className="text-sm mt-1">
//                               Size en uygun alanları işaretleyerek puanınızı
//                               artırmayı deneyin.
//                             </p>
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   }
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RedWhiteRedCalculator;

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
import { CircleCheck, CircleX, X } from "lucide-react";

function RedWhiteRedCalculator() {
  const [visaType, setVisaType] = useState<number | null>(null);
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
    ek: [] as Record<string, any>[],
  });
  const [totalPoint, setTotalPoint] = useState(0);
  const [showModal, setShowModal] = useState(false);

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

    points.ek.forEach((item: Record<string, any>) => {
      point += item.point;
    });

    setTotalPoint(point);
  }, [points]);

  const isEligible = totalPoint >= 50;

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
                  onValueChange={(item: string) => {
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
                    setShowModal(false);
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
                      {(
                        rwrCardCalculatorItems[0] as {
                          [key: number]: {
                            id: number;
                            text: string;
                            point: number;
                          }[];
                        }
                      )[visaType]?.map((item) => (
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
                    {(
                      rwrCardCalculatorItems[1] as {
                        [key: number]: {
                          id: number;
                          text: string;
                          point: number;
                        }[];
                      }
                    )[visaType]?.map((item) => (
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
                          {(
                            rwrCardCalculatorItems[2] as {
                              [key: number]: {
                                german: {
                                  id: number;
                                  text: string;
                                  point: number;
                                }[];
                                english: {
                                  id: number;
                                  text: string;
                                  point: number;
                                }[];
                              };
                            }
                          )[visaType]?.german?.map((item) => (
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
                              <Label htmlFor={`${item.id}`}>{item.text}</Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>
                      <h1 className="font-bold mt-5">İngilizce dil seviyesi</h1>
                      <RadioGroup>
                        <div className="grid grid-cols-2 gap-3 mt-5">
                          {(
                            rwrCardCalculatorItems[2] as {
                              [key: number]: {
                                german: {
                                  id: number;
                                  text: string;
                                  point: number;
                                }[];
                                english: {
                                  id: number;
                                  text: string;
                                  point: number;
                                }[];
                              };
                            }
                          )[visaType]?.english?.map((item) => (
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
                              <Label htmlFor={`${item.id}`}>{item.text}</Label>
                            </div>
                          ))}
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
                      {(
                        rwrCardCalculatorItems[3] as {
                          [key: number]: {
                            id: number;
                            text: string;
                            point: number;
                          }[];
                        }
                      )[visaType].map((item) => (
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
                      {(
                        rwrCardCalculatorItems[4] as {
                          [key: number]: {
                            id: number;
                            text: string;
                            point: number;
                          }[];
                        }
                      )[visaType].map((item) => (
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

              {/* Bitir Button */}
              {visaType !== null && (
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-6 py-2.5 bg-primary-color text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                  >
                    Bitir →
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Result Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowModal(false);
          }}
        >
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            {/* Modal Header */}
            <div
              className={`p-6 text-white ${
                isEligible ? "bg-green-500" : "bg-red-400"
              }`}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3">
                {isEligible ? <CircleCheck size={32} /> : <CircleX size={32} />}
                <div>
                  <h2 className="text-xl font-bold">
                    {isEligible
                      ? "Tebrikler! Başvuru yapabilirsiniz."
                      : "Henüz uygun değilsiniz."}
                  </h2>
                  <p className="text-sm text-white/90 mt-0.5">
                    {isEligible
                      ? "Minimum gereksinimleri karşıladınız."
                      : "Uygunluk için 50 puana ihtiyacınız var."}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Score Display */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600 font-medium">
                  Toplam Puanınız
                </span>
                <span
                  className={`text-3xl font-bold ${
                    isEligible ? "text-green-500" : "text-red-400"
                  }`}
                >
                  {totalPoint}
                  <span className="text-lg text-gray-400 font-normal">
                    {" "}
                    / 55
                  </span>
                </span>
              </div>

              {/* Score Breakdown */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <h3 className="font-semibold text-gray-700 mb-3">
                  Puan Dağılımı
                </h3>
                <div className="flex justify-between text-gray-600">
                  <span>Nitelikler</span>
                  <span className="font-medium">{points.nitelikler} puan</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Deneyim</span>
                  <span className="font-medium">
                    {Math.min(
                      points.deneyimGenelPoint + points.deneyimATPoint,
                      visaType === 3 ? 10 : 20
                    )}{" "}
                    puan
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Dil</span>
                  <span className="font-medium">
                    {Math.min(
                      points.almanca +
                        points.ingilizce +
                        points.ispanyolca +
                        points.fransizca +
                        points.digerDiller,
                      visaType === 3 ? 15 : 25
                    )}{" "}
                    puan
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Yaş</span>
                  <span className="font-medium">
                    {Math.min(points.yas, visaType === 3 ? 10 : 15)} puan
                  </span>
                </div>
                {points.ek.length > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Ek Puanlar</span>
                    <span className="font-medium">
                      {points.ek.reduce((sum, e) => sum + e.point, 0)} puan
                    </span>
                  </div>
                )}
                <div className="border-t pt-2 flex justify-between font-semibold text-gray-800">
                  <span>Toplam</span>
                  <span>{totalPoint} puan</span>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-5 flex flex-col gap-3">
                {isEligible ? (
                  <a
                    href="#danismanlik"
                    className="w-full text-center py-3 bg-primary-color text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setShowModal(false)}
                  >
                    Başvuru Süreci Hakkında Bilgi Al
                  </a>
                ) : (
                  <a
                    href="#danismanlik"
                    className="w-full text-center py-3 bg-primary-color text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                    onClick={() => setShowModal(false)}
                  >
                    Uzman Danışmanlık Al
                  </a>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-3 border border-gray-200 text-gray-600 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Geri Dön
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RedWhiteRedCalculator;
