import { ClockFading, Coins, HandCoins, Siren } from 'lucide-react'

const RentDue = () => {
  return (
    <div className='mt-5 lg:mt-10 shadow-lg border rounded-lg bg-white'>
        {/* id, locataire, propriété, start_date, end-date */}
        {/* atao téléchargable en pdf ny contenu contrat anakiray */}
        <div className='bg-gradient-to-r from-blue-50 to-cyan-50 p-3'>
            <div>
                <div className='flex items-center gap-2'>
                    <HandCoins className="h-5 w-5 text-yellow-700" />
                    <h3 className='text-sm'>Gestion des revenus </h3>
                </div>
                <h3 className='text-sm text-gray-500 mt-1'>Tous les revenus génerer par  <span>Let Space</span> ce mois ci</h3>
            </div>
            <div className='hidden mt-5 md:grid grid-cols-3 gap-2 lg:gap-10'>
                <div className='flex items-center justify-between shadow-lg border-0 bg-white rounded-lg p-2'>
                    <div>
                        <p className='text-gray-500 text-xs lg:text-sm'>Revenus du mois</p>
                        <p className='text-green-700 font-bold lg:text-xl'>250 000 Ar</p>
                    </div>
                    <div className='bg-green-200 rounded-full p-2'>
                        <Coins className="h-5 w-5 text-green-700" />
                    </div>
                </div>
                <div className='flex items-center justify-between shadow-lg border-0 bg-white rounded-lg p-2'>
                    <div>
                        <p className='text-gray-500 text-xs lg:text-sm'>En attente</p>
                        <p className='text-orange-500 font-bold lg:text-xl'>250 000 Ar</p>
                    </div>
                    <div className='bg-yellow-200 rounded-full p-2'>
                        <ClockFading className="h-5 w-5 text-yellow-700" />
                    </div>
                </div>
                <div className='flex items-center justify-between shadow-lg border-0 bg-white rounded-lg p-2'>
                    <div>
                        <p className='text-gray-500 text-xs lg:text-sm'>Retards</p>
                        <p className='text-red-700 font-bold lg:text-xl'>250 000 Ar</p>
                    </div>
                    <div className='bg-red-200 rounded-full p-2'>
                        <Siren className="h-5 w-5 text-red-700" />
                    </div>
                </div>
            </div>
        </div>
        <div className='max-h-96 bg-white overflow-x-auto overflow-y-auto'>
            <table className='w-full'>
                <thead className='font-semibold text-sm bg-gray-50 border-b-gray-200 border-b'>
                    <tr>
                        <th className='text-left p-3'>Mois</th>
                        <th className='text-left p-3'>Locataire</th>
                        <th className='text-left p-3'>Adresse</th>
                        <th className='text-left p-3'>Montant</th>
                        <th className='text-left p-3'>Status</th>
                        <th className='text-center p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-xs md:text-sm lg:text-sm'>
                    {/* {
                        leases.map(lease => {
                            return (
                                <tr className='border-b-gray-200 border-b hover:bg-gray-50'>
                                    <td className='whitespace-nowrap p-3'>{lease.id}</td>
                                    <td className='whitespace-nowrap p-3 '>{lease.property.owner.username}</td>
                                    <td className='whitespace-nowrap p-3' >{lease.tenant.username}</td>
                                    <td className='whitespace-nowrap p-3'>{lease.start_date}</td>
                                    <td className='whitespace-nowrap p-3'>{lease.end_date ? lease.end_date : "-- -- --"}</td>
                                    <td className='p-3'>
                                        <div className='flex items-center gap-3 justify-center'>
                                            <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                <Eye className="h-4 w-4 text-blue-600" />
                                            </button>
                                            <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                <Download className="h-4 w-4 text-gray-700" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    } */}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default RentDue