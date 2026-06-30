import thanks from "../assets/images/icon-thank-you.svg";

function Step5(){

        return (
        
                    <div className="grid justify-center grid-rows-[1fr] gap-3.5  ml-10 mr-15 p-10 border-2 rounded-3xl 
                                border-transparent w-[45vw] min-h-auto ">
                              <div className="flex gap-5 flex-col justify-center items-center">
                                        <div>
                                            <img className= "w-30 h-30" src={thanks}></img>
                                        </div>

                                        <h2 className="text-[hsl(213,96%,18%)] text-2xl font-bold">
                                            Thank you!
                                        </h2>
                                        <p className="text-center text-xl text-[hsl(231,11%,63%)]">
                                            Thanks for confirming your subscription! We hope you have fun using our platform. 
                                            If you ever need support, please feel free to email us at support@loremgaming.com.
                                        </p>
                              </div>  
                                
                    </div>
            
                
        
 )

}
export default Step5;