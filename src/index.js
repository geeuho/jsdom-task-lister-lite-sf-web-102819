document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const inputForm = document.getElementById('create-task-form')
  const inputArea = document.getElementById('new-task-description')
  // userArea.innerText = "hello"
  const selectArea = document.getElementById('mySelect')
  const userInput = document.createElement("input")
  userInput.setAttribute("type", "text")
  userInput.setAttribute("id", "user")
  const inputParent = inputArea.parentNode
  inputParent.insertBefore(userInput, selectArea)


  // function addSubmitListener(){
    inputForm.addEventListener('submit', e => {
      e.preventDefault()
      let input = inputArea.value
      let input2 = userInput.value
      let select = selectArea.value
      let priorityColor = {
        "high" : "red",
        "medium" : "yellow",
        "low" : "green",
        "no priority" : "blue"
      }
      console.log(input)
      console.log(select)
      const list = document.getElementById('list')
      let h3 = document.createElement("li")
      h3.innerText = `Task: ${input}, User: ${input2}`
      h3.style.color = priorityColor[select]
      list.appendChild(h3)

      let deleteButton = document.createElement("button")
      deleteButton.setAttribute('id', 'delete')
      deleteButton.innerText = "x"
      deleteButton.addEventListener('click', e =>{
        e.target.parentElement.remove();
      })
      h3.appendChild(deleteButton)

      // let editButton = document.createElement("button")
      // editButton.setAttribute('id', 'edit')
      // editButton.innerText = 'edit'
      // editButton.addEventListener('click', e => {
      //   e.target.parentElement.assign({}, )
      //   e.target.parentElement.style.color = priorityColor[select]
        
      // })
      // h3.appendChild(editButton)
      inputArea.value = null
      userInput.value = null
    })
    
});
