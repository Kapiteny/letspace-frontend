import { Bell, Building2, ChevronDown, LogOut, Settings, UserRound } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleCloseMenu = (e: MouseEvent) => {
            // console.log(menuRef.current.contains(e.target as Node))
            console.log(e)
            if (menuRef.current) {
                setOpenMenu(false);
            };
        };

        document.addEventListener("mousedown", handleCloseMenu);

        return () => {
            document.addEventListener("mousedown", handleCloseMenu);
        }
    },[]);

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };
  return (
    <header className="w-full fixed bg-white flex items-center justify-between shadow top-0  px-4 lg:px-40 py-3">
        {/* left header */}
        <div className="flex items-center gap-3">
            {/* logo */}
            <div className="bg-gradient-to-br from-blue-600/90 to-purple-700/90 backdrop-blur-sm rounded-2xl p-4">
                <Building2 className="h-6 w-6 text-white" />
            </div>
            {/* app name */}
            <div className="flex flex-col">
                <h1 className="font-bold text-lg">Let Space</h1>
                <h3 className="hidden lg:block text-sm text-gray-500">Gestion immobilère</h3>
            </div>
            {/* role */}
            <div className="hidden lg:block bg-gradient-to-r from-red-600 to-pink-700 rounded-lg">
                <h2 className="text-white text-sm m-1 text-center"> Administrateur</h2>
            </div>
        </div>

        {/* right header */}
        <div className="relative flex items-center gap-5">
            {/* notifications */}
            <div className="relative hover:bg-gray-200 hover:rounded-2xl p-3 cursor-pointer w-fit">
                <Bell className="h-5 w-5" />
                <div className="absolute bg-red-700 rounded-full p-1 min-w-5 h-5 flex items-center justify-center top-0 right-0">
                    <p className="text-white font-light text-xs">3</p>
                </div>
            </div>
            <div 
                className="flex items-center justify-center lg:gap-3 hover:bg-gray-200 hover:rounded-full p-2 cursor-pointer"
                onClick={handleOpenMenu}
                ref={menuRef}
            >
                <div className="bg-gradient-to-br from-blue-600/90 to-purple-700/90 rounded-full p-2">
                    <h3 className="text-white font-bold text-sm text-center">AU</h3>
                </div>
                <div className="flex flex-col">
                    <h1 className="hidden lg:block font-light text-sm">Admin User</h1>
                    <h3 className="hidden lg:block text-sm text-gray-500">admin@gmail.com</h3>
                </div>
                <div className="hidden lg:block">
                    <ChevronDown className="h-5 w-5" />
                </div>
            </div>
            {
                openMenu && (
                    <div className="absolute bg-white shadow-md rounded-sm border-gray-500 w-auto lg:w-full top-16 -left-24 lg:left-0 z-10 p-3">
                        <div className="flex items-center gap-5 px-5 border-b-2">
                            <div className="bg-gradient-to-br from-blue-600/90 to-purple-700/90 rounded-full p-2">
                                <h3 className="text-white font-bold text-sm text-center">AU</h3>
                            </div>
                            <div className="flex flex-col mb-3">
                                <h1 className="font-light text-sm">Admin User</h1>
                                <h3 className="text-sm text-gray-500">admin@gmail.com</h3>
                                <div className="bg-gradient-to-r from-red-600 to-pink-700 rounded-lg">
                                    <h2 className="text-white text-sm m-1 text-center"> Administrateur</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 border-b-2">
                            <div className="flex items-center gap-5 px-5 py-3 cursor-pointer hover:bg-gray-200 h-9 rounded-lg mt-1">
                                <UserRound className="h-5 w-5 text-gray-500" />
                                <h3 className="font-light text-sm">Mon profil</h3>
                            </div>
                            <div className="flex items-center gap-5 px-5 py-3 cursor-pointer hover:bg-gray-200 h-9 rounded-lg mb-1">
                                <Settings className="h-5 w-5 text-gray-500" />
                                <h3 className="font-light text-sm">Paramètres</h3>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 px-5 py-3 hover:bg-gray-200 hover:text-red-600 cursor-pointer h-9 rounded-lg mt-1">
                            <LogOut className="h-5 w-5 text-red-600" />
                            <h3 className="font-light text-sm">Déconnexion</h3>
                        </div>
                    </div>
                )
            }
        </div>
    </header>
  )
}

export default Header