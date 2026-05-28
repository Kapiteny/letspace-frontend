import { Download, Eye, NotepadText } from 'lucide-react';
import React from 'react'
import leases from '../data/leases-mock-data';

const Leases = () => {
  return (
     <div className='mt-5 lg:mt-10 shadow-lg border rounded-lg bg-white'>
        {/* id, locataire, propriété, start_date, end-date */}
        {/* atao téléchargable en pdf ny contenu contrat anakiray */}
        <div className='flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 p-3'>
            <div>
                <div className='flex items-center gap-2'>
                    <NotepadText className="h-5 w-5 text-pink-700" />
                    <h3 className='text-sm'>Tous les contrats </h3>
                </div>
                <h3 className='text-sm text-gray-500 mt-1'>Liste de tous les contrats éffectuer sur  <span>Let Space</span></h3>
            </div>
        </div>
        <div className='max-h-96 bg-white overflow-x-auto overflow-y-auto'>
            <table className='w-full'>
                <thead className='font-semibold text-sm bg-gray-50 border-b-gray-200 border-b'>
                    <tr>
                        <th className='text-left p-3'>Id</th>
                        <th className='text-left p-3'>Propriétaire</th>
                        <th className='text-left p-3'>Locataire</th>
                        <th className='text-left p-3'>Date de début</th>
                        <th className='text-left p-3'>Date de fin</th>
                        <th className='text-center p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-xs md:text-sm lg:text-sm'>
                    {
                        leases.map(lease => {
                            // const Icon = statusBadge[user.status].icon;
                            return (
                                <tr className='border-b-gray-200 border-b hover:bg-gray-50'>
                                    <td className='whitespace-nowrap p-3'>{lease.id}</td>
                                    <td className='whitespace-nowrap p-3 '>{lease.property.owner.username}</td>
                                    <td className='whitespace-nowrap p-3' >{lease.tenant.username}</td>
                                    <td className='whitespace-nowrap p-3'>{lease.start_date}</td>
                                    <td className='whitespace-nowrap p-3'>{lease.end_date ? lease.end_date : "-- -- --"}</td>
                                    {/* <td className='whitespace-nowrap p-3'>
                                        <div className={`w-fit flex items-center gap-2  ${statusBadge[user.status].class} border p-1 rounded-lg font-bold`}>
                                            <Icon className="h-4 w-4" />
                                            <p>{statusBadge[user.status].label}</p>
                                        </div>
                                    </td> */}
                                    <td className='p-3'>
                                        <div className='flex items-center gap-3 justify-center'>
                                            <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                <Eye className="h-4 w-4 text-blue-600" />
                                            </button>
                                            <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                <Download className="h-4 w-4 text-gray-700" />
                                            </button>
                                            {/* <button className="p-1 lg:p-2 rounded-lg bg-white shadow border hover:bg-blue-50 hover:border-blue-200">
                                                <Trash2 className="h-4 w-4 text-red-600" />
                                            </button> */}
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
  )
}

export default Leases