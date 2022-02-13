import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ExpertTipsComponent } from './expert-tips/expert-tips.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LocationComponent } from './location/location.component';
import { ManualsComponent } from './manuals/manuals.component';
import { RegisterComplainComponent } from './register-complain/register-complain.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'manuals', component: ManualsComponent},
  { path: 'expert-tips', component: ExpertTipsComponent},
  { path: 'register-complain', component: RegisterComplainComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'location', component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
