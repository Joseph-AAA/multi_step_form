

type AddOn = {
  id: number;
  title: string;
  description: string;
  monthly: number;
  yearly: number;
};

type Step3Props = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
   plan: string;
   setPlan: React.Dispatch<React.SetStateAction<string>>;
   addOnData : AddOn[];
   setAddOnData : React.Dispatch<React.SetStateAction<AddOn[]>>;
};

function Step3({addOnData, setAddOnData, plan, setStep}:Step3Props){


// console.log(`${'Addon Data' + addOnData.map((item)=>item.title)}`)


//  const[submitted, setSubmitted] = useState(false);
//     function handleNext(){
//         setSubmitted(true);
//         //     if(addOnData.length === 0){
//         //         return;
//         // }
//         setStep(4);
//     }
   

    const addOns = [
        {id:1, title:"Online service", description:"Access to multiplayer games",monthly :1, yearly : 10},
        {id:2, title:"Larger storage", description:"Extra 1TB of cloud save",monthly :2, yearly : 20},
        {id:3, title:"Customizable profile", description:"Custom theme on your profile",monthly :3, yearly : 20},
   
    ]
 

    
 return (
    <>
            <div className="lg:relative flex w-[90%] lg:w-full flex-col  
                        gap-3.5 border-2 rounded-3xl 
                        border-transparent ">


                <div className="">
                  <div className="flex items-center justify-between">
                        <h1 className="mb-2 font-bold text-3xl">Pick add-ons</h1>
                    
                  </div>
                           <p className="text-[hsl(231,11%,63%)]">Add-ons help enhance your gaming experience</p>
                </div>
             
         

{/************************************************ Plan Cards *************************************************/}
                <div className="grid pb-7 mt-5 gap-5 ">
                        {
                            addOns.map((addOn)=>{
                                return (
                                    <div className=" sm:w-full" key={addOn.id}>
                                
                                        <div  onClick={() => {
                                                                    // handleClick(addOn.id);
                                                                    setAddOnData(prev =>
                                                                    prev.some(item => item.id === addOn.id)
                                                                        ? prev.filter(item => item.id !== addOn.id)
                                                                        : [...prev, addOn]
                                                                    );
                                                                        }}

                                                        className={` ${addOnData.some(prev=>prev.id === addOn.id)
                                                                        ? "bg-[hsl(218,100%,97%)]"
                                                                        : ""
                                                                        } flex items-center hover:bg-[hsl(218,100%,97%)] 
                                                            hover:cursor-pointer
                                                            border-3 hover:border-[hsl(228,100%,84%)] 
                                                            hover:border-3 border-[hsl(229,24%,87%)] 
                                                            w-full rounded-md`}>
                                            
                                            <input checked={addOnData.some(prev=>prev.id === addOn.id)}    onChange={() => {}}
                                                className=" w-5 h-5 ml-3 lg:ml-5 hover:cursor-pointer" type="checkbox">
                                            
                                            </input>
                                            <div className="flex flex-col md:flex-row w-full justify-between ml-4 items-start md:items-center p-3">
                                                <div>
                                                        <h3 className="font-bold   lg:text-lg">{addOn.title}</h3>
                                                        <p>{addOn.description}</p>
                                                </div>    
                                            
                                                <p className=" pr-2 font-bold text-[hsl(243,100%,62%)]">
                                                        ${plan === 'Yearly' ? `${addOn.yearly}/yr` : `${addOn.monthly}/mo`}                                       
                                                </p>

                                            </div>
                                          
                                        </div>
                                        
                                
                                    </div>
                                    
                                )
                            })
                        
                            
                        }
                </div>
        
            
{/************************************************** Footer ******************************************/}
               
            {/* <div className="absolute bottom-0 right-0">
                 <button  type="button" onClick={()=>setStep(4)} className=" text-white font-bold 
                 bg-[hsl(213,96%,18%)] pt-3 pb-3 pl-5 pr-5 
                 rounded-xl right-0 hover:cursor-pointer bottom-0">
                     Next Step
                 </button>
            </div>
             <div className="absolute bottom-0 left-0">
                   <button  type="button"  onClick={()=>setStep(2)} className="text-[hsl(231,11%,63%)] font-bold 
                  pt-3 pb-3 pl-5 pr-5 
                 rounded-xl left-0 hover:cursor-pointer bottom-0">
                     Go Back
                 </button>
            </div> */}

             <div className="fixed lg:absolute flex justify-center left-0 bottom-0 h-20 w-full bg-white">
              <div className="relative w-[80%] lg:w-full flex items-center h-full">
                <div className="flex items-center justify-between absolute lg:bottom-0 right-0 ">
                        <button  type="button" onClick={()=>setStep(4)} className="text-white font-bold 
                            bg-[hsl(213,96%,18%)] pt-3 pb-3 pl-5 pr-5 
                            rounded-md lg:rounded-xl right-0 hover:cursor-pointer bottom" >
                                Next Step
                        </button>
                  </div>
                  <div className="flex items-center justify-between absolute lg:bottom-0 left-0 ">
                        <button type="button"  onClick={()=>setStep(2)} className="text-[hsl(231,11%,63%)] font-bold 
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
export default Step3;