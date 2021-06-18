#GIT 


0. Oque são sitemas de versionamento?
<br>

    > Sistemas de versionamento são sistemas que criam repositórios diferentes do software por histórico de alteração, ou seja, ele faz uma cópia de estados diferentes durante o trabalho.
        Obs: ele não cria automaticamente, tem que ser dado os comandos necessários para a sincronização e criação de versão para o seu sitema de versionamento.

<br><br>
1.  Ferramentas de Versionamento mais utilizados:
    * Git.
    * CVS.
    * Subversion.
    * TFS.
    * Mercurial.
<br><br>

2. Softwares revisão de código:
    * Github
    * Collaborator
    * Crucible
<br><br>

3. Objetos do GIT:
    <br>
* Branch:
    <br>
   >É um ponteiro móvel para mover de uma ramificação para outra.
   As ramificações são ponteiros criados pelo desenvolvedor antes de fazer alguma modificação que pode acabar quebrando o código, assim encapsulando ele para recuperar oque foi quebrado.

<br>
    
* Head:

<br>

> É o ponteiro que indica qual a branch você está modificando.
     
* Tree:
<br>

> A Tree (Árvore) do git é o que data os arquivos das ramificações diferentes e compara para ver se houve modificações, se não gouver modificações o arquivo é datado como "mesclado".

<br>
* Bloob:
<br>

> A Blob são os arquivos do git.

<br>


<br><br>

4. Identificando alterações:

>O git identifica alterações pelas suas arvores, comparando uma com a outra e vendo oque já está idêntico e oque não está idêntico para mesclar depois. Ao contrário de alguns outros programas de versionamento o gir não faz exatamente uma cópia do arquivo, ele salva uma chave commit da parte do código para restaurar posteriormente o arquivo pelo commit feito. 




<br><br>

5. Comandos do GIT:

    * Comandos de Configuração do GIT:
    <br>

    ```        

        git config --global user.name "nome.de.usuario" -> Configura o nome do usuário local

        git config --global user.email "exemplo@email.com" -> Configura o email do usuário local
        
        git config --global merge.tool "nome do editor de texto" -> Configura o editor de texto padrão para o git

        git config --list -> Mostra todas as configurações do git.
    ```

    * Comandos de repositórios:
    <br>

    ```

        git init -> Inicializa o monitoramento de um projeto existente.

        git clone "URL do git" -> Clona um repositório existente.

        git add "Arquivo" -> Adiciona o arquivo ao monitoramento de alterações.

        git commit -m 'Comentário' -> Comenta algo para o repositório.

        git status -> Verifica os arquivos que fora mmodificados e lista quais suas modificações do ultimo repositório.

        git push origin master -> envia pra o github o seu repositório atual.

        git restore -> restaura o arquivo do repositório.

        git log -> Vizualiza os commits

        git pull "rep-remoto" -> Faz o download de um repositório remoto

        git remote add "URL" -> adiciona outro repositorio remoto junto aos já existentes.

        git diff -> mostra a diferença da ultima versão commitada.

        git reset "arquivo" -> Reseta o arquivo para um estado anterior commitado.

        git merge -> junta as ramificações.

        git log -> Mostra todos os commits de uma ramificação.

        git fetch -> busca seus repositórios online.

    ```
    <br>
    * Comandos de Ramificação:
    
    ```
        git branch "nome da ramifacação" -> Cria uma ramificação nova no git.

        git checkout "nome da ramifaicação" -> Entra na outra ramificação.

        git branch -d "nome da branch" -> deleta uma ramificação.

    ``` 

    * Outros comandos:

    ```
        git rm "arquivo" -> remove o arquivo do projeto.
        
        git mv "arquivo existente" "novo arquivo" -> move o arquivo existente para outro lugar e identifica esse lugar.

        git stash -> salva localmente os arquivos.
    
    ```