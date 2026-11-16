# Uso de Inteligência Artificial

## Ferramenta e finalidade

Foi utilizado o **ChatGpt**, como apoio ao desenvolvimento do MeuPonto.

## Aplicações no projeto

### Acessibilidade

A IA foi utilizada principalmente para deixar a página mais acessível a leitores de tela, pois o projeto é voltado a pessoas com deficiência visual, foram implementado esses elementos:

- Identificação de elementos com `aria-label` e `aria-labelledby`.
- Destaque de foco na navegação por teclado.
- Mensagens de estado e erro com `role="status"` e `role="alert"`.
- Simplificação da consulta para ouvir todas as linhas com uma ação, sem selecionar uma linha.

### Saída de áudio do protótipo

A IA também auxiliou na implementação do hook `useAudio`, utilizando a síntese de voz do navegador.

O apoio incluiu a montagem das mensagens faladas, os controles de reprodução, repetição e interrupção, o tratamento de erros e o cancelamento do áudio ao sair do componente.

### Configuração e integração da API

A IA também ajudou a configuração do recurso de linhas no MockAPI e auxiliou na implementação do serviço de comunicação e do hook `useLinhas`.

Antes da adoção do MockAPI, houve uma tentamos integrar uma IA própria da SPTrans. Porém por algum motivo não estava funcionando então decidimos fazer com MockAPI, utilizando dados ficticios.

## Exemplos de interações

Entre as solicitações realizadas durante o desenvolvimento estão:

- Explicação do uso de `aria-label`.
- Implementação de foco visível para navegação por teclado.
- Criação da consulta por voz.
- Conexão do protótipo com o MockAPI.
- Implementação das operações de CRUD.
- Simplificação dos formulários para utilizar recursos estudados em aula.

## Análise crítica

O uso de IA ajudou a entender qual é melhor forma de deixar a página na forma mais acesível possível para deficientes visuais, ensinando conceitos com o `aria-label` e o foco visível para navegação de teclado. Também ajudou a implementação da saída de áudio do protótipo e da comunicação com a API, esclarecendo dúvidas.

A IA foi muito útil como ferramenta de apoio, principalmente na explicação desses conceito que não conhecíamos, mas que são essenciais para nossa ideia do projeto. Também foi muito útil para entender erros que estavam acontecendo, ou porque certos elementos da página não estavam da forma que nós pretendíamos.
