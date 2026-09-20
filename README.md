# Acolhe

> Protótipo front-end para apoio informativo e autocuidado em saúde mental.

## Visão geral

O Acolhe é uma iniciativa acadêmica em estágio inicial voltada à concepção de uma experiência web leve, responsiva e orientada a dispositivos móveis. A proposta é oferecer um ponto de entrada acessível para pessoas em regiões com conectividade limitada, reunindo recursos de autocuidado, conteúdos informativos e orientações para busca de suporte especializado.

O projeto não realiza diagnóstico, triagem clínica, atendimento psicológico ou intervenção em crise. Seu papel é complementar e informativo: facilitar o acesso inicial a recursos e direcionar o usuário a serviços conduzidos por profissionais e organizações qualificadas.

## Escopo da etapa atual

Nesta fase, o repositório contempla exclusivamente o desenvolvimento do front-end e a validação da arquitetura de informação. As telas utilizam conteúdo estático e dados fictícios para permitir a avaliação da navegação, da clareza das mensagens e da identidade visual.

Não fazem parte do escopo atual:

- persistência de dados ou banco de dados;
- autenticação, contas de usuário ou controle de sessão;
- prontuários, registros clínicos ou coleta de informações sensíveis;
- atendimento por profissionais de saúde;
- integração com serviços externos de emergência ou de teleatendimento.

## Funcionalidades previstas para o protótipo

- Página inicial com apresentação da proposta e acesso aos recursos disponíveis;
- check-in emocional para registro demonstrativo do estado percebido pelo usuário;
- diário com registros simulados;
- área de conteúdos educativos sobre saúde mental;
- diretório de canais e locais de apoio;
- página de orientação e encaminhamento para situações que demandem ajuda.

A definição final dessas funcionalidades dependerá da validação do grupo e da evolução dos requisitos do projeto.

## Tecnologias

| Tecnologia | Finalidade |
| --- | --- |
| HTML5 | Estrutura semântica e conteúdo das interfaces |
| CSS3 | Estilização, responsividade e identidade visual |
| JavaScript | Interações locais e comportamento do protótipo |
| Git e GitHub | Controle de versão e colaboração |


## Estrutura do repositório

```text
projeto/
├── index.html
├── pages/
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── README.md
```

Atualmente, a página inicial está implementada em `index.html`. A estrutura de diretórios poderá ser expandida conforme novas interfaces e ativos forem adicionados.

## Execução local

Como o protótipo atual é estático, não requer instalação de dependências nem servidor de aplicação. Abra o arquivo `index.html` em um navegador compatível com HTML5.

Para recursos que dependam de carregamento via HTTP, recomenda-se executar um servidor estático local durante o desenvolvimento.

## Diretrizes de acessibilidade e experiência

- Priorizar navegação por teclado e estrutura semântica em HTML;
- manter linguagem acolhedora, objetiva e não estigmatizante;
- projetar primeiro para telas pequenas e conexões de baixa qualidade;
- reduzir o peso de imagens, fontes e dependências externas;
- garantir contraste, legibilidade e feedback claro nas interações;
- disponibilizar informações de suporte em locais de fácil acesso.

## Considerações de segurança e responsabilidade

Por tratar de saúde mental, qualquer evolução que inclua coleta, armazenamento ou compartilhamento de dados deverá ser precedida de requisitos de privacidade, segurança da informação e conformidade legal. Informações de emergência devem ser apresentadas com clareza, mas não substituem serviços profissionais ou oficiais.

No Brasil, o Centro de Valorização da Vida (CVV) atende pelo telefone **188**, 24 horas por dia. Em uma emergência imediata, o usuário deve buscar os serviços de urgência locais.

## Status

Em desenvolvimento — protótipo front-end inicial.
