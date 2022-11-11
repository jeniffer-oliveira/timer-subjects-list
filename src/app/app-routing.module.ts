import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SubjectComponent } from "./components/subject/subject.component";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/list/list.component";
import { TimerComponent } from "./components/timer/timer.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'timer', component: TimerComponent},
    {path: 'list', component: ListComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'timer', component: TimerComponent}
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}