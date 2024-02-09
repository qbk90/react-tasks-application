import {createContext} from 'react'

export const TaskContext = createContext()
// Esta es la funcion que crea el contexto que se va a llamar TaskContext

export function TaskContextProvider(props) {
  return (
    <TaskContext.Provider>
        { props.children }
    </TaskContext.Provider>
  )
}

export default TaskContext
