import Vue from "vue"

const socket = new WebSocket("wss://api.manuelmariamoreno.pt")

const emitter = new Vue({
  methods:{
    send(message){
      if (1 === socket.readyState)
        socket.send(message)
    }
  }
})

socket.onmessage = function(msg){
  emitter.$emit("message", msg.data)
}
socket.onerror = function(err){
  emitter.$emit("error", err)
}


export default emitter