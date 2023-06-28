'use client'



export const UserContext =  createContext({} as iUserContext)

export const UserProvider = ({ children }: iUserContextProps) => {

    const [user, setUser] = useState<iUser | null>(null)

    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("@Hamburgueria:TOKEN")
        const userId = localStorage.getItem("@Hamburgueria:USER-ID")
        if(token && userId != null){
            const userIdJson = JSON.parse(userId)
            const userAutoLogin = async () =>{
                try {
                    const response = await api.get(`/users/${userIdJson}`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(response.data)
                    navigate('/shop')
                    toast.success('Auto login com sucesso')
                } catch (error) {
                    console.error(error)
                }
            }
            userAutoLogin()
        }
    }, [])



    const userLogin = async (data : iLoginFormData) =>{
        try {
            const response = await api.post<iUserResponse>('/login', data)
            window.localStorage.clear()
            window.localStorage.setItem("@Hamburgueria:TOKEN", response.data.accessToken)
            window.localStorage.setItem("@Hamburgueria:USER-ID", JSON.stringify(response.data.user.id))
            setUser(response.data.user)
            navigate('/shop')
            toast.success('Usuario Logou com sucesso')
        } catch (error) {
            const currentError = error as AxiosError<iApiError>
            console.error(currentError)
        }
    }

    const userLogout = () =>{
        window.localStorage.removeItem("@Hamburgueria:TOKEN")
        window.localStorage.removeItem("@Hamburgueria:USER-ID")
        setUser(null)
        navigate('/')
    }

    return(
        <UserContext.Provider value={{
            user,
            setUser,
            userLogin,
            userLogout,
        }}>
            { children }
        </UserContext.Provider>
    )
}