import { useState } from 'react'
import { Check, Plus, X } from "lucide-react" 
import {toast} from 'react-toastify'

import ModalChildrenContainer from '../ModalChildrenContainer'
import HeaderModal from '../HeaderModal'
import TratarValorToBRL from '../../utils/tratarMoeda'

import Input from '../Input'
import Button from '../Button'


export const ModalManuntencaoDesconto = () => {
    const [empresas, setEmpresas] = useState([])
    const [showAddEmpresa, setShowAddEmpresa] = useState(false)

    const [nomeEmpresa, setNomeEmpresa] = useState("")
    const [valorAparelho, setValorAparelho] = useState("")
    const [qntAparelhos, setQtdAparelhos] = useState("")
    const [prctgDesconto, setPrctgDesconto] = useState("")
    const [minQtdDesconto, setMinQtdDesconto] = useState("")
    
    const onChangeNomeEmpresa = event => setNomeEmpresa(event)
    const onChangeValorAparelho = event => setValorAparelho(event)
    const onChangeQtdAparelhos = event => setQtdAparelhos(event)
    const onChangePrctgDesconto = event => setPrctgDesconto(event)
    const onChangeMinQtdDesconto = event => setMinQtdDesconto(event)
    
    const HandleSwitch = () => setShowAddEmpresa(!showAddEmpresa)

    const handleSubmit = () => {
        let actualEmpresas = empresas.slice()
        if(nomeEmpresa.trim() == "" || valorAparelho.trim() == "" || qntAparelhos.trim() == "" || prctgDesconto.trim() == ""|| minQtdDesconto.trim() == "" ) {
            toast.error("Por favor verifique todos os campos.")
            return null
        }
        
        const precoAparelhoInt = valorAparelho.toString().replace(/[^0-9]/g, '');
        const precoManuntencao = (parseInt(qntAparelhos) * parseInt(precoAparelhoInt))
        var precoTotal = precoManuntencao
        var desconto = false

        if(parseInt(qntAparelhos) > parseInt(minQtdDesconto)) {
            desconto = (precoManuntencao / 100) * parseFloat(prctgDesconto)
            precoTotal = precoManuntencao - desconto
        }

        const data = {
            nomeEmpresa,
            valorAparelho,
            qntAparelhos,
            prctgDesconto,
            minQtdDesconto,
            desconto,
            precoTotal
        }
        actualEmpresas.push(data)
        toast.success(`Empresa ${nomeEmpresa} adicionada com sucesso.`)

        setEmpresas(actualEmpresas)
        setNomeEmpresa("")
        setValorAparelho("")
        setQtdAparelhos("")
        setPrctgDesconto("")
        setMinQtdDesconto("")
        HandleSwitch()
    }
    
    return (
        <ModalChildrenContainer>
            <HeaderModal title={"Calcular combustivel mais em conta"} />

            {
                empresas.length > 0 ?
                <div className='w-full max-h-[70%] flex flex-col justify-center items-center gap-3 overflow-y-auto'>
                    {
                        empresas.map((e, index) => {
                            return (
                                <div className='flex w-full items-center justify-between gap-6 border border-black/50 px-4 py-2 rounded-lg'>
                                    <h3 className='font-semibold font-mono text-sm'>{e.nomeEmpresa}</h3>
                                    
                                    {
                                        e.desconto ? 
                                        <span className='text-actionDark'>
                                            -{TratarValorToBRL(e.desconto)} | -{e.prctgDesconto}%
                                        </span>
                                        : null
                                    }

                                    <div>
                                        <span>{e.qntAparelhos}x</span>
                                        <span>  {TratarValorToBRL(e.precoTotal)}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
                : null 
            }

            {
                showAddEmpresa ?
                <div className='flex flex-col gap-3 border border-actionSecondary p-3 rounded-xl'>
                    <Input handleChange={onChangeNomeEmpresa} title={"Qual o nome da empresa?"} />
                    <Input value={TratarValorToBRL(valorAparelho)} handleChange={onChangeValorAparelho} title={"Qual o valor por aparelho?"} />
                    <Input type={"number"} handleChange={onChangeQtdAparelhos} title={"Qual a quantidade de aparelhos?"} />
                    <Input type={"number"} handleChange={onChangePrctgDesconto} title={"Qual a porcentagem de desconto?"} />
                    <Input type={"number"} handleChange={onChangeMinQtdDesconto} title={"Qual o número mínino de aparelhos para conseguir o desconto?"} />
                </div> :
                null
            }
            {
                showAddEmpresa ?
                <div className='flex gap-2 mt-4'>
                    <Button placeholder={"Confirmar dados"} Icon={Check} onClick={handleSubmit} className={"hover:bg-actionSecondary hover:text-secondary cursor-pointer"} />
                    <Button placeholder={"Descartar"} Icon={X} onClick={HandleSwitch} className={"hover:bg-action hover:text-secondary cursor-pointer"} />
                </div>
                : <Button placeholder={"Adicionar serviço"} Icon={Plus} onClick={HandleSwitch} className={"hover:bg-actionSecondary hover:text-secondary cursor-pointer"}/> 
            }
        </ModalChildrenContainer>
    )
}
