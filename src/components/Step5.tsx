import thanks from "../assets/images/icon-thank-you.svg";

function Step5(){

        return (
        
                    <div className="flex  w-full  justify-center ml-5 mr-5 p-10 md:p-0 rounded-3xl 
                                border-transparent ">
                              <div className="flex gap-5 flex-col justify-center w-full items-center">
                                        <div>
                                            <img className= "w-30 h-30" src={thanks}></img>
                                        </div>

                                        <h2 className="text-[hsl(213,96%,18%)] text-2xl font-bold">
                                            Thank you!
                                        </h2>
                                        <p className="text-center text-xl w-full text-[hsl(231,11%,63%)] word-break-words">
                                            Thanks for confirming your subscription! We hope you have fun using our platform. 
                                            If you ever need support, please feel free to email us at support@loremgaming.com.
                                        </p>
                              </div>  
                                
                    </div>
            
                
        
 )

}
export default Step5;