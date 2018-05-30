import {Task} from './task'

const task = new Task("DM122", false, 0)

console.log(`Task:${task.titulo} - Status:${task.pronto ? 'pronto':'pendente'} - Prioridade:${task.prioridade === 0 ? 'Baixa' : 'Alta'}`)