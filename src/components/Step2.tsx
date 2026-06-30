import { useState } from "react";

import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";
import type { Plan } from "../App";





type Step2Props = {
  plan: string;
  setPlan: React.Dispatch<React.SetStateAction<string>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  planData: Plan | null;
  setPlanData: React.Dispatch<React.SetStateAction<Plan>>;
};


function Step2({ plan , setPlan, planData, setPlanData, setStep } : Step2Props){
   
     const [submitted,setSubmitted] = useState(false);
    function handleNext() {
         setSubmitted(true);
        if (!planData) {
          
            return;
        }

  setStep(3);
}



    const plans = [
        {id:1, name:"Arcade",monthly :9, yearly : 90, icon :arcadeIcon },
        {id:2, name:"Advanced",monthly :12, yearly : 120, icon :advancedIcon },
        {id:3, name:"Pro",monthly :15, yearly : 150 ,icon : proIcon},
         
    ]
        console.log({planData})
    // const [planCard,setPlanCard] = useState<number>();
 return (
    
        <div className="lg:relative flex w-[90%] lg:w-full  flex-col 
                        gap-3.5 border-2 rounded-3xl 
                        border-transparent ">

{/************************************************ Header *************************************************/}                
            <div className="">
                <div className="flex justify-between">
                        <h1 className="mb-2 font-bold text-3xl">
                            Select your plan
                        </h1>

                        {!planData && submitted && (
                            <p className="text-red-600 text-2xl font-bold">
                                Please select a plan.
                            </p>
                        )}
                </div>
               <p className="text-[hsl(231,11%,63%)] mb-5 ">You have the option of monthly or yearly billing.</p>
            </div>   

{/************************************************ Plan Cards *************************************************/}
           <div className="lg:flex mt-5 mb-10 lg:gap-2 justify-around ">
                {
                    plans.map((myPlan)=>{
                        return (
                            <div key={myPlan.id} onClick={() => {
                                                                    // setPlanCard(myPlan.id);
                                                                    setPlanData(myPlan);
                                                                    }}>

                        
                                <div   className={`lg:grid items-center  flex lg:pb-3 mb-3 hover:bg-[hsl(218,100%,97%)] hover:cursor-pointer
                                                border-3 hover:border-[hsl(228,100%,84%)] hover:border-3
                                                 border-[hsl(229,24%,87%)]  min-w-40 rounded-2xl
                                                 ${planData?.id == myPlan.id ? "bg-[hsl(218,100%,97%)]" : "none"}`}>
                                    
                                    <img className="m-4" src={myPlan.icon} alt={myPlan.name} />
                                    <div className="ml-4 lg:pt-7 grid">
                                        <h3 className="font-bold text-lg">{myPlan.name}</h3>
                                        <p className=" text-[hsl(231,11%,63%)]">
                                            ${plan==="Yearly" ? `${myPlan.yearly}/yr` : `${myPlan.monthly}/mo`} 
                                        </p>
                                        <p className={`${plan==="Yearly" ? "block" : "hidden"}   font-medium`}>2 months free</p>
                                    </div>
                                </div>
                                     
                            </div>
                            
                        )
                    })
                }
           </div>

{/************************************************** Switch Button *************************************************/}

            <div className="relative w-full">
                 <div className="flex items-center justify-center w-full  text-white font-bold 
                 bg-[hsl(218,100%,97%)] pt-3 pb-3 pl-5 pr-5 
                 rounded-xl right-0 hover:cursor-pointer bottom-0 gap-10">
                   <span className="text-black">Monthly</span>
                        <button type="button" onClick={()=>setPlan(plan === "Yearly" ? "Monthly" : "Yearly")} className="relative grid items-center w-12 h-8 bg-black rounded-2xl hover:cursor-pointer">
                            <div className={`${plan === "Yearly" ? "right-0"  : " left-0" } transition-all absolute m-2 w-4 h-4 bg-white rounded-full`}>

                            </div>
                        </button>

                    <span className="text-black">Yearly</span>
                 </div>
            </div>

{/******************************************** Footer Go Back & Next Step ******************************************/}
               
            {/* <div className="flex absolute bottom-0 right-0 ">
                 <button  type="button"  onClick={handleNext} className="text-white font-bold 
                 bg-[hsl(213,96%,18%)] pt-3 pb-3 pl-5 pr-5 
                 rounded-xl right-0 hover:cursor-pointer bottom" >
                     Next Step
                 </button>
            </div> */}

            {/* <div className="absolute bottom-0 left-0">
                    <button type="button"  onClick={()=>setStep(1)} className="text-[hsl(231,11%,63%)] font-bold 
                        pt-3 pb-3 pl-5 pr-5 
                        rounded-xl left-0 hover:cursor-pointer bottom-0">
                         Go Back
                     </button>

            </div>
                 */}

            <div className="absolute flex justify-center left-0 bottom-0 h-20 w-full bg-white">
              <div className="relative w-[80%] lg:w-full flex items-center h-full">
                <div className="flex items-center justify-between absolute lg:bottom-0 right-0 ">
                        <button  type="button"  onClick={handleNext} className="text-white font-bold 
                            bg-[hsl(213,96%,18%)] pt-3 pb-3 pl-5 pr-5 
                            rounded-xl right-0 hover:cursor-pointer bottom" >
                                Next Step
                        </button>
                  </div>
                  <div className="flex items-center justify-between absolute lg:bottom-0 left-0 ">
                        <button type="button"  onClick={()=>setStep(1)} className="text-[hsl(231,11%,63%)] font-bold 
                            pt-3 pb-3 pl-5 pr-5 
                            rounded-xl left-0 hover:cursor-pointer bottom-0">
                         Go Back
                        </button>
                  </div>       
              </div>
                
            </div>   
        </div>

        
 )

}
export default Step2;