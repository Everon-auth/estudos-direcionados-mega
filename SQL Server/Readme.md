## Atualização de dados do contábil.

Atualiza os dados para a Contabilidade conforme a necessidade.

Primeiro roda a atualização dos planos de contas e depois atualiza os dados do DRE

~~~~sql
exec STCNTAtualizaPlanoContas; 
exec STCNTAtualizaDadosDRE '01/12/2021'; 
~~~~

## Revisão de SQL

### Criação de tableas

 * O nome de uma tabela pode conter até 128 caracteres.
 * O nome da tabela deve ser iniciado com uma caractere alfabético, após disso é possivel utilizar _ , @, #...
 * Cada nome de tabela deve ser único no banco de dados.

### CREATE TABLE

Cria uma tabela com as colunas desejadas.

* Há város tipos de dados e palavras reservadas para a criação das colunas.

Tipo | Exemplo de uso | Descrição
| -- | -- | -- |
int | id_Curso int | Cria uma coluna da tabela que aceita um valor inteiro. 
primary key | id_Curso int primary key | primary key => Cria na tabela uma coluna de valores únicos, sendo a chave principal de reconhecimento da lista de itens da tabela.  
varchar | DS_NomeCurso varchar(50) | Cria uma coluna da tabela que aceita texto com um limite de caracteres definido 
int | id_Curso int | Cria uma coluna da tabela que aceita um valor inteiro. 

~~~~sql
CREATE TABLE TBCursosExistentes(
id_curso int primary key, 
DS_NomeCurso varchar(50), 
); 
~~~~

### SELECT ->

### UPDATE ->

Atualiza os dados de uma linha da tabela.
* Lembrar de sempre utilizar a condição **where**.

~~~~sql
UPDATE TBCursosExistentes
SET DS_NomeCurso = 'Python', id_curso = 2
WHERE id_curso = 1; 
~~~~

~~~~sql
/* Inserir métodos de updates avançados. */
~~~~

### DELETE ->

Deleta uma linha de dados de uma tabela.

~~~~sql
delete from TBCursosExistentes where id_curso = 8; 
~~~~

### INSERT ->

Insere dados em uma tabela.

~~~~sql
insert into TBCursosExistentes(id_curso,DS_NomeCurso) Values (2,'Javascript');
insert into TBCursosExistentes(id_curso,DS_NomeCurso) Values (3,'Ruby');
insert into TBCursosExistentes(id_curso,DS_NomeCurso) Values (4,'CSharp');
insert into TBCursosExistentes(id_curso,DS_NomeCurso) Values (5,'AspNet Core');
insert into TBCursosExistentes(id_curso,DS_NomeCurso) Values (6,'Node');
insert into TBCursosExistentes(id_curso,DS_NomeCurso) Values (7,'Java');
insert into TBCursosExistentes(id_curso,DS_NomeCurso) Values (8,'Kotlin');
~~~~


<!-- ## DECLARE -> 

Declara uma variavel para não precisar executar um comando novamente.

~~~~sql

~~~~ -->