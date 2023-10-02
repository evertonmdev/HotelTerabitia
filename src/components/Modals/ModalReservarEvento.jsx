import { useContext, useState, useEffect } from 'react'
import { ArrowRightCircle } from 'lucide-react'
import {toast} from 'react-toastify'

import Input from '../Input'
import Button from '../Button'
import { Context } from '../../Context'
import ModalChildrenContainer from '../ModalChildrenContainer'
import HeaderModal from '../HeaderModal'
import TratarValorToBRL from '../../utils/tratarMoeda'


export const ModalReservarEvento = () => {
    const { nomeDono } = useContext(Context)

    
    const [numeroDeConvidados, setNumeroDeConvidados] = useState(0)
    const [numeroDeGarcons, setNumeroDeGarcons] = useState(0)
    const [horasDeEvento, setHorasDeEvento] = useState(0)
    const [custoTotal, setCustoTotal] = useState(null)
    const [ auditorio, setAuditorio ] = useState(null)

    
    const handleNumConvidados = event => {
        if(event <= 350 && event > 0) {
            setNumeroDeConvidados(event)
        } else if (event <= 0) {
            setNumeroDeConvidados(0)
        } else {
            toast.error("Quantidade de convidados superior à capacidade máxima.")

        }
    }

    const atualizar = () => {
        const custoDosGarconsPorHora = parseInt(numeroDeGarcons) * 1050
        const custoTotalGarcons = custoDosGarconsPorHora * parseInt(horasDeEvento)

        const litrosCafeNecessarios = Math.ceil((numeroDeConvidados * 0.2)) 
        const litrosAguaNecessarios = Math.ceil((numeroDeConvidados * 0.5)) 
        const centosNecessarios = Math.ceil((numeroDeConvidados * 7) / 100)
       
        const custoTotal = Math.floor(((litrosCafeNecessarios * 0.8) + (litrosAguaNecessarios * 0.4) + (centosNecessarios * 34)) * 100) + custoTotalGarcons
    
        const auditorioLaranja = numeroDeConvidados <= 150 ? "Use o auditório Laranja" :
                                 numeroDeConvidados <= (150 + 70) ? `Use o auditório Laranja (inclua mais ${(numeroDeConvidados - 150)} cadeiras)` :
                                 null
        const auditorioColorado = numeroDeConvidados <= 350 ? "Use o auditório Colorado" : null
    
        const auditorio = numeroDeConvidados > 0 ? auditorioLaranja || auditorioColorado : null

        setAuditorio(auditorio)
        setCustoTotal(custoTotal)
    }

    const finalizar = () => {
        toast.success(`${nomeDono}, reserva efetuada com sucesso.`)
        const data = JSON.stringify({
            numeroDeGarcons,
            horasDeEvento,
            custoTotal
        })
        localStorage.setItem("reservaEvento", data)
    }

    useEffect(() => {
        atualizar()
    }, [numeroDeGarcons, horasDeEvento, numeroDeConvidados])

    return (
        <ModalChildrenContainer>
            <HeaderModal title={"Reservar Evento"} />

            <Input type={"number"} handleChange={event => setHorasDeEvento(event)} title={"Qual a duração do evento em horas ?"} />       
            <Input type={"number"} handleChange={event => setNumeroDeGarcons(event)}  title={"Quantos garçons serão necessários?"} />
            <Input type={"number"} value={numeroDeConvidados}  handleChange={handleNumConvidados}  title={"Qual o número de convidados para o evento?"} />
           
           <div>
                {
                    custoTotal ? 
                    <p className='mt-5 text-xsm rounded-xl  w-fit'>
                        Custo total: <span className='text-actionSecondary font-bold py-2 text-xsm rounded-r-xl'>{TratarValorToBRL(custoTotal)}</span>
                    </p>
                    : null
                }
                {
                    auditorio ?
                        <h3>{auditorio}</h3>
                    : null
                }
           </div>

            <Button onClick={finalizar} placeholder={"Confirmar"} Icon={ArrowRightCircle} className={"hover:bg-actionSecondary hover:text-secondary mt-5"} />
        </ModalChildrenContainer>
    )
}
