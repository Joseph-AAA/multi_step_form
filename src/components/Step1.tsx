import { useState } from "react";

type Step1Props = {
  formData: {
    name: string;
    email: string;
    phone: string;
  },submitted : boolean;
    setSubmitted : React.Dispatch<React.SetStateAction<boolean>>;
    setFormData: React.Dispatch<React.SetStateAction<{
                                                name: string;
                                                email: string;
                                        phone: string;
                                            }> >;
    setStep: React.Dispatch<React.SetStateAction<number>>;
};
function Step1({submitted, setSubmitted , formData,setFormData,setStep} : Step1Props ){

  function handleForm(e: React.ChangeEvent<HTMLInputElement>){
                setFormData ({
                    ...formData,
                    [e.target.name ] : e.target.value.replace(/^\s+/, "")
            });
        }

    const [touched, setTouched] = useState({     
          name: false,        /*In input name = "name", name="email", name="phone" */
          email: false,
          phone: false,
        });

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
                  setTouched({
                    ...touched,
                    [e.target.name]: true,
              });
            }
      
    const nameValid = /^[A-Za-z\s]+$/.test(formData.name.trim());
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
    const phoneValid = /^\+?[0-9\s-]{7,20}$/.test(formData.phone.trim());

      function handleNext() {
          setSubmitted(true);

          if (
            !formData.name.trim() ||
            !formData.email.trim() ||
            !formData.phone.trim() ||
            !nameValid ||
            !emailValid ||
            !phoneValid 
          ) {
            return;
          }

          setStep(2);
    }

 return (
        <div className="lg:relative flex w-[90%] lg:w-full flex-col  
                        gap-3.5 border-2 rounded-3xl 
                        border-transparent ">
  
{/******************************************** Header *************************************************/}                
                
            <div className="">
               <h1 className="mb-2 //text-white lg:text-black font-bold text-3xl">Personal info</h1>
               <p className="text-[hsl(231,11%,63%)]">Please provide your name, email address, and phone number.</p>
            </div>
  
{/**********************************************  Name  *************************************************/}                
            <div>
                  <div className="grid gap-1.5 mt-3">
               <span className="flex justify-between">
                    <label className="font-bold">Name</label>

                  <label className="text-red-600 font-bold">
                        {(submitted || touched.name) && !formData.name
                          ? "This field is required"
                          : (submitted || touched.name) &&
                            formData.name &&
                            !nameValid
                          ? "Invalid name format"
                          : ""}
                  </label>
              </span>
                
                <input  name="name"
                        value={formData.name}
                        onChange={handleForm}
                        onBlur={handleBlur}
                        type="text"
                        placeholder="e.g. Stephen King" 
                        className=" px-4 w-full h-12 border-[hsl(229,24%,87%)]
                                 border-2 rounded-xl" 
                  />
                  </div>

{/************************************************ Email  *************************************************/}                

                  <div className="grid mt-3 gap-1.5">
                      
                      <span className="flex justify-between">
                            <label className="font-bold">Email Address</label>

                            <label className="text-red-600 font-bold">
                              {(submitted || touched.email) && !formData.email
                                ? "This field is required"
                                : (submitted || touched.email) &&
                                  formData.email &&
                                  !emailValid
                                ? "Invalid email format"
                                : ""}
                            </label>
                      </span>
                      <input placeholder="e.g. stephenking@lorem.com" className=" px-4 w-full h-12 
                                  border-[hsl(229,24%,87%)]
                                      border-2 rounded-xl" 

                              name="email" 
                              type="text"                      
                              value={formData.email}
                              onChange={handleForm}
                              onBlur={handleBlur} />
                    
                  </div>

{/*********************************************** Phone Number *************************************************/}                

                  <div className="grid pb-5 mt-3 gap-1.5">
                      <span className="flex justify-between">
                            <label className="font-bold">Phone Number</label>

                            <label className="text-red-600 font-bold">
                              {(submitted || touched.phone) && !formData.phone
                                ? "This field is required"
                                : (submitted || touched.phone) &&
                                  formData.phone &&
                                  !phoneValid
                                ? "Invalid phone number"
                                : ""}
                            </label>
                      </span>
                      
                      <input placeholder="e.g +1 234 567 890" 
                            className="px-4 w-full h-12 border-[hsl(229,24%,87%)]
                                      border-2 rounded-xl " 

                      
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleForm}
                              onBlur={handleBlur}/>
                  </div>     
         
                
            </div>

{/******************************************** Footer Next Step *************************************************/}                
            <div className="fixed lg:absolute  left-0 bottom-0 h-20 w-full bg-white">
              <div className="relative w-[90%] lg:w-full flex items-center h-full">
                <div className="flex items-center justify-end absolute lg:bottom-0 right-0 ">
                            <button type="button" onClick={handleNext} className=" text-white font-bold 
                            bg-[hsl(213,96%,18%)] pt-3 pb-3 pl-5 pr-5 
                              rounded-md lg:rounded-xl  hover:cursor-pointer ">
                                Next Step
                            </button>
                  </div>
              </div>
                
            </div>   
             
            
        </div>    
 
        
        
 )

}
export default Step1;