# Depositária

## Automação de testes

Este projeto tem por finalidade automatizar os cenários de API da depositária.

O intuito desse projeto é entregar rapidez e confiança nos testes regressivos, proporcionar escalabilidade para automação de cenários futuros e servir como modelo para criação de outros projetos de automação.

---

### Dependências para utilização desta automação

Você deverá possuir os seguintes itens instalados em sua máquina para executar a automação:

- [Java 11+](https://www.oracle.com/java/technologies/downloads/#java11)
- [Maven 3.8.5+](https://maven.apache.org/download.cgi) (preferencialmente)

Para executar os comandos via terminal, é necessário que a pasta que contém os binários do _Java_ e do _Maven_ esteja referenciada nas variáveis de ambiente do sistema.

Caso você utilize um sistema Windows e tenha dificuldades na hora da configuração das variáveis de ambiente, por favor, veja essa [resposta do StackOverflow](https://pt.stackoverflow.com/questions/259927/como-configurar-vari%C3%A1veis-de-ambiente-maven-java) que lhe ajudará a realizar esse passo.  
Caso o sistema operacional utilizado seja alguma distro Linux, no momento da instalação o seu gerenciador de pacotes (apt, yum, pacman, etc) provavelmente já realizou essa configuração.

Em todo caso, se a configuração foi realizada corretamente, ao executar os dois comandos a seguir `java --version` e `mvn --version`, aparecerão informações sobre a versão instalada:

#### Para usuários de _Visual Studio Code_

Ao usar o _VS Code_ para dar manutenção neste projeto, utilize as extensões abaixo:

- [Extension Pack for Java](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
- [Karate Runner](https://marketplace.visualstudio.com/items?itemName=kirkslota.karate-runner)

Estas extensões auxiliam na execução de cenários individuais assim como na visualização de resultados de uma maneira mais rápida.

---

### Instalação

Para executar o código em sua máquina, basta clonar este repositório utilizando o comando abaixo:

```sh
git clone https://bitbucket.vericode.com.br/scm/cc/interops_contratos.git
```

---

### Execução

Após instalados todas as dependências e realizado o `git clone` na máquina, basta abrir um terminal na pasta do projeto e executar os comandos abaixo:

```sh
gcloud container clusters get-credentials tio-stg-01 --region southamerica-east1 --project cerc2-tio-stg-01
```

```sh
kubectl port-forward deployment/http-to-pubsub-proxy --namespace depositaria 3000
```
Esses dois comandos acima servem para fazer o redirecionamento de portas da API para a porta 3000.
Assim, basta enviar as requisições para localhost.

Para executar todos os cenários, execute o comando abaixo:

```sh
mvn clean test
```

Dessa forma, o _Maven_ executará todos os cenários escritos e retornará
um arquivo de resumo no final dos testes.

---

_Em construção..._
 
&NewLine;  
&NewLine;  
&NewLine;  

<p align="center">
  <a href="https://vericode.com.br">
    <img src='https://vericode.com.br/static/icon-c932686134d47a502612db18b4c1f971.png' title='Vericode | Trusting Digital Technologies' width=75 alt="Logo da Vericode"/>
  </a>
</p>
