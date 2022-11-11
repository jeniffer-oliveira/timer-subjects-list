import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from 'src/app/Subject';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[] = [];

  discipline = {
    name: 'Marketing',
    diaDaSemana: 'terça-feira',
    time: '19:00'
  }

  constructor(private subjectService: SubjectService) { 
    this.getSubjects()
  }

  ngOnInit(): void {
  }

  getSubjects(): void {
    this.subjectService.getAll().subscribe((subjects) => (this.subjects = subjects));
  }

}

