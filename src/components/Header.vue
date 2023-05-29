<template>
  <div class="contain">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3 mb-5">
          <div class="card p-4 w-100">
            <h3 style="text-align: center;">To do List</h3>

            <div class="input">
              <input type="text" placeholder="New Task" @input="cekInput" v-model="text">
              <button @click="addData">+</button>
            </div>

            <div v-if="!datas.length" style="height: 10rem; overflow-y: scroll; padding: 0 .5rem;">
              <p class="text-center">Data Kosong</p>
            </div>

            <div v-else style="height: 10rem; overflow-y: scroll; padding: 0 .5rem;">
              <li v-for="(data, index) in datas" :key="data.id">
                <div>
                  <span>{{ data.nama }}</span>
                </div>
                <button class="btn btn-success btn-sm" @click="btn(index)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                  </svg>
                </button>
              </li>
            </div>
          </div>
        </div>
        <div class="col-lg-6 offset-lg-3">
          <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <span class="fw-semibold fs-5" >Trash</span>
                  </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div class="accordion-body">
                          <div v-if="!trash.length" style="height: 10rem; overflow-y: scroll; padding: 0 .5rem;">
                              <p class="text-center">Data Kosong</p>
                          </div>

                          <div v-else style="height: 10rem; overflow-y: scroll; padding: 0 .5rem;">
                              <li v-for="(sampah, index) in trash" :key="sampah.id">
                                <span style="text-decoration: line-through; color: grey;">{{ sampah.nama }}</span>
                              <div>
                                <button class="btn btn-primary btn-sm" @click="restore(index)">Restore</button>
                                <button class="btn btn-danger btn-sm" @click="remove(index)">X</button>
                              </div>
                              </li>
                          </div>
                          <button class="btn btn-danger btn-sm mt-3" @click="deleteAll">Delete All</button>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: "Header",
    data() {
      return {
        datas: [],
        trash: [],
        text: "",
        checklist: ""
      }
    },
    methods: {
        cekInput(e){
          if(e.target.value.length > 20){
            alert("Teks Terlalu Panjang")
            this.text = ""
          }
        },
        addData(){
          if (this.text){
            this.datas.push({
              nama: this.text
            })
            this.text = ""
          }
        },
        remove(index){
          this.trash.splice(index, 1)
        },
        btn(index){
          const cariData = this.datas[index]
          this.trash.push({
            nama: cariData.nama
          })
          this.datas.splice(index, 1)
        },
        deleteAll(){
          this.trash = []
        },
        restore(index){
          const cariData = this.trash[index]
          this.datas.push({
            nama: cariData.nama
          })
          this.trash.splice(index, 1)
        }
    }
  }

</script>

<style>

  .contain {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
  }

  .input {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
    border: 2px solid rgb(0, 148, 201);
    border-radius: 3px;
    padding: 0 .5rem;
  }

  .input input {
    width: 100%;
    border-radius: 3px;
    border: none;
    padding: 0;
  }

  .input button {
    background-color: transparent;
    color: rgb(15, 254, 119);
    outline: none;
    border: none;
    font-size: 30px;
    padding: 0;
    cursor: pointer;
  }

  .input input:focus {
    outline: none;
  }

  li {
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  li div {
    display: flex;
    align-items: center;
    gap: .5rem;
  }

  .coret {
    text-decoration: line-through;
    color: grey;
  }


</style>