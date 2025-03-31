import { useState } from "react";

function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    function handleLogin() {
        if (email === "admin@gmail.com" && password === "admin") {
            alert("✅ User Credentials Match!");
        } else if (email !== "admin@gmail.com" && password !== "admin") {
            alert("❌ Incorrect Credentials");
        } else if (email !== "admin@gmail.com") {
            alert("❌ Email is Incorrect");
        } else {
            alert("❌ Password is Incorrect");
        }
    }

    return (
        <>
            <div className="flex flex-col bg-[white] justify-evenly items-center p-[20px] w-[400px] h-[400px] rounded-[8px]">
                <h2 className="text-[grey] text-2xl font-medium">Login</h2>

                
                <div className="flex flex-col w-[300px]">
                    <label htmlFor="username" className="text-[#7a7a7a81] text-[12px]">Email:</label>
                    <input 
                        type="text" 
                        id="username" 
                        className="p-[15px_10px] border-[1px] outline-0 border-[grey] w-full" 
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                
                <div className="flex flex-col w-[300px]">
                    <label htmlFor="password" className="text-[#7a7a7a81] text-[12px]">Password:</label>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="password" 
                        className="p-[15px_10px] border-[1px] outline-0 border-[grey] w-full" 
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                
                <div className="flex w-[300px] justify-start">
                    <p className="text-[12px] text-[#1a1a1a]">
                        <input 
                            type="checkbox" 
                            onChange={() => setShowPassword(!showPassword)} 
                            checked={showPassword}
                        /> Show Password
                    </p>
                </div>

                
                <div className="flex flex-col w-[300px]">
                    <button 
                        className="w-full p-[10px] text-[white] bg-[#00799e] font-medium" 
                        onClick={()=>handleLogin()}
                    >
                        SIGN IN
                    </button>
                </div>

                
                <div className="flex flex-col w-[300px]">
                    <p className="text-[12px] text-center">Forgot <span className="text-[#0f8fb6] cursor-pointer">Username / Password</span></p>
                    <p className="text-[12px] text-center">Don't have an account? <span className="text-[#0f8fb6] cursor-pointer">Sign up</span></p>
                </div>
            </div>
        </>
    );
}

export default LoginForm;
