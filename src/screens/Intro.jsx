import { useContext, useState } from "react"

import { Context } from "../Context"
import CardIntro from "../components/CardsIntro"
import FullsScreenCenter from "../components/FullsScreenCenter"

export const Intro = () => {
    const [actualStep, setActualStep] = useState(0)
    const { nomeHotel, ChangeNomeHotel, ChangeNomeDono, ChangeScreen, nomeDono } = useContext(Context)

    const inputNomeHotel = event => ChangeNomeHotel(event.currentTarget.value)
    const inputNomeDono = event => ChangeNomeDono(event.currentTarget.value)

    
    const nextStep = () => setActualStep(actualStep + 1)
    const finalStep = () => ChangeScreen(2)
    
  
    return (
        <div className="IntroGrid min-h-screen w-full overflow-hidden relative ">
            <FullsScreenCenter className={"cardContainer " + (actualStep === 0 ? "block" : "hidden")}>
                <CardIntro
                    mode={"question"}
                    title="Ótima escolha!"
                    question={"Para comerçamos por favor me informar o nome do seu hotel?"}
                    placeholder={"Nome"}
                    onSubmit={nextStep}
                    onChange={inputNomeHotel}
                />
            </FullsScreenCenter>
            <FullsScreenCenter className={"cardContainer "  + (actualStep === 1 ? "block" : "hidden")}>
                <CardIntro 
                    mode={"question"}
                    title={`${nomeHotel} é um bom nome`}
                    question={"agora me diga seu nome:"}
                    placeholder={"Seu nome"}
                    onSubmit={nextStep}
                    onChange={inputNomeDono}
                />
            </FullsScreenCenter>
            <FullsScreenCenter className={"cardContainer "  + (actualStep === 2 ? "block" : "hidden")}>
                <CardIntro 
                    mode={"finally"}
                    title={`Bem vindo ao ${nomeHotel}, ${nomeDono}`}
                    question={"Tudo pronto!"}
                    placeholder={"Seu nome"}
                    onSubmit={finalStep}
                    onChange={inputNomeDono}
                />
            </FullsScreenCenter>
        </div>
    )
}
