import { Building2, Edit, Eye, Plus, Trash2 } from 'lucide-react'
import properties, { type Tstatus } from '../data/properties-mock-data'

const statusBadge: Record<Tstatus, string> = {
    Available: "text-green-700 border-green-200 bg-green-100",
    Reserved: "text-yellow-700 border-yellow-200 bg-yellow-100",
    Occupied: "text-red-700 border-red-200 bg-red-100"
}

const Properties = () => {
  return (
    <div className='mt-5 lg:mt-10 shadow-lg border rounded-lg bg-white'>
        {/* description, type, proprietaire, manager, loyer, status, city */}
        <div className='flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 p-3'>
            <div>
                <div className='flex items-center gap-2'>
                    <Building2 className="h-5 w-5 text-blue-500" />
                    <h3 className='text-sm'>Gestion des propriétés</h3>
                </div>
                <h3 className='text-sm text-gray-500 mt-1'>Liste de tous les propriétes sur <span>Let Space</span></h3>
            </div>
            <div className='flex items-center gap-2 bg-white p-2 rounded-lg shadow border cursor-pointer transition-all duration-100 hover:scale-105 hover:bg-pink-50-50'>
                <h3 className=' hidden md:block lg:block text-sm font-semibold'>Ajouter</h3>
                <Plus className="h-5 w-5 text-green-700" />
            </div>
        </div>

        <div className='bg-white'>
            <div className='overflow-x-auto'>
                <table className='w-full'>
                    <thead className='font-semibold text-sm bg-gray-50 border-b-gray-200 border-b'>
                        <tr>
                            <th className='text-left p-3'>Description</th>
                            <th className='text-left p-3'>City</th>
                            <th className='text-left p-3'>Type</th>
                            <th className=' text-left p-3'>Loyer(Ar/mois)</th>
                            <th className='text-left p-3'>Propriétaire</th>
                            <th className='text-left p-3'>Manager</th>
                            <th className='text-left p-3'>Status</th>
                            <th className='text-center p-3'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-xs md:text-sm lg:text-sm'>
                        {
                            properties.map(property => {
                                console.log(property.status)
                                return (
                                    <tr className='border-b-gray-200 border-b hover:bg-gray-50'>
                                        <td className='whitespace-nowrap p-3'>{property.description}</td>
                                        <td className='whitespace-nowrap p-3' >{property.city}</td>
                                        <td className='whitespace-nowrap p-3 '>
                                            <div className=' w-fit bg-blue-50 text-blue-700 border border-blue-200 p-1 rounded-lg'>
                                                <p>{property.address}</p>
                                            </div>
                                        </td>
                                        <td className='whitespace-nowrap p-3 text-green-700 font-semibold'>{property.loyer} Ar</td>
                                        <td className='whitespace-nowrap p-3'>{property.owner}</td>
                                        <td className='whitespace-nowrap p-3'>{property.manager}</td>
                                        <td className='whitespace-nowrap p-3'>
                                            <div className={`w-fit  ${statusBadge[property.status]} border p-1 rounded-lg`}>
                                                <p>{property.status}</p>
                                            </div>
                                        </td>
                                        <td className='p-3'>
                                            <div className='flex items-center gap-3 justify-center'>
                                                <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                    <Eye className="h-4 w-4 text-blue-600" />
                                                </button>
                                                <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                    <Edit className="h-4 w-4 text-green-600" />
                                                </button>
                                                <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                    <Trash2 className="h-4 w-4 text-red-600" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Properties