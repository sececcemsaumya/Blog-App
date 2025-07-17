import Link from "next/link";
import CreateBlog from "./adminpage/page";
const AdminLayout = ({children})=>{
    return (
        <div>
            <div className="admin-navbar">
            <p className="navbar-head">Admin</p>
            <div className="admin-links">
            <Link href="/adminlogin">Home</Link>
            <Link href="/adminabout">About</Link>
            <Link href="/adminlogin">Login</Link>
            </div>
             </div>
          {children}
        </div>
    )
}

export default AdminLayout;