---
---

# Versão 3

Especificação para contrução da API versão 3

# Configuração da sessão

Para configurar uma sessão, é necessário escolher um _tipo de voto_ e um _modo de votação_, pesos e critérios de desempate personalizados podem ser configurados, se necessário.

---

## Tipos de Voto

Possíveis tipos de votos a serem aplicados em determinadas sessões de votação, esses tipos não podem ser mesclados ou alterados após o início da sessão.

- Voto binário:

  - Um voto simples que só permite responder _Sim_ ou _Não_.

- Voto nota:

  - Consiste na aplicação de uma nota de _1 a 5_.

- Voto Enumerado:
  - Consiste em escolher uma opção entre um dos _valores personalizados pré-determinados_.

---

## Modos de Voto

os tipos de votos listados acima podem ser aplicados aos seguintes modos.

### Modo de votação simples

- Neste modo, você só pode escolher uma opção para cada pergunta e os pesos são aplicáveis (simples assim).

### Modo de classificação

- Este modo de votação consiste em vários itens de votação para serem votados sobre um assunto, para consolidar e formar um resultado de classificação. Se desejar, pesos e critérios de desempate podem ser configurados para este modo.

---

## Pesos

- Para sessões de votação que utilizam o modo de ranking, podem ser aplicados pesos personalizados para cada item de votação, esses pesos serão um valor percentual adicional adicionado ao peso do item, esses valores devem ser de 0 (padrão) a 100 e serão aplicados a cada tipo da seguinte forma:

_Para uma melhor compreensão, usaremos o valor 50 como valor de peso, esse valor significa que o valor real a ser calculado será de 150%, 50% maior que o valor padrão._
