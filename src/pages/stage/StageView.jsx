import { Root as AccordionRoot } from "@radix-ui/react-accordion";
import React from 'react'
import { stageData } from "./StageData";
import { RoadmapAccordion } from "./StageAccordion";

export const StageView = () => {
    return (
        <div className='bg-black pt-[40px] lg:pt-[90px] px-5'>
            <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[90rem] mx-auto'>
                <div className='text-white relative z-20 stage-shadow [font-size:_clamp(5em,4vw,250px)] font-bold'>
                    2024
                </div>
                <div className="text-white pt-10 lg:pt-0">
                    <AccordionRoot
                        type="single"
                        collapsible
                        className="flex flex-col gap-8 divide-y divide-white divide-opacity-50"
                        style={{ height: "1150px" }}
                    >
                        {stageData.map(({ sectionName, accordions }, i) => (
                            <section className="pt-8 first:pt-0" key={`roadmap-${i}`}>
                                <div className="flex justify-center items-center w-max mb-4 px-4 py-2 border border-white border-opacity-50 rounded-full bg-white bg-opacity-10 font-medium text-sm leading-none tracking-[0.28px]">
                                    {sectionName}
                                </div>
                                <div className="flex flex-col gap-6 text-left">
                                    {accordions.map(({ title, content }, j) => (
                                        <RoadmapAccordion
                                            key={`roadmap-${i}-${j}`}
                                            title={title}
                                            value={`roadmap-${i}-${j}`}
                                        >
                                            {content}
                                        </RoadmapAccordion>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </AccordionRoot>
                </div>
            </div>
        </div>
    )
}
