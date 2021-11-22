using System;
public class Produto{
public string Descricao;
public decimal Preco;
public int Estoque;
public void salvarProduto()
{
if(Descricao.Length > 50){
return;
}
if(Preco < 0){
return;
} 
if(Estoque < 0){
return;
} 
        //Salvar produto no Databasae
}
}