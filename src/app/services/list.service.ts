import { Injectable } from '@angular/core';

class List {
  title!: string;
}
@Injectable({
  providedIn: 'root'
})

export class ListService {

  private lists: List[] = [];

  constructor() { }

  add(title: string) {
    this.lists.push({ title });
  }

  remove(index: number) {
    this.lists.splice(index, 1);
  }

  getList() {
    return this.lists;
  }
}
