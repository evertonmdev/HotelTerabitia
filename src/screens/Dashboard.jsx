import React, { useContext, useEffect } from 'react'
import { Context } from '../Context'
import { Chart } from 'react-google-charts';

import TailConfigs from '../../tailwind.config'
import SetValueDiaria from '../components/SetValueDiaria';
import ButtomAction from '../components/ButtomAction';

import { ModalAlugarDiaria, ModalCalcularCombustivel, ModalListarHospedes, ModalManuntencaoDesconto, ModalPesquisarHospede, ModalReservarEvento, ModalReservarRestaurante } from '../components/Modals';

export const Dashboard = () => {
  const { nomeHotel, nomeDono } = useContext(Context)


  const data = [
    [
      "Dia",
      "Vendas pelo dia",
      "Alugados esse mês",
      "Retenção de clientes",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ];
  
  const options = {
    chart: {
      title: "Estatisticas do seu hotel",
      subtitle: "clientes por dia",
    },
  };

  return (
    <div className={`flex flex-col lg:grid lg:grid-cols-3 gap-10 my-20 bg-primary`}>
      <h3 className='text-lg md:text-xl font-semibold text-primary/80 w-full md:col-span-2 leading-snug'>Bem vindo ao Hotel {nomeHotel}, {nomeDono}.<br /> É um imenso prazer ter você por aqui!</h3>
      
      <div className='row-span-2 h-full flex gap-5 flex-col w-fit'>
        <SetValueDiaria />
      </div>

      <div className='my-2 flex gap-4 md:col-span-2 w-full rounded-xl justify-center items-center lg:justify-start text-[.9em] flex-wrap'>
        <ButtomAction text={"Alugar Diaria"} Modal={ModalAlugarDiaria} />
        <ButtomAction text={"Pesquisar hospede"} Modal={ModalPesquisarHospede} />
        <ButtomAction text={"Lista de hospedes"} Modal={ModalListarHospedes} />
        <ButtomAction text={"Reservar evento"} Modal={ModalReservarEvento} />
        <ButtomAction text={"Reservar Restaurante"} Modal={ModalReservarRestaurante} />
        <ButtomAction text={"Calcular Combustivel"} Modal={ModalCalcularCombustivel} />
        <ButtomAction text={"Manutenção menor preço"} Modal={ModalManuntencaoDesconto} />
      </div>


      <div className='flex flex-col gap-4 col-span-3 pt-10'>
        <div className='pr-9 py-3 border-b-2 border-zinc-400/50 w-fit'>
          <h3 className='font-bold text-lg'>Estatisticas | <span className='text-black/30'>Em breve...</span></h3>
        </div>
        <Chart
          chartType='AreaChart'
          width="100%"
          height="50vh"
          data={data}
          options={{
            ...options,
            backgroundColor: TailConfigs.theme.extend.backgroundColor.primary
          }}
        />
      </div>
    </div>
  )
}