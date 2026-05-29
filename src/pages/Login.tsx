import { Building2, CalendarDays, Home, Wallet,Eye,EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getCurrentUser, loginUser } from '../services/authServices';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await loginUser(formData);

            localStorage.setItem("access_token", data.access);
            localStorage.setItem("refresh_token", data.refresh);

            const {user} = await getCurrentUser();

            if (user.role === "ADMIN") {
                console.log("Connecté en tant que admin")
                navigate("/dashboard");
            }

            if (user.role === "TENANT") {
                console.log('connecté en tant que client')
            }

            if (user.role === "MANAGER") {
                console.log('connecté en tant que manager')
            }

            if (user.role === "OWNER") {
                console.log('connecté en tant que propriétaire')
            }

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="min-h-screen flex">
        {/* left side */}
        <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden'>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 z-10"></div>
            <img
                src="https://images.unsplash.com/photo-1636969386919-b90cad8216e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZyUyMGNpdHl8ZW58MXx8fHwxNzU1NDY5NDgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Modern architecture"
                className="w-full h-full object-cover"
            />
            <div className='absolute inset-0 z-20 text-white flex flex-col justify-center items-center p-12'>
                <div className="max-w-md text-center">
                    <div className="flex items-center justify-center mb-8">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                            <Building2 className="h-12 w-12 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl mb-4">Let Space</h1>
                    <p className="text-xl text-white/90 leading-relaxed">
                        Découvrez la plateforme immobilière moderne qui révolutionne votre expérience en gestion de location
                    </p>
                    <div className='flex justify-center text-white/80 gap-8 mt-8'>
                        <div className='text-center'>
                            <div className='bg-white/10 rounded-full p-3 mb-2 mx-auto w-fit'>
                                <Home className='h-6 w-6'/>
                            </div>
                            <p className='text-sm'>Proprietes gerer avec des contrats reels</p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-white/10 rounded-full p-3 mb-2 mx-auto w-fit'>
                                <CalendarDays className='h-6 w-6'/>
                            </div>
                            <p className='text-sm'>Suivi mensuel garantis</p>
                        </div>
                        <div className='text-center'>
                            <div className='bg-white/10 rounded-full p-3 mb-2 mx-auto w-fit'>
                                <Wallet className='h-6 w-6'/>
                            </div>
                            <p className='text-sm'>Suivi automatique de paiement</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* right side */}
        <div className='w-full lg:w-1/2 flex justify-center items-center bg-gradient-to-br from-gray-50 to-white'>
            <div className='max-w-md w-full rounded border p-6 shadow-lg bg-white'>
                {/* card header */}
                <div className='flex items-center flex-col mb-6 gap-2'>
                    <h1 className='text-2xl'>Bienvenue !</h1>
                    <h3 className='text-gray-500 text-sm text-center'>Connectez-vous à votre compte pour accéder à votre espace personnalisé</h3>
                </div>
                {/* card content */}
                <div className='text-sm'>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className='flex flex-col gap-1 mb-2'>
                            <label>Adresse email</label>
                            <input 
                                className='border rounded-md border-gray-500 text-gray-500 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ' 
                                type="text" 
                                placeholder='exemple@gmail.com'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='relative flex flex-col gap-1 mb-2'>
                            <label>Mot de passe</label>
                            <input 
                                className='border rounded-md border-gray-500 text-gray-500 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blues-500' 
                                type={showPassword ? "text" : "password"} 
                                placeholder='*******'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div className='absolute top-8 right-1 cursor-pointer' onClick={handleShowPassword} title={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>
                                {
                                    showPassword ? <EyeOff className='text-gray-500 h-5 w-5'/> : <Eye className='text-gray-500 h-5 w-5'/>
                                }
                            </div>
                        </div>
                        <button className='text-center border rounded-md bg-gradient-to-br from-blue-600/90 to-purple-700/90 w-full text-white text-md p-2' type='submit'>Se connecter</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login