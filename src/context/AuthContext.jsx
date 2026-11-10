import { createContext,useContext,useState } from 'react';

export  const AuthContext = createContext(null);
export default function AuthProvider({ children }) {
    const [mode,setMode] = useState('signup')
    const [user,setUser] = useState(localStorage.getItem("currentUserEmail") ?
        { email: localStorage.getItem("currentUserEmail") }: null)
    const [name, setName] = useState('')
    
    function signup(email,password) {
        const users = JSON.parse(localStorage.getItem('users') || "[]")
        if (users.find(user => user.email === email)) {
            alert('User already exists')
            return {success:false,error:'User already exists'}
        }
        const newuser = { email,password }
        users.push(newuser)
        
        localStorage.setItem('users',JSON.stringify(users))
        //An indication that the use is logged in.
        localStorage.setItem('currentUserEmail', email)
        setUser({ email })
        return {success:true,message:'User created successfully'}
}
    function logout() {
        localStorage.removeItem('currentUserEmail')
        setUser(null)
    }

    function login(email,password) {
        const users = JSON.parse(localStorage.getItem('users') || "[]")
        const user = users.find(user => user.email === email && user.password === password)
        if (!user) {
            return {success:false,error:'Invalid email or password'}
        }
        localStorage.setItem('currentUserEmail', email)
        setUser({ email })
        return {success:true,message:'Login successful'}
    }

    function dologin() {
        setMode('Login')
        alert(`mode is ${mode}`)
    }
    function dosignup() {
        setMode('signup')
         alert(`mode is ${mode}`)

    }
    function sayHi() {
        alert('hi from context')
    }
    return (
        <AuthContext.Provider value={{  sayHi, dologin, dosignup, mode, signup, user, logout, login }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    const context = useContext(AuthContext)
    return context
}