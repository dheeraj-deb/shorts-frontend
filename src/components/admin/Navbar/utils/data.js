import { AiFillDashboard } from "react-icons/ai"
import { FaUserCog } from "react-icons/fa"
import { MdVideoSettings } from "react-icons/md"
export const navLinks = [
    {
        id: 0,
        title: "Dashboard",
        icon: <AiFillDashboard className="nav-icon" />
    },
    {
        id: 1,
        title: "UserManagement",
        icon: <FaUserCog className="nav-icon" />
    },
    {
        id: 2,
        title: "PostManagement",
        icon: <MdVideoSettings className="nav-icon" />
    }
]