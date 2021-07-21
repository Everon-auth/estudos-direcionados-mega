// Importa o script de base de dados
import { database } from "./database.js"

// Onde a lista e vizualização devem ser criados
export const section = document.querySelector('section')

//Onde os botões devem ser criados
export const btns = document.querySelector('.spanbtns')

// Nome das labels das telas
export const labelText =['Nome do Filme:','Gênero:','Data de lançamento:','Duração:','Óscar:','Link da Imagem','Descrição:']

// Ids dos inputs do add e do edit
export const inpIDs = ['nome','gen','data','dur','osc','url','descript']

// onde as caixas flutuantes iniciam a sua criação
export const body = document.querySelector('body')

// Inicia a base de dados, definindo o nome da key e se deve salvar em session storage ou em localStorage
export const data = new database('Filmes',false)