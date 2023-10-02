import { useContext, useState } from 'react'
import { toast } from 'react-toastify'
import { Calculator } from 'lucide-react'

import { Context } from '../../Context'

import ModalChildrenContainer from '../ModalChildrenContainer'
import HeaderModal from '../HeaderModal'
import Input from '../Input'
import Button from '../Button'

export const ModalCalcularCombustivel = () => {
    const { nomeDono } = useContext(Context) 
    const [valorAlcoolWayne, setValorAlcoolWayne] = useState(0)
    const [valorAlcoolStark, setValorAlcoolStark] = useState(0)
    const [valorGasolinaWayne, setValorGasolinaWayne] = useState(0)
    const [valorGasolinaStark, setValorGasolinaStark] = useState(0)

    const handleChangeAlcoolWayne = event => setValorAlcoolWayne(parseFloat(event))
    const handleChangeGasolinalWayne = event => setValorGasolinaWayne(parseFloat(event))
    const handleChangeAlcoolStark = event => setValorAlcoolStark(parseFloat(event))
    const handleChangeGasolinaStark = event => setValorGasolinaStark(parseFloat(event))

    const CalcularMelhorPosto = () => {
        const prcGasolinaStark = (valorGasolinaStark / 100) * 30
        const prcGasolinaWayne = (valorGasolinaWayne / 100) * 30

        const alcoolWayneGood = (valorGasolinaWayne - valorAlcoolWayne) > prcGasolinaWayne ? true : false
        const alcoolStarkGood = (valorGasolinaStark - valorAlcoolStark) > prcGasolinaStark ? true : false

        if(valorGasolinaStark < valorGasolinaWayne) {
            if(alcoolStarkGood) {
                toast.info(`${nomeDono}, é mais barato abastecer com alcool no posto Stark Petrol`)
            } else {
                toast.info(`${nomeDono}, é mais barato abastecer com Gasolina no posto Stark Petrol`)
            }
        } else {
            if(alcoolWayneGood) {
                toast.info(`${nomeDono}, é mais barato abastecer com alcool no posto Wayne Oil`)
            } else {
                toast.info(`${nomeDono}, é mais barato abastecer com Gasolina no posto Wayne Oil`)
            }
        }
    }

    return (
        <ModalChildrenContainer>
            <HeaderModal title={"Calcular combustivel mais em conta"} />
            <Input type={"number"} handleChange={handleChangeAlcoolWayne} title={"Qual o valor do álcool no posto Wayne Oil?"} />
            <Input type={"number"} handleChange={handleChangeGasolinalWayne} title={"Qual o valor da gasolina no posto Wayne Oil?"} />
            <Input type={"number"} handleChange={handleChangeAlcoolStark} title={"Qual o valor do álcool no posto Stark Petrol?"} />
            <Input type={"number"} handleChange={handleChangeGasolinaStark} title={"Qual o valor da gasolina no posto Stark Petrol?"} />


            <Button className={"hover:bg-actionSecondary hover:text-secondary cursor-pointer"} onClick={CalcularMelhorPosto} Icon={Calculator} placeholder={"Calcular"} />
        </ModalChildrenContainer>
    )
}

