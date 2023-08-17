# DECODIFICADOR E CODIFICADOR DE TEXTO

<p align="center">
  <img src="https://github.com/MARCIAHELENALIMA/Decodificador-texto-Challenge-ONE-Back-End/blob/main/descodificador.gif" alt="decodificador-texto" width="400">
</p>

Decodificador e decodificador de texto em HTML, CSS e JavaScript. A aplicação criptografa textos, assim você poderá trocar mensagens secretas com outras pessoas que saibam o segredo da criptografia utilizada.

As "chaves" de criptografia que usaremos são: A letra "e" é convertida para "enter" A letra "i" é convertida para "imes" A letra "a" é convertida para "ai" A letra "o" é convertida para "ober" A letra "u" é convertida para "ufat"

1. Requisitos
Deve funcionar apenas com letras minúsculas
Não deve ser usado letras com acentos nem caracteres especiais
Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original
Por exemplo: "gato" => "gaitober" gaitober" => "gato"

A página deve ter campos para inserir o texto a ser criptografado ou descrito, e a pessoa usuária deve poder escolher entre as duas opções
O resultado deve ser exibido na tela.

2. Extras
Um botão que copia o texto criptografado/descriptografado para a área de download - ou seja, que tenha a mesma funcionalidade do ctrl+Cou da opção "copiar" do menu dos aplicativos.

3. Desenvolvimento
3.1. HTML
O HTML fez de forma que ficou o mais semântico possível posicionando a tag maine dentro dela duas tags sectionuma onde fica a caixa de texto para o usuário digitar o que vai ser criptografado ou descrito e outro para mostrar o resultado.

**3.2. CSS**
Na parte de CSS optei por fazer o mais próximo do modelo proposto e fiz bastante uso do flexbox para dividir em colunas, alinhar os itens e deixar responsivo. Além disso, utilizei consultas de mídia para melhorar a responsividade.

**3.3. JavaScript**
tentando criar uma função de visibilidade que esconde a

onde fica a imagem e a mensagem de que ainda não tem texto para mostrar no resultado, a função também deixa visível a caixa de resultado e o botão de copiar.
Para criptografar e descrever criei duas funções que usam o replaceAll(). Para validar se o texto que foi digitado é válido utilizei funções anônimas distribuídas aos botões de criptografia que comparam o texto a um regex que aceita somente letras minúsculas e espaços, se a condição for atendida o resultado é mostrado, se não for, uma mensagem de erro aparece.

No botão de copiar, assim que clicado o texto é trocado de "Copiar" para "Copiado" e o fundo fica de uma cor mais escura para dar um feedback visual para o usuário. Além disso, coloque a função setTimeoutpara o texto e a cor voltarem ao original após 3 segundos.
