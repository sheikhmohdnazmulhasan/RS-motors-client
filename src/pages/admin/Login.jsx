import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../../AuthProvider";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import Swal from "sweetalert2";

const Login = () => {
    document.title = `RS Motors | Login`
    const [email, setEmail] = useState('')
    const [showPasswordFiled, setShowPasswordFiled] = useState(false);
    const [err, setErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [showPass, setShowPass] = useState(false);
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleResetPass() {

        if (email !== 'admin@rsmotorsinternational.com') {
            Swal.fire({
                icon: 'error',
                title: "Account Doesn't Exist!",
                text: 'We could not find an account with the email address you provided.'

            });

            return
        }

        sendPasswordResetEmail(auth, email).then(() => {

            Swal.fire({
                icon: 'success',
                title: 'Reset Link Send.',
                text: 'We have sent a password reset link to your email. If you do not see the email in your inbox, please check your spam folder'

            });

        }).catch(err => {
            console.log(err);
        })
    }

    function handleNext() {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setEmailErr('Please Enter Valid Email Address.');

        } else if (email !== 'admin@rsmotorsinternational.com') {
            setEmailErr("Account Doesn't Exist With The Email Address You Provided.");

        } else {
            setShowPasswordFiled(true);
            setEmailErr('')
        }

    }

    function handleLogin(event) {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        login(email, password).then(() => {
            // console.log(user);
            navigate('/admin/dashboard')

        }).catch(() => setErr('The password you entered is incorrect.'))

    }


    return (
        <div className="flex px-5 justify-center min-h-screen px-2 md:px-0 bg-black text-white">
            <div className="w-[600px] mt-20">
                <h1 className="text-3xl font-bold">Welcome to RS Motors Admin Panel</h1>
                {err && <div className="w-full border border-red-600 p-6 rounded mt-7 text-red-800">
                    <p>{err}</p>
                </div>}
                <div className="mt-10">
                    <p className="">Email Address</p>
                    <form className="mt-2" onSubmit={handleLogin}>
                        <input type="email" placeholder="example@domain.com" disabled={showPasswordFiled ? true : false} required name="email" className={showPasswordFiled ? 'w-full px-3 text-black border py-2 rounded cursor-not-allowed' : 'w-full px-3 text-black border py-2 rounded'} onChange={(event) => setEmail(event.target.value)} />
                        <p className="mt-3 text-sm text-red-400">{emailErr}</p>
                        {showPasswordFiled && <div className="relative">
                            <p className="mt-5 mb-2">Password</p>

                            <input placeholder="Password" type={showPass ? 'text' : 'password'} required name="password" className="w-full text-black px-3 border py-2 rounded " />

                            {!showPass && <IoEye className=" cursor-pointer absolute text-black right-3 top-[38px]" onClick={() => setShowPass(!showPass)} />}

                            {showPass && <IoEyeOff className=" cursor-pointer absolute text-black right-3 top-[38px]" onClick={() => setShowPass(!showPass)} />}
                        </div>}
                        <div className="mt-6 md:hidden gap-7 items-center">
                            <button type={showPasswordFiled ? 'submit' : 'button'} className="bg-[#047BC1] text-white px-16 w-full py-2 rounded block md:flex mb-3" onClick={handleNext}>{showPasswordFiled ? 'Log In' : 'Next'}</button>
                            {showPasswordFiled && <a className="text-[#047BC1] cursor-pointer hover:underline font-bold" onClick={handleResetPass}>Forgot Your Password?</a>}
                        </div>
                        <div className="mt-6 hidden md:flex gap-7 items-center">
                            <button type={showPasswordFiled ? 'submit' : 'button'} className="bg-[#047BC1] text-white px-16 py-2 rounded block md:flex" onClick={handleNext}>{showPasswordFiled ? 'Log In' : 'Next'}</button>
                            {showPasswordFiled && <a className="text-[#047BC1] cursor-pointer hover:underline font-bold" onClick={handleResetPass}>Forgot Your Password?</a>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;