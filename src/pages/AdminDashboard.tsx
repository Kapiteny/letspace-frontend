import { BarChart3, Building2, CreditCard, Users } from 'lucide-react'
import Header from '../components/Header'

const AdminDashboard = () => {
  return (
    <div>
        <Header/>
        <div className='m-4 lg:mt-10 lg:mx-40 '>
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
        </div>
    </div>
  )
}

export default AdminDashboard