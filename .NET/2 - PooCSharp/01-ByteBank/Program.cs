using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace _ByteBank
{
    class Program
    {
        static void Main(string[] args)
        {
            ContaCorrente contaGabriela = new ContaCorrente();
            ContaCorrente contaGab = new ContaCorrente();

            contaGabriela.titular.nome = "Gabriela Alves";
            contaGabriela.titular.CPF = "000.000.000-20";
            contaGabriela.titular.profissao= "TI - Tristeza e Insegurança";
            contaGabriela.agencia = 187;
            contaGabriela.numero = 35415514;
            contaGabriela.saldo = 1200.50;


            contaGab.titular.nome = "Gabriel";
            contaGab.titular.CPF = "000.000.000-21";
            contaGab.titular.profissao = "IT - A Coisa";
            contaGab.agencia = 187;
            contaGab.numero = 35415515;
            contaGab.saldo = 150.75;


            Console.WriteLine("Saldo atual: R$"+contaGabriela.saldo);
            // contaGabriela.Sacar(10000);
            // contaGabriela.Depositar(250);
            // contaGabriela.transferir(300, contaGab);

            Console.WriteLine("Dados do Cliente: \n Nome: " + contaGabriela.titular.nome+ "\n CPF: "+ contaGabriela.titular.CPF+ "\n Profissão: "+ contaGabriela.titular.profissao);
            Console.ReadLine();
        }
    }
}
