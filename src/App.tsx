
import { useState } from "react";
import arcadeIcon from "./assets/images/icon-arcade.svg";
import Step1  from "./components/Step1";
import Step2  from "./components/Step2";
import Step3  from "./components/Step3";
import Step4  from "./components/Step4";
import Step5  from "./components/Step5";

      export type Plan = {
          id: number;
          name: string;
          monthly: number;
          yearly: number;
          icon: string;
      };
      export type AddOn = {
          id: number;
          title: string;
          description: string;
          monthly: number;
          yearly: number;
      };

function App() {
  
const [step,setStep] = useState<number>(1);

const [submitted, setSubmitted] = useState(false); /*for step 1 error message Step1*/
const [plan, setPlan] = useState("!Yearly");  /* for Step two Montly and Yearly Step2*/

const [planData, setPlanData] = useState<Plan>({           /*To Set Default value step 2*/
      id: 1,
      name: "Arcade",
      monthly: 9,
      yearly: 90,
      icon: arcadeIcon,
});

const [addOnData, setAddOnData] = useState<AddOn[]>([]); /* TO store Data for Step 3*/

   const sideBarSteps =[
            { id:1, title:"YOUR INFO"},
            { id:2, title:"SELECT PLAN"},
            { id:3, title: "ADD-ONS"},
            { id:4, title: "SUMMARY"},
         
        ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
    
  return (
   
       <div className= "w-screen h-lvh bg-slate-200 md:flex items-center justify-center">
          <form  className="
                        //bg-black h-lvh
                      lg:bg-white
                        lg:h-180 
                        w-full
                        lg:w-5xl flex
                        flex-col lg:justify-center items-center
                        lg:flex-row lg:items-stretch
                        lg:rounded-2xl
                        lg:shadow-lg">
{/***********************************************Side Bar*********************************/}
                  <div className=" 
                            border-2 border-amber-200
                            lg:w-[35%] 
                            lg:bg-[url('./assets/images/bg-sidebar-desktop.svg')]
                            lg:rounded-2xl lg:m-5
                            bg-[url('./assets/images/bg-sidebar-mobile.svg')]
                            bg-cover w-full
                            
                            bg-amber-500
                            h-100
                            lg:min-h-170
                        
                            bg-no-repeat
                            flex lg:pt-5 
                            lg:justify-center ">
                              <div className="w-full  lg:w-[70%]">
                                  <div className= "flex gap-4 lg:gap-0 w-full justify-center lg:w-full lg:grid">
                                    {
                                      sideBarSteps.map((sideStep)=>{
                                            return (
                                                    <div className="flex  lg:w-full mt-25 justify-center  lg:mt-7 lg:gap-5" key={sideStep.id}>
                                                        <div onClick={()=>setStep(sideStep.id)} 
                                                        className={`flex  items-center justify-center text-sm
                                                                        lg:text-2xl w-10 h-10 
                                                                        rounded-full border-2
                                                                        font-bold
                                                                        
                                                                        hover:bg-[hsl(206,94%,87%)] hover:border-0 
                                                                        hover:text-black cursor-pointer

                                                                        ${
                                                                            step === sideStep.id ?
                                                                            "bg-[hsl(206,94%,87%)] border-transparent text-black"
                                                                            : "text-white"
                                                                    }
                                                                  
                                                                        `}>
                                                            {sideStep.id}
                                                        </div>
                                                        <div   onClick={()=>setStep(sideStep.id)} 
                                                              className={`hover:lg:border-2 hover:lg:cursor-pointer 
                                                                          lg:border-2 border-transparent  hover:lg:border-white  lg:w-40 rounded-xl pl-3
                                                                  ${
                                                                            step === sideStep.id ?
                                                                            "border-white text-black"
                                                                            : "text-white"
                                                                    }`}>
                                                            
                                                                <h3 className="hidden lg:block pt-1 font-ubuntu text-[hsl(229,24%,75%)]  ">STEP {sideStep.id}</h3>
                                                                <h2 className="hidden lg:block font-semibold text-white  text-md ">{sideStep.title}</h2>           
                                                        </div>
                                                  
                                                    </div>)
                                        })
                                    }
                            
                                  </div>
                              </div>
                            
                              
                  </div>
{/***********************************************Content************************************/}

                <div className="flex ml-5 mr-5 lg:ml-0 lg:mr-0 -mt-35 lg:mt-0 //bg-amber-100 w-full lg:w-[70%] min-h-100 lg:min-h-150 items-center justify-center">
                  <div className="flex lg:pt-0 pt-5 w-[80%] rounded-2xl lg:w-[85%]  -mt-20 lg:mt-0  bg-white min-h-100 lg:min-h-150 border-0  justify-center">
                    {step === 1 && <Step1 submitted={submitted} setSubmitted={setSubmitted} formData ={formData} setFormData={setFormData} setStep={setStep} />}
                    {step === 2 && <Step2 plan={plan} setPlan={setPlan} planData ={planData} setPlanData={setPlanData}
                                        setStep={setStep}/>}
                    {step === 3 && <Step3  addOnData={addOnData } setAddOnData={setAddOnData} plan={plan} setPlan={setPlan} setStep={setStep}/>}
                    {step === 4 && <Step4 setSubmitted={setSubmitted}  formData={formData} plan={plan} planData={planData} addOnData={addOnData} setStep={setStep}/>}
                    {step === 5 && <Step5  />}
                  </div>
                
                </div> 
          </form>
       </div>
  
  )
}

export default App;
