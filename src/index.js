import {HeaderComponent} from './components/header.component'
import {NavigationComponent} from './components/navigation.component'
import {PostsComponent} from './components/posts.component'
import {CreateComponent} from './components/create.component'
import {FavoriteComponent} from './components/favorite.component'
import {LoaderComponent} from './components/loader.component'

const header     = new HeaderComponent('header'),
      navigation = new NavigationComponent('navigation'),
      loader     = new LoaderComponent('loader'),
      posts      = new PostsComponent('posts', {loader}),
      create     = new CreateComponent('create'),
      favorite   = new FavoriteComponent('favorite', {loader});

navigation.registerTabs([
    {name: 'posts', component: posts},
    {name: 'create', component: create},
    {name: 'favorite', component: favorite}
]);