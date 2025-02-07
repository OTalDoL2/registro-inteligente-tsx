import Record from '@/interface/Record';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { useSelector } from 'react-redux';

function structure_html(records: any, working_months: string): string {
    

    let rows = '';
    records.forEach((element: Record) => {
        rows += `
            <tr>
            <td>${element['carregamento']}</td>
            <td></td>
            <td>${element['cidade']}</td>
            <td>${element['valor']}</td>
            <td>${element['dataEntrega']}</td>
            <td>${element['observacao']}</td>
            </tr>
        `
    });

    if (records.length < 15) {
        for (let index = 0; index < 15 - records.length; index++) {
            rows += '<tr> <td style="color: white;"> a </td> <td> </td> <td> </td> <td> </td> <td> </td> <td> </td> </tr>'
        }
    }

    const html = `
      <html>
        <head>
          <style type="text/css">
          @page{
            size: A4 landscape; 
            margin: 20mm;
          }
          body { margin: 0px; }
            
          .container{
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100vw;
              height: 100vh;
          }

          table {
              width: 95vw;
              border: 1px solid black;
              font-size: 18px;
          }
          
          th { justify-content: space-between; }
          td, th{ border: 1px solid black; justify-content: center; text-align: center;}
        </style>
        </head>

        <body>
          <div class="text" style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; width: 90%; margin-left: 5%;">
              <p>RELATÓRIO DE CARGA MENSAL</p>
              <p>MÊS DE ${working_months}</p>
          </div>
          <div class="container">
            <table>
              <tr>
                <th style="width: 5%">Carregamento</th>
                <th style="width: 5%">Cod. Disp</th>
                <th style="width: 25%">Cidades</th>
                <th style="width: 10%">Valor do frete</th>
                <th style="width: 15%">Data da Entrega</th>
                <th style="width: 40%;">Observações</th>
              </tr>
              ${rows}
            </table>
          </div>
      </html>
    `;
    return html;
}

function month_formatter(init_month: string, end_month: string): string {
    let _init_month = parseInt(init_month);
    let _end_month = parseInt(end_month);

    const months: { [key: number]: string } = {
        1: "JANEIRO",
        2: "FEVEREIRO",
        3: "MARÇO",
        4: "ABRIL",
        5: "MAIO",
        6: "JUNHO",
        7: "JULHO",
        8: "AGOSTO",
        9: "SETEMBRO",
        10: "OUTUBRO",
        11: "NOVEMBRO",
        12: "DEZEMBRO",
    };

    return `${months[_init_month]}/${months[_end_month]}`;
}

export default async function generatePdf(records: any, init_month: string, end_month: string) { 
    console.log('ebtriy')
    // const records = useSelector((state: any) => state.record.records);
    console.log('densola')
    const working_months = month_formatter(init_month, end_month);

    const file = await printToFileAsync({
        html: structure_html(records, working_months),
        base64: false
    });

    await shareAsync(file.uri);
};

