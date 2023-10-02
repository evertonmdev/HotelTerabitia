import { useContext, useState } from 'react'
import {toast} from 'react-toastify'

import { Context } from '../../Context'
import ModalChildrenContainer from '../ModalChildrenContainer'
import ButtonAddHospede from '../ButtonAddHospede'
import FormRegisterHospede from '../FormRegisterHospede'
import TempContainerListHospedes from '../TempContainerListHospedes'
import HeaderModal from '../HeaderModal'
import TratarValorToBRL from '../../utils/tratarMoeda'


export const ModalAlugarDiaria = () => {
    const { nomeDono, valorDiaria, SetShowModal } = useContext(Context)

    const [addingAction, setAddingAction] = useState(false)
    const [hospedes, setHospedes] = useState(new Array)

    const [nomeHospede, setNomeHospede] = useState('')
    const [idadeHospede, setIdadeHospede] = useState(null)
    const [numeroDeDiarias, setNumeroDeDiarias] = useState(0)
    
    const pushHospede = () => {
        setAddingAction(false)
        let CloneHospede = hospedes.slice()
        CloneHospede.push({
            nomeHospede,
            idadeHospede: parseInt(idadeHospede)
        })

        setHospedes(CloneHospede)
        setNomeHospede('')
        setIdadeHospede(null)
    }

    const salvarHospedagem = data => {
        let dadosAnteriores = localStorage.getItem("hospedagens") || "[]"
        let newData = JSON.parse(dadosAnteriores)
        newData.push(data)

        localStorage.setItem("hospedagens", JSON.stringify(newData))
    }

    const finalizar = () => {
        let dadosAnteriores = localStorage.getItem("hospedagens") || "[]"
        let data = JSON.parse(dadosAnteriores)
        
        if(data.length > 14) {
            return toast.error("Seu hotel atingiu o limite de hospedes, por favor verifique a lista de hospedes.")   
        }

        if(hospedes.length <= 0 || parseInt(numeroDeDiarias) <= 0) {
            return toast.error("Verifique se você preencheu todos os campos corretamente.")
        }

        let gratuidade = 0
        let meia = 0

        let valorTotal = (hospedes.reduce((acc, act) => {
            if(act.idadeHospede > 60) {
                meia++
                return acc += parseInt(valorDiaria) / 2
            } else if(act.idadeHospede < 6 ) {
                gratuidade++
                return acc
            } else {
                return acc += parseInt(valorDiaria)
            }
        }, 0)) * parseInt(numeroDeDiarias)
        

        if(valorTotal <= 0) {
            return toast.error("A criança precisa de um responsavel.")
        }

        let mensagem = `${nomeDono}, o valor total das hospedagens é: ${TratarValorToBRL(valorTotal)}; ${gratuidade} gratuidade(s); ${meia} meia(s)`
        toast.success(mensagem, {
            theme: 'colored',
        })

        salvarHospedagem({
            data: hospedes,
            total: valorTotal,
            numeroDiarias: parseInt(numeroDeDiarias),
            meias: meia,
            gratuidades: gratuidade
        })

        SetShowModal()
    }


    return (
        <ModalChildrenContainer>
            <HeaderModal title={"Alugar Diaria"} />
            <div className='w-full border border-black/50 p-3 rounded-md'>
                <label htmlFor='numeroDiarias' className='text-sm'>Quantas diárias serão necessárias?</label>
                <input onChange={event => setNumeroDeDiarias(event.currentTarget.value)} id='numeroDiarias' type='number' required className='bg-transparent outline-none w-full ' />
            </div>

            <TempContainerListHospedes hospedes={hospedes} />
            {
                addingAction === false ? 
                <ButtonAddHospede finalizar={finalizar} setAddingAction={setAddingAction}  /> :
                <FormRegisterHospede 
                    idadeHospede={idadeHospede} 
                    nomeHospede={nomeHospede} 
                    setIdadeHospede={setIdadeHospede} 
                    setNomeHospede={setNomeHospede} 
                    handleSubmit={pushHospede} 
                />
            }
       </ModalChildrenContainer>
    )
}