import Link from "next/link";
const UserLayout = ({children})=>{
    return (
        <div>
          <div className="user-navbar">
            <p className="navbar-head">📖 Book Store</p>
            <div className="user-links">
            <Link href="/">Home</Link>
            <Link href="/userlogin">Login</Link>
            </div>
          </div>
           {children}
        </div>
    )
}

export default UserLayout;