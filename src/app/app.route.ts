import { Route } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user//user.component';
import { SearchComponent } from './search/search.component';

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: PostsComponent
    }, {
        path: 'post/:id',
        component: PostComponent
    }, {
        path: 'user/:id',
        component: UserComponent
    }, {
        path: 'search',
        component: SearchComponent
    }
];
