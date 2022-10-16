import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// route public
const publicRoutes = [
    { path: '/tiktokui', component: Home },
    { path: '/tiktokui/following', component: Following },
    { path: '/tiktokui/profile', component: Profile },
    { path: '/tiktokui/upload', component: Upload, layout: 'HeaderOnly' },
    { path: '/tiktokui/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
