---
---

# Versão 1

Especificação para contrução da API versão 1

---

## Configuração

O usuário ao entrar no sistema, poderá configurar as seguintes opções:

- Tema da votação
- Votos únicos ou múltiplos
- Opções de voto
- Tempo de votação

### Tema da votação

O usuário deverá escolher um tema para a votação, que será exibido no topo da página, juntamente com uma descrição que será exibida abaixo do tema.

- O tema da votação é obrigatório.
- O tema da votação deverá ser uma string de no máximo 50 caracteres.
- A descrição da votação deverá ser uma string de no máximo 150 caracteres.

### Votos únicos ou múltiplos

O usuário deverá escolher se a votação será feita por votos únicos ou múltiplos. Ao escolher votos únicos, toda vez que o usuário votar em uma opção, o voto anterior será sobrescrito. Ao escolher votos múltiplos, os votos anteriores serão somados.

- Ao escolher votos únicos, o usuário deverá se identificar por um email.
- Ao escolher votos múltiplos, o usuário não deverá se identificar.

### Opções de voto

O usuário deverá escolher as opções de voto, que serão exibidas como botões na página. O usuário poderá adicionar quantas opções de voto quiser, porém deverá haver no mínimo 2 opções de voto.

- As opções de voto deverão ser únicas.
- As opções de voto deverão ser strings de no mínimo 1 caracter e máximo 50 caracteres.

### Tempo de votação

O usuário deverá escolher o tempo de duração da votação, que será exibido como um contador regressivo na página. Ao final do tempo, a votação será encerrada e o resultado será exibido e nenhum voto adicional será aceito.
