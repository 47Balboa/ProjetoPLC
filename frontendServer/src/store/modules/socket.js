import Vue from "vue"


const socket = new WebSocket("ws://localhost:3061")

const emitter = new Vue({
  methods:{
    send(message){
      if (1 === socket.readyState)
        socket.send(message)
    },
    onMessage(){
      return socket.onmessage = function(msg){
        //eslint-disable-next-line no-console
        console.log("mnesasdfsdge-> " + msg.data)
        return msg.data
      }
    }
  }
})


socket.onerror = function(err){
  emitter.$emit("error", err)
}


export default emitter