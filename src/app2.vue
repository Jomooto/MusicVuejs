<template>
  <div id="app" class="row mt-6 mx-6">

    <div class="container col-6">
      <div class="input-group input-group-lg">
        <input class="form-control input-lg" type="text"
               placeholder="Nueva tarea"  v-model="newtask.title">
      </div>
      <p class="h6">Total de horas {{totalhoras}}</p>
    </div>

    <select  class="col-2 form-select form-select-lg mb-3" aria-label=".form-select-lg example" v-model="newtask.time">
      <option value = "0" selected>Horas</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
      <option value="11">11</option>
      <option value="12">12</option>
    </select>

    <div class="col-4">
      <a class="btn btn-info btn-lg mr-2" v-on:click="agregar"> Agregar </a>
      <a class="btn btn-danger btn-lg" v-on:click="borrar" > Borrar lista </a>
    </div>

    <div class="coninater col-12 mt-3">
      <ul>
        <!--            <li v-for="t in tracks" v-bind:key="t">{{t.name}} - {{ t.artist}}</li>-->
      </ul>
    </div>

    <table v-if="tasks.length > 0" class="table">
      <thead>
      <tr>
        <th scope="col">Tarea</th>
        <th scope="col">Horas</th>
        <th scope="col">Eliminar</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in tasks" v-bind:key="task.title">
        <td>{{task.title}}</td>
        <td>{{task.time}}</td>
        <td><a class="btn btn-danger" v-on:click="removetask(task)">Eliminar</a></td>
      </tr>

      </tbody>
    </table>
    <h1 class="h1" v-else>No hay tareas</h1>

  </div>

</template>

<script>
// const reducer = (accumulator, currentValue) => accumulator + currentValue

export default {
  name: 'App',
  data () {
    return {
      name: '',
      time: '',
      tasks: [],
      delete: 0,

      newtask: {
        title: '',
        time: 0
      }

    }
  },
  computed: {

    totalhoras () {
      // this.newtask = this.tasks.time.slice()
      let horas = 0
      for (const task of this.tasks) {
        horas += parseInt(task.time)
      }
      return horas
    }
  },
  created () {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || []
  },
  methods: {

    agregar () {
      if (!(this.tasks.find(tarea => tarea.title === this.newtask.title)) && this.newtask.time > 0) {
        this.tasks.push({ title: `${this.newtask.title}`, time: `${this.newtask.time}` })
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
        this.newtask = []
      } else {
        console.log('valor no aceptado')
      }
    },
    borrar () {
      this.tasks = []
    },
    removetask (titulo) {
      this.delete = this.tasks.indexOf(titulo)
      // console.log(this.tasks.indexOf(titulo))
      this.tasks.splice(this.delete, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

  }

}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
