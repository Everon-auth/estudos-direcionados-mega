export class Aluno{
    length: number;
    push(data: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public id: number,
        public nome: string,
        public email: string,
    ){}
}