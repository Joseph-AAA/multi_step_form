

   type AddOn = {
                    id: number;
                    title: string;
                    description: string;
                    monthly: number;
                    yearly: number;
                };

export type Plan = {
                    id: number;
                    name: string;
                    monthly: number;
                    yearly: number;
                    icon: string;
                };
type Formdata = {
    name: string;
    email: string;
    phone: string;
  };
   type Step4Props = {
                        setStep: React.Dispatch<React.SetStateAction<number>>;
                        planData : Plan;
                        addOnData: AddOn[];
                        plan : string;
                        formData : Formdata;
                        setSubmitted :React.Dispatch<React.SetStateAction<boolean>>;
 
                };

function Step4({setSubmitted, plan, planData, formData, addOnData, setStep} :Step4Props){

    const totalAddonData = addOnData.reduce((total,item)=>{
        return total + (plan === "Yearly" ? item.yearly : item.monthly);
    },0) 
    
    const total = (plan === "Yearly" ? planData?.yearly?? 0 : planData?.monthly?? 0) +totalAddonData;

    // const[submitted, setSubmitted] = useState(false);
       function handleNext() {
   

          if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ) {
                setStep(1);
                setSubmitted(true);
             
                 return;
          }

          setStep(5);
    }


          
 return (
         <>
    <div className="lg:relative flex w-[90%] lg:w-full flex-col  
                        gap-3.5 border-2 rounded-3xl 
                        border-transparent ">


              {/********************************* Header *************************************************/}                
            <div className="">
               <h1 className="mb-2 font-bold text-3xl">Finishing up</h1>
               <p className="text-[hsl(231,11%,63%)] text-md">Double-check everything looks OK before confirming</p>
            </div>   

            {/********************************* Plan Cards *************************************************/}
           <div className="w-full mt-5 bg-[hsl(231,100%,99%)]  rounded-xl">
               
                <div className="flex justify-between p-5 md:p-10 ">
                    <div>
                        <h1 className="text-xl font-bold"> {planData.name} </h1>
                        <button
                            type="button">
                        Change
                        </button>
                    </div>
                    <span className="text-xl font-bold">  ${plan === 'Yearly' ? `${planData.yearly}/yr` : `${planData.monthly}/mo`}  </span>
                </div>
                <div className="w-full flex justify-center">
                     <span className="w-10/12 relative border-t-[hsl(229,24%,87%)] border-transparent border block"></span>
                </div>

                <div className="grid p-5 md:p-10">
                   {
                        addOnData.map((item : AddOn) => (
                            <div key={item.id} className="flex justify-between pt-3">
                            <span>{[item.title]}</span>

                            <span className="font-bold text-[hsl(231,11%,63%)]">
                                {plan === "Yearly"
                                ? `+$${item.yearly}/yr`
                                : `+$${item.monthly}/mo`}
                            </span>
                            </div>
                        ))
                        }

                </div>
          


           </div>
                <div className="flex justify-between p-5 md:p-10 ">
                                    <p>Total (per {plan === "Yearly" ? "year" : "month"})</p>
                                 
                                 <span className="text-xl text-[hsl(243,100%,62%)] font-bold">
                                       {plan === "Yearly" ?  `$${total}/yr` : `+$${total}/mo`}    
                                </span>   
                </div>
            
                {/************************************* Footer ******************************************/}
               
            {/* <div className="absolute bottom-0 right-0">
                 <button  type="button" onClick={handleNext}  className="absolute text-white font-bold 
                 bg-[hsl(243,100%,62%)] pt-3 pb-3 pl-5 pr-5 
                 rounded-xl right-0 hover:cursor-pointer bottom-0">
                     Confirm
                 </button>
            </div>
            <div className="absolute bottom-0 left-0">
                   <button  type="button" onClick={()=>setStep(3)}  className=" text-[hsl(231,11%,63%)] font-bold 
                  pt-3 pb-3 pl-5 pr-5 
                 rounded-xl left-0 hover:cursor-pointer bottom-0">
                     Go Back
                 </button>
            
            </div> */}

            <div className="fixed lg:absolute flex justify-center left-0 bottom-0 h-20 w-full bg-white">
              <div className="relative w-[80%] lg:w-full flex items-center h-full">
                <div className="flex items-center justify-between absolute lg:bottom-0 right-0 ">
                        <button  type="button" onClick={handleNext} className="text-white font-bold 
                            bg-[hsl(243,100%,62%)]  pt-3 pb-3 pl-5 pr-5 
                            rounded-md lg:rounded-xl right-0 hover:cursor-pointer bottom" >
                                Confirm
                        </button>
                  </div>
                  <div className="flex items-center justify-between absolute lg:bottom-0 left-0 ">
                        <button type="button"  onClick={()=>setStep(3)} className="text-[hsl(231,11%,63%)] font-bold 
                            pt-3 pb-3 pl-5 pr-5 
                            rounded-xl left-0 hover:cursor-pointer bottom-0">
                         Go Back
                        </button>
                  </div>       
              </div>
            </div> 
        </div>
    </>
 )

}
export default Step4;