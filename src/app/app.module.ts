// Core Modules Import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

// Routes
import { routes } from './app.route';

// Components Import
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostsComponent } from './posts/posts.component';
import { SearchComponent } from './search/search.component';

// Service Import
import { ApiServiceService } from './service/api-service.service';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { ArchivesComponent } from './archives/archives.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostsComponent,
    PostComponent,
    UserComponent,
    SearchComponent,
    RecentPostComponent,
    ArchivesComponent,
    CategoriesComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ],
  providers: [
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
