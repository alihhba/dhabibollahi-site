import images from "@/lib/utils/images.js";

const MainLayout = ({children}) => {
    return (
        <div className={'sm:grid flex flex-col w-full grid-cols-12 gap-6  relative'}>
            {/*box*/}
            <div className={'h-fit col-span-4  flex flex-col sm:p-7.5 p-5 bg-primary-100  rounded-[25px] sm:sticky top-6'}>
                <div className={'relative h-full w-full flex bg-white rounded-[25px]  grow sm:min-h-[280px] max-sm:max-h-[277px]  max-sm:overflow-y-hidden'}>
                    <div className={'w-full min-w-full   absolute bottom-0  rounded-[25px] overflow-y-hidden min-h-full    '}>
                    </div>
                    <img src={images.danial} className={'w-full h-full min-h-full z-20 sm:-mt-6 -mt-3 rounded-[25px] '} alt=""/>
                </div>

                <div className={'sm:mt-12 mt-6'}>
                    <p className={'sm:text-3xl/8 text-2xl font-semibold text-white '}>DANIAL</p>
                    <p className={'sm:text-3xl/8 text-2xl font-semibold text-white '}>HABIBOLLAHI</p>
                    <div className={'flex max-sm:flex-row sm:flex-col  max-sm:items-center gap-1'}>
                    <p className={'sm:mt-2 w-fit text-white/60 sm:text-md/8 text-md font-normal'}>GRAPHIC DESIGNER & </p>
                    <p className={'text-white/60 w-fit text-md/8 text-md font-normal'}>CREATIVE ART</p>
                    </div>


                </div>
            </div>

            <div className={'w-full h-full col-span-8  grow pb-28'}>
                {children}
            </div>
        </div>
    );
};

export default MainLayout
