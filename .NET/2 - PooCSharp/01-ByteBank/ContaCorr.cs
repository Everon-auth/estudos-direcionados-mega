using System;

namespace _ByteBank
{

public class ContaCorrente
{
    public Cliente titular = new Cliente();
    public int agencia;
    public int numero;
    public double saldo;



   private bool _PossoSacar(double valor)
    {
        if (saldo >= valor) return true;
        else return false;
    }
    public void Sacar(double valor)
    {
        if(_PossoSacar(valor))
        {
            Console.WriteLine("Sacando R$"+valor +" ..." );
            saldo -= valor;
            Console.WriteLine("Valor Restante: R$" + saldo);
        }
        else
        {
            Console.WriteLine("Você não pode sacar este valor pois sua conta não tem esse valor");

        }
    }

    public void Depositar(double valor)
    {
        saldo += valor;
        Console.WriteLine("Você recebeu um depósito de: R$"+valor);
    }

    public void transferir(double valor, ContaCorrente contaDestino)
    {
        if(this.saldo < valor)
            Console.WriteLine("Não foi possível fazer a transferencia por falta de saldo em sua conta.");
        else
        {
            this.saldo -= valor;
            contaDestino.Depositar(valor);
            Console.WriteLine("Transferencia concluída com sucesso!");
            Console.WriteLine("Saldo aual: R$"+ this.saldo);

        }
    }


}
}