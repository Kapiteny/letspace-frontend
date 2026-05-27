import { BarChart3, Building2, CreditCard, Edit, Eye, FolderOpenDot, MonitorCog, Plus, Sparkles, TicketX, Trash2, UserLock, Users, WalletCards, type LucideIcon } from 'lucide-react'
import Header from '../components/Header'
import { useState } from 'react'
import Properties from '../components/Properties'

type menuItem = {
    title: string,
    icon: LucideIcon
}

const MENU: menuItem[] = [
    {
        title: "Propriétés",
        icon: Building2
    },
    {
        title: "Utilisateurs",
        icon: Users
    },
    {
        title: "Contrats",
        icon: FolderOpenDot
    },
    {
        title: "Loyers",
        icon: WalletCards
    },
]


const AdminDashboard = () => {
    const [menu, setMenu] = useState<string>("Propriétés");

    const changeMenu = (title: string) => {
        setMenu(title)
    }
  return (
    <div>
        <Header/>
        <div className=' m-4 pt-20 lg:mt-10 lg:mx-40 '>
            {/* stats properties */}
            <div className='grid grid-cols-2 gap-6 lg:grid-cols-4'>
                {/* card */}
                <div className='shadow-lg border-0 bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl hover:shadow-xl transition-shadow'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-blue-700'>Propriétés total</p>
                        <div className='bg-blue-200 rounded-full p-2'>
                            <Building2 className="h-5 w-5 text-blue-700" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-3xl font-bold text-blue-900'>250</p>
                    </div>
                </div>
                <div className='shadow-lg border-0 bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-xl hover:shadow-xl transition-shadow'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-green-700'>En réservation</p>
                        <div className='bg-green-200 rounded-full p-2'>
                            <Users className="h-5 w-5 text-blue-700" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-3xl font-bold text-green-900'>78</p>
                    </div>
                </div>
                <div className='shadow-lg border-0 bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-xl hover:shadow-xl transition-shadow'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-purple-700'>Révenus génerés</p>
                        <div className='bg-purple-200 rounded-full p-2'>
                            <CreditCard className="h-5 w-5 text-blue-700" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-3xl font-bold text-purple-900'>5 560 000 Ar</p>
                    </div>
                </div>
                <div className='shadow-lg border-0 bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-xl hover:shadow-xl transition-shadow'>
                    <div className='flex items-center justify-between'>
                        <p className='text-sm text-orange-700'>Taux de croissance</p>
                        <div className='bg-orange-200 rounded-full p-2'>
                            <BarChart3 className="h-5 w-5 text-blue-700" />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='text-3xl font-bold text-orange-900'>30%</p>
                    </div>
                </div>
            </div>
            {/* stats users */}
            <div className='mt-5 grid grid-cols-1 lg:grid-cols-4 gap-4'>
                <div className='bg-white rounded-xl shadow-md p-5 flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-gray-500'>Manager</p>
                        <p className='text-lg font-bold text-gray-900'>12</p>
                    </div>
                    <MonitorCog className="h-8 w-8 text-blue-500" />
                </div>
                <div className='bg-white rounded-xl shadow-md p-5 flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-gray-500'>Locataires</p>
                        <p className='text-lg font-bold text-gray-900'>1250</p>
                    </div>
                    <Sparkles className="h-8 w-8 text-yellow-500" />
                </div>
                <div className='bg-white rounded-xl shadow-md p-5 flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-gray-500'>Propriétaires</p>
                        <p className='text-lg font-bold text-gray-900'>213</p>
                    </div>
                    <UserLock className="h-8 w-8 text-green-500" />
                </div>
                <div className='bg-white rounded-xl shadow-md p-5 flex items-center justify-between'>
                    <div>
                        <p className='text-sm text-gray-500'>En renovation</p>
                        <p className='text-lg font-bold text-gray-900'>94</p>
                    </div>
                    <TicketX className="h-8 w-8 text-red-600" />
                </div>
            </div>
            <div className='mt-5 lg:mt-10'>
                {/* Menu */}
                <div className='flex items-center justify-between rounded-lg shadow-lg p-2'>
                    {
                        MENU.map((item,index) => {
                            const Icon = item.icon;
                            return (
                                <div 
                                    key={index} 
                                    className={`flex items-center md:w-full lg:w-full justify-center gap-2 ${menu == item.title ? 'text-white  bg-gradient-to-r from-red-600 to-pink-700' : 'text-gray-700'} p-1 rounded-lg hover:scale-105 transition-all duration-100 cursor-pointer `}
                                    onClick={() => changeMenu(item.title)}
                                >
                                    <Icon className="h-3 w-3 md:h-5 md:w-5 lg:h-5 lg:w-5"/>
                                    <h3 className='text-xs md:text-sm lg:text-sm'>{item.title}</h3>
                                </div>
                            )
                        })
                    }
                </div>

                {
                    menu == "Propriétés" && <Properties/>
                }

                {
                    menu == "Utilisateurs" && (
                        <div className='mt-5'>
                            Propriétes
                        </div>
                    )
                }

                {
                    menu == "Contrats" && (
                        <div>
                            Contrats
                        </div>
                    )
                }

                {
                    menu == "Loyers" && (
                        <div>
                            Loyers
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default AdminDashboard