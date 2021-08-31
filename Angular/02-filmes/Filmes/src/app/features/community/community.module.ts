import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChatModule } from './chat/chat.module';
import { ProfileModule } from '../profile/profile.module';


@NgModule({
  declarations: [
    CommunityComponent,
  ],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    SharedModule,
    ChatModule,
    ProfileModule
  ]
})
export class CommunityModule { }
