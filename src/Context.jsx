import { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({children}) => {
    const [showModal, setShowModal] = useState(false)
    const [ModalChidren, setModalChildren] = useState(null)

    const ExistRoute = parseInt(localStorage.getItem("Route")) || 0
    const NomeHotel = localStorage.getItem("NomeHotel") || "mgtk Hotel"
    const NomeDono = localStorage.getItem("NomeDono") || "Sem nome"
    const ValorDiaria = parseInt(localStorage.getItem("valorDiaria")) || 0

    const [ActualScreen, setActualScreen] = useState(ExistRoute);
    const [nomeHotel, setNomeHotel] = useState(NomeHotel)
    const [nomeDono, setNomeDono] = useState(NomeDono)
    const [valorDiaria, setValorDiaria] = useState(ValorDiaria)

    const [refreshComponents, setRefreshComponents] = useState(false)
    
    const Refresh = () => {
        setRefreshComponents(true)
        setRefreshComponents(false)
    }

    const SetShowModal = () => setShowModal(!showModal)

    const Screens = ["Home", "Intro", "Dashboard"]
    const MapScreens = new Map()
    Screens.map((screen, index) => MapScreens.set(index, screen))

    const ChangeNomeHotel = newName => {
        localStorage.setItem("NomeHotel", newName)
        setNomeHotel(newName)
    }

    const ChangeNomeDono = newName => {
        localStorage.setItem("NomeDono", newName)
        setNomeDono(newName)
    }

    const ChangeScreen = valor => {
        if(!isNaN(valor)) {
            localStorage.setItem("Route", valor)
            setActualScreen(valor)
        } else {
            console.log("Route incorreto")
            return 
        }
    }

    const values = {
        ActualScreen, setActualScreen,
        ChangeScreen, 
        MapScreens,
        nomeDono, ChangeNomeDono,
        ChangeNomeHotel, nomeHotel, 
        Refresh, refreshComponents,
        showModal, SetShowModal,
        setModalChildren, ModalChidren,
        valorDiaria, setValorDiaria,
    }

    return (
        <Context.Provider value={values}>
            {children}
        </Context.Provider>
    )
}