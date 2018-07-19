<template lang="pug">
  div
    .container
      player.player(
        v-for="(player, index) in players" 
        :key="index"
        :player="player"
        :index="index"
        @remove="removePlayer"
      )
    .actions
      .action
        el-button(@click="addNewPlayer" icon="el-icon-circle-plus-outline")
          .text Adicionar jogador
      .action.action-newGame
        el-button(type="success" @click="newGame" icon="el-icon-d-arrow-right")
          .text Novo jogo
      .action.action-removeAll
        el-button(type="danger" @click="removeAll" icon="el-icon-delete")
          .text Remover todos
</template>

<script>
import Player from '~/components/player'
export default {
  components: { Player },
  data: () => ({
    players: [
      {
        name: 'Jogador 1',
        level: 7,
        gear: 8
      },
      {
        name: 'Jogador 2',
        level: 3,
        gear: 10
      }
    ]
  }),
  methods: {
    removePlayer(index) {
      this.players.splice(index, 1)
    },
    addNewPlayer() {
      this.players.push({
        name: `Jogador ${this.players.length + 1}`,
        gear: 0,
        level: 1
      })
    },
    newGame() {
      this.players = this.players.map(i => {
        i.gear = 0
        i.level = 1
        return i
      })
    },
    removeAll() {
      this.players = []
    }
  }
}
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.player {
  margin: 10px;
  max-width: 25vw;
  flex-grow: 1;
  flex: 1;
}
.actions {
  margin-top: 10px;
  margin-left: 16px;
  text-align: center;
}
.actions .action {
  display: inline-block;
  margin-bottom: 16px;
}
.actions .action button {
  padding: 16px;
}
.actions .action i {
  font-size: 64px;
  margin-bottom: 16px;
}
.actions .action-newGame {
  margin-left: 16px;
  margin-right: 16px;
}
.actions .action-newGame button {
  padding: 16px 36px;
}
.actions .action-removeAll button {
  padding: 16px 24px;
}
@media (max-width: 460px) {
  .player {
    max-width: 100vw;
    min-width: 30vw;
  }
  .actions {
    margin-left: 0;
  }
}
</style>
