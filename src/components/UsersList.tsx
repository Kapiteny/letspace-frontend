import { Building2, Edit, Eye, MailPlus, Plus, Trash2, User } from 'lucide-react'
import usersData, { type TUserRole, type TUserStatus } from '../data/users-mock-data'

const statusBadge: Record<TUserStatus, string> = {
    ACTIVE: "text-green-700 border-green-200 bg-green-100",
    PENDING: "text-yellow-700 border-yellow-200 bg-yellow-100",
    SUSPENDED: "text-red-700 border-red-200 bg-red-100"
}

const statusLabel: Record<TUserStatus, string> = {
    ACTIVE: "Active",
    PENDING: "En attente",
    SUSPENDED: "Suspendu"
}

const roleLabel: Record<TUserRole, string> = {
    ADMIN: "admin",
    MANAGER: "manager",
    OWNER: "propriétaire",
    TENANT: "locataire"
}

const UsersList = () => {
  return (
    <div className='mt-5 lg:mt-10 shadow-lg border rounded-lg bg-white'>
        {/* nom, role, email, status */}
        <div className='flex items-center justify-between bg-gradient-to-r from-blue-50 to-cyan-50 p-3'>
            <div>
                <div className='flex items-center gap-2'>
                    <User className="h-5 w-5 text-green-700" />
                    <h3 className='text-sm'>Tous les utilisateurs</h3>
                </div>
                <h3 className='text-sm text-gray-500 mt-1'>Liste de tous les utilisateurs sur <span>Let Space</span></h3>
            </div>
            <div className='flex items-center gap-2 bg-white p-2 rounded-lg shadow border cursor-pointer transition-all duration-100 hover:scale-105 hover:bg-pink-50-50'>
                <h3 className=' hidden md:block lg:block text-sm font-semibold'>Inviter</h3>
                <MailPlus className="h-5 w-5 text-green-700" />
            </div>
        </div>
        <div className='max-h-96 bg-white overflow-x-auto overflow-y-auto'>
            <table className='w-full'>
                <thead className='font-semibold text-sm bg-gray-50 border-b-gray-200 border-b'>
                    <tr>
                        <th className='text-left p-3'>Nom</th>
                        <th className='text-left p-3'>Rôle</th>
                        <th className='text-left p-3'>Email</th>
                        <th className='text-left p-3'>Status</th>
                        <th className='text-center p-3'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-xs md:text-sm lg:text-sm'>
                    {
                        usersData.map(user => {
                            console.log(user.status)
                            return (
                                <tr className='border-b-gray-200 border-b hover:bg-gray-50'>
                                    <td className='whitespace-nowrap p-3'>{user.username}</td>
                                    <td className='whitespace-nowrap p-3 '>
                                        <div className=' w-fit font-bold bg-gray-50 text-gray-700 border border-gray-200 p-1 rounded-lg'>
                                            <p>{roleLabel[user.role]}</p>
                                        </div>
                                    </td>
                                    <td className='whitespace-nowrap p-3' >{user.email}</td>
                                    {/* <td className='whitespace-nowrap p-3'>{user.status}</td> */}
                                    <td className='whitespace-nowrap p-3'>
                                        <div className={`w-fit  ${statusBadge[user.status]} border p-1 rounded-lg font-bold`}>
                                            <p>{statusLabel[user.status]}</p>
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
  )
}

export default UsersList