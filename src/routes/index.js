import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import { HeaderLayout } from '~/Components/Layout';
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
