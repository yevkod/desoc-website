import React from 'react';
import features_1 from '../../assets/imgs/features-1.png';
import edit from '../../assets/imgs/edit.png';
import metamask from '../../assets/imgs/metamask.png';
import triangle from '../../assets/imgs/triangle.png';
import music from '../../assets/imgs/features-music.png';
import decentralized from '../../assets/imgs/decentralized.png';
import apis from '../../assets/imgs/apis.png';
import intero from '../../assets/imgs/intero.png';
import { Button } from '../../components/Button/Button';

export const FeaturesView = () => {
    return (
        <div className='bg-black pt-[40px] pb-[90px] p-5 relative features-shadow z-50'>
            <div className='flex flex-col justify-center '>
                <div className='[font-size:_clamp(2em,4vw,50px)] font-bold text-white'>Unlock cool features</div>
                <div className='flex justify-center pt-8'>
                    <Button text='Buy Desoc' />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 md:grid-rows-2 pt-12 gap-5 z-50 mx-auto max-w-[70rem]'>
                <div className='flex flex-col md:flex-row border-2 hover:scale-105 transition-all bg-gradient-to-b from-[#1A2025] z-50 to-black col-span-2 justify-between border-gray-600 rounded-2xl p-5'>
                    <div className='flex flex-col'>
                        <div className=' text-white text-left text-[25px] font-bold'>
                            <span>Customizable user profiles</span>
                        </div>
                        <div className='text-gray-300 pt-3 text-left max-w-[255px]'>
                            <span>Customizable profiles with integrated wallets to view and manage TC holdings. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
                        </div>
                    </div>
                    <div className='flex relative mt-10 lg:mt-28 text-left max-w-[350px] gap-5 border-2 border-gray-600 rounded-2xl p-5'>
                        <div className='flex flex-col w-full'>
                            <div className='flex flex-col mx-auto sm:flex-row gap-3 sm:gap-12'>
                                <div className='max-w-[100%] mx-auto sm:mx-0'>
                                    <img className='max-w-[100%]' src={features_1} alt='' />
                                </div>
                                <div className='flex flex-col text-center sm:text-left'>
                                    <div className='text-white '>
                                        <div>
                                            <span>
                                                Alex Smith
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                @alexsmith11
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex mt-3 text-white gap-3'>
                                        <div className='flex flex-col'>
                                            <div>
                                                <span>357</span>
                                            </div>
                                            <div className='uppercase'>
                                                <span>Following</span>
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='flex flex-col'>
                                                <div>
                                                    <span>1782</span>
                                                </div>
                                                <div className='uppercase'>
                                                    <span>Followers</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='rounded-xl w-full mt-5 mb-3 text-white justify-center gap-3 flex items-center bg-gray-700 p-3'>
                                <div>
                                    <img src={metamask} alt='' />
                                </div>
                                <div>
                                    0x3f...AD3
                                </div>
                                <div>
                                    <img src={triangle} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='absolute right-6'>
                            <img src={edit} alt='' />
                        </div>
                    </div>
                </div>
                <div className='relative hover:scale-105 transition-all border-2 bg-gradient-to-b from-[#1A2025] to-black text-left border-gray-600 rounded-2xl p-5'>
                    <div className='text-white text-[20px] font-bold'>
                        <span>Content Discovery
                            Algorithms</span>
                    </div>
                    <div className='text-white pt-3'>
                        <span>AI-driven content suggestions tailored to user preferences without compromising data privacy.</span>
                    </div>
                    <div className='absolute bottom-0 right-0'>
                        <img src={music} alt='' />
                    </div>
                </div>
                <div className='border-2 relative hover:scale-105 transition-all bg-gradient-to-b from-[#1A2025] to-black text-left border-gray-600 rounded-2xl p-5'>
                    <div className='text-white text-[20px] font-bold'>
                        <span>Decentralized
                            Database</span>
                    </div>
                    <div className='text-white pt-3'>
                        <span>Leveraging Distributed Ledger Technology (DLT), all posts, likes, shares, and user interactions are stored across a network of nodes, ensuring data immutability and transparency.</span>
                    </div>
                    <div className='absolute right-0 bottom-0'>
                        <img src={decentralized} alt='' />
                    </div>
                </div>
                <div className='border-2 hover:scale-105 transition-all bg-gradient-to-b from-[#1A2025] to-black relative text-white text-left border-gray-600 rounded-2xl p-5'>
                    <div className='text-white text-[20px] font-bold'>
                        <span>APIs and SDKs</span>
                    </div>
                    <div className='pt-3'>
                        <span>For third-party integrations, enabling the development of external applications and plugins.</span>
                    </div>
                    <div className='absolute right-0 bottom-0 lg:bottom-12'>
                        <img src={apis} alt='' />
                    </div>
                </div>
                <div className='border-2 hover:scale-105 transition-all grid bg-gradient-to-b from-[#1A2025] to-black text-white text-left border-gray-600 rounded-2xl p-5'>
                    <div className='text-[20px] h-0 font-bold'>
                        <span>Interoperability</span>
                    </div>
                    <div>
                        <span>Designed to communicate seamlessly with other blockchain projects, further expanding
                            its ecosystem.</span>
                    </div>
                    <div className=''>
                        <img src={intero} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
