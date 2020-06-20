
![sd](https://user-images.githubusercontent.com/49373874/85213024-5c347d00-b32f-11ea-81fd-23e909e7f4b4.jpeg)


# 💻 Tipos de sistemas distribuídos 💻

## Sistemas de Computação Distribuídos 

Utilizada para tarefas de computação de alto desempenho. Geralmente, utilizados para processamento de grandes conjuntos de dados (Computação intensiva)

- Computação em cluster
  - Um conjunto de computadores conectados em rede de alta velocidade sendo utilizado, em geral, para programação paralela.
- Computação em grade
  - Conjunto de computadores de diferentes hardwares, softwares, tecnologia de rede e pertencentes a organizações diferentes.
- Computação em nuvem 
  - Conjunto de serviços de computação, incluindo servidores, armazenamento, bancos de dados, rede, software, análise e inteligência, sob demanda por meio da Internet com definição de preço de pagamento conforme o uso.

### Algumas aplicações:
  - Pesquisa da cura de doenças (AIDS, câncer)
  - Descoberta de vida Extra-Terrestre
  - Processamento de imagens (NASA)
  - Processamentos de dados climáticos

## Sistemas de Informação Distribuídos 

Têm como característica a integração das aplicações existentes. O principal desafio é a interoperabilidade das aplicações, isto é, uma aplicação conseguir “conversar” com a outra aplicação.

- Sistema de Processamento de Transação
  - Em geral, são aplicações centradas em transações de banco de dados. A aplicação é formada por um conjunto de transações.
As transações devem ser:
    - **Atómicas**: transação é indivisível
    - **Consistentes**: não viola invariantes do sistema
    - **Isoladas**: Permite transações concorrentes
    - **Duráveis**: após o “commit” de uma transão as alterações feitas ficam gravadas
    
- Integração de Aplicações Empresariais
  - São sistemas onde os componentes de aplicações se comunicam diretamente um com o outro, e não por meio de um sistema de processamento de transação.  
Muitos modelos de comunicação entre aplicações:
    - **Chamadas de procedimento remoto** (RPC – Remote Procedure Calls)
    - **Inovações de método remoto** (RMI – Remote Method Invocations)
    - **Middleware orientado a mensagem** (MOM – Message-oriented Middleware)

## Sistemas Pervasivos

Sistemas Distribuídos em que nós são pequenos, mantidos por bateria, móveis, passíveis de conexão através de rede sem fio e geralmente embutidos em um sistema maior.

- Sistemas domésticos 
  - Sistemas que apresentam um ou mais computadores pessoais, televisão, backup, celulares, geladeira, câmeras de vigilância, iluminação interlogados aravés de uma rede.
- Sistemas de saúde distribuídos
  - Sistemas equipados com sensores organizados sobre o corpo humano (BAN – Body Area Network).
- Redes de sensores
  - consiste em dezenas a centenas de milhares de nós relativamente pequenos, cada um equipado com um dispositivo de sensoriamento

## Middleware

Sistema que se encontra entre o sistema operacional e os aplicativos nele executados. Funcionando de forma essencial como uma camada oculta de tradução, o middleware permite a comunicação e o gerenciamento de dados para aplicativos distribuídos.

Serviços típicos:

- Facilidades de comunicação
- Nomeação
- Persistência
- Transações distribuı́das
- Segurança
